import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { PassThrough } from 'node:stream';
import { AppRouter } from './router';

// Wait for lazy route modules so every visitor receives the actual page, not a loading shell.
export function render(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let html = '';
    const timeout = setTimeout(() => { stream.abort(); reject(new Error(`Render timed out: ${path}`)); }, 30000);
    output.on('data', chunk => { html += chunk.toString(); });
    output.on('end', () => { clearTimeout(timeout); resolve(html); });
    output.on('error', error => { clearTimeout(timeout); reject(error); });
    const stream = renderToPipeableStream(<StaticRouter location={path}><AppRouter /></StaticRouter>, {
      onAllReady() { stream.pipe(output); },
      onError(error) { clearTimeout(timeout); reject(error); },
    });
  });
}
