import fs from 'node:fs';
import ts from 'typescript';
import type { Plugin } from 'vite';
import { SITE_URL, pages, missingPage, roadmapSchema, studyToolSchema, type PageMeta } from '../src/seo/site';

// Read only literal metadata from the content arrays, without importing browser code.
function contentPages(file: string, variable: string, prefix: string, noindex = false) {
  const source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const result: Record<string, PageMeta> = {};
  function visit(node: ts.Node) {
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === variable && node.initializer && ts.isArrayLiteralExpression(node.initializer)) {
      for (const item of node.initializer.elements) {
        if (!ts.isObjectLiteralExpression(item)) continue;
        const values: Record<string, string> = {};
        for (const prop of item.properties) {
          if (ts.isPropertyAssignment(prop) && (ts.isStringLiteral(prop.initializer) || ts.isNumericLiteral(prop.initializer))) values[prop.name.getText(source)] = prop.initializer.text;
          if (ts.isPropertyAssignment(prop) && prop.name.getText(source) === 'noindex' && prop.initializer.kind === ts.SyntaxKind.TrueKeyword) values.noindex = 'true';
        }
        if (values.id && values.title) result[`${prefix}/${values.id}`] = { title: values.title, description: values.abstract || values.description || 'Read this archived Edvvo platform announcement.', noindex: noindex || values.noindex === 'true' };
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  return result;
}
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function seoPlugin(): Plugin {
  return {
    name: 'edvvo-route-seo', enforce: 'post',
    resolveId(id) { if (id === 'virtual:content-meta') return '\0virtual:content-meta'; },
    load(id) {
      if (id === '\0virtual:content-meta') return `export default ${JSON.stringify({ ...contentPages('src/pages/Workspace/SolutionsPage.tsx', 'solutions', '/solutions', true), ...contentPages('src/utils/notificationsData.ts', 'notificationsData', '/notifications', true) })};`;
    },
    generateBundle(_, bundle) {
      const index = bundle['index.html'];
      if (!index || index.type !== 'asset') throw new Error('Missing build HTML');
      const template = String(index.source);
      const allPages = { ...pages, ...contentPages('src/pages/Workspace/SolutionsPage.tsx', 'solutions', '/solutions', true), ...contentPages('src/utils/notificationsData.ts', 'notificationsData', '/notifications', true) };
      const render = (path: string, meta: PageMeta) => {
        let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(meta.title)} | Edvvo</title>`);
        html = html.replace(/<meta\s+(?:name|property)="(?:description|robots|og:title|og:description|og:url|og:type|twitter:title|twitter:description)"[^>]*>/g, '');
        html = html.replace(/<link\s+rel="canonical"[^>]*>/g, '');
        const tags = [
          `<link rel="canonical" href="${SITE_URL}${escape(path)}" />`,
          `<meta name="description" content="${escape(meta.description)}" />`,
          `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
          `<meta property="og:title" content="${escape(meta.title)} | Edvvo" />`,
          `<meta property="og:description" content="${escape(meta.description)}" />`,
          `<meta property="og:url" content="${SITE_URL}${escape(path)}" />`,
          `<meta property="og:type" content="${path.startsWith('/solutions/') ? 'article' : 'website'}" />`,
          `<meta name="twitter:title" content="${escape(meta.title)} | Edvvo" />`,
          `<meta name="twitter:description" content="${escape(meta.description)}" />`,
        ].join('\n    ');
        const roadmap = roadmapSchema(path);
        const studyTool = studyToolSchema(path);
        const schema = roadmap || studyTool;
        const structured = schema ? `<script id="${roadmap ? 'roadmap-schema' : 'study-tool-schema'}" type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>` : '';
        return html.replace('</head>', `${tags}\n${structured}\n  </head>`);
      };
      for (const [path, meta] of Object.entries(allPages)) {
        if (path === '/') index.source = render(path, meta);
        else this.emitFile({ type: 'asset', fileName: `${path.slice(1)}.html`, source: render(path, meta) });
      }
      this.emitFile({ type: 'asset', fileName: '404.html', source: render('/404', missingPage) });
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.entries(allPages).filter(([, meta]) => !meta.noindex).map(([path, meta]) => `  <url><loc>${SITE_URL}${path}</loc>${meta.updated ? `<lastmod>${meta.updated}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`;
      const robots = `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /assets/private/\n\nUser-agent: GPTBot\nDisallow: /\nUser-agent: ChatGPT-User\nDisallow: /\nUser-agent: CCBot\nDisallow: /\nUser-agent: anthropic-ai\nDisallow: /\nUser-agent: Google-Extended\nDisallow: /\nUser-agent: FacebookBot\nDisallow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
      // Keep checked-in public files and deployed files generated from the same route list.
      for (const [name, content] of Object.entries({ 'sitemap.xml': sitemap, 'robots.txt': robots })) {
        fs.writeFileSync(`public/${name}`, content);
        this.emitFile({ type: 'asset', fileName: name, source: content });
      }
    },
  };
}
