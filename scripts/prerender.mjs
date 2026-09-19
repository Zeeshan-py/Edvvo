import fs from 'node:fs/promises';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', mode: 'production' });
try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx');
  const files = (await fs.readdir('dist', { recursive: true })).filter(file => file.endsWith('.html'));
  for (const file of files) {
    const path = file === 'index.html' ? '/' : '/' + file.replace(/\\/g, '/').replace(/\.html$/, '');
    const template = await fs.readFile(`dist/${file}`, 'utf8');
    if (!template.includes('<div id="app"></div>')) throw new Error(`Missing empty app root: ${file}`);
    const html = await render(path);
    if (!html.includes('<h1')) throw new Error(`Missing page heading: ${path}`);
    await fs.writeFile(`dist/${file}`, template.replace('<div id="app"></div>', () => `<div id="app">${html}</div>`));
  }
  console.log(`Prerendered ${files.length} complete route documents.`);
} finally {
  await server.close();
}
