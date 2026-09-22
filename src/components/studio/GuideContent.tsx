import type { ReactNode } from 'react';

export function GuideContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const blocks: ReactNode[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd();
    if (!line.trim()) continue;
    if (line.startsWith('```')) {
      const code: string[] = [];
      while (++i < lines.length && !lines[i].startsWith('```')) code.push(lines[i]);
      blocks.push(<pre key={i} className="p-5 my-5 rounded-xl ed-tint overflow-x-auto"><code>{code.join('\n')}</code></pre>);
    } else if (/^#{1,2} /.test(line)) {
      blocks.push(<h2 key={i} className="text-2xl font-semibold mt-8 mb-3">{line.replace(/^#{1,2} /, '')}</h2>);
    } else if (/^(\s*- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const pattern = ordered ? /^\d+\. / : /^\s*- /;
      const items: ReactNode[] = [];
      do {
        items.push(<li key={i}>{lines[i].replace(pattern, '')}</li>);
        i++;
      } while (i < lines.length && pattern.test(lines[i]));
      i--;
      blocks.push(ordered ? <ol key={i} className="list-decimal pl-6 my-4">{items}</ol> : <ul key={i} className="list-disc pl-6 my-4">{items}</ul>);
    } else {
      blocks.push(<p key={i} className="ed-ink mb-4 leading-relaxed">{line}</p>);
    }
  }
  return <>{blocks}</>;
}
