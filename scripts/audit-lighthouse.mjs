import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

// Install the audit tool separately so it is not shipped with the application.
const cli = path.resolve(process.env.LIGHTHOUSE_CLI || '.cache/audit/node_modules/lighthouse/cli/index.js');
if (!fs.existsSync(cli)) throw new Error('Install lighthouse@12.8.2 into .cache/audit first (see SEO-IMPROVEMENTS.md).');
const base = process.env.AUDIT_ORIGIN || 'http://127.0.0.1:4173';
const routes = process.argv.slice(2);
const targets = routes.length ? routes : ['/', '/roadmaps', '/roadmaps/python-data-analysis', '/roadmaps/android-development', '/roadmaps/cloud-devops', '/roadmaps/web-accessibility', '/explore'];
const profiles = process.env.AUDIT_PROFILES?.split(',') || ['mobile', 'desktop'];
const categories = ['performance', 'accessibility', 'best-practices', 'seo'];
const directory = path.resolve('reports/lighthouse');
fs.mkdirSync(directory, { recursive: true });
const results = [];
for (const profile of profiles) {
  for (const route of targets) {
    const filename = `${profile}-${route.replace(/^\/+|\/+$/g, '').replaceAll('/', '-') || 'home'}`;
    const output = path.join(directory, filename);
    const args = [cli, new URL(route, base).href, '--quiet', '--chrome-flags=--headless=new', '--only-categories=' + categories.join(','), '--output=json', '--output=html', '--output-path=' + output];
    if (profile === 'desktop') args.push('--preset=desktop');
    const run = spawnSync(process.execPath, args, { stdio: 'inherit', timeout: 240000, env: process.env });
    if (run.status !== 0) throw new Error(`Lighthouse failed for ${profile} ${route}: ${run.error?.message || run.status}`);
    const report = JSON.parse(fs.readFileSync(output + '.report.json', 'utf8'));
    if (report.runtimeError) throw new Error(JSON.stringify(report.runtimeError));
    const scores = Object.fromEntries(categories.map(name => [name, Math.round(report.categories[name].score * 100)]));
    const result = { route, profile, scores, fetchedAt: report.fetchTime, lighthouseVersion: report.lighthouseVersion, warnings: report.runWarnings };
    results.push(result);
    console.log(JSON.stringify(result));
    fs.writeFileSync(path.join(directory, 'summary.json'), JSON.stringify(results, null, 2));
  }
}
if (results.some(result => Object.values(result.scores).some(score => score <= 80))) process.exitCode = 1;
