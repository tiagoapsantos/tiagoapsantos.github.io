import { readFileSync, existsSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import { join } from 'node:path';
const read = p => readFileSync(join('dist', p), 'utf8');
let checks = 0;

// Expected counts come from the content collection (same rules as src/data/projects.ts),
// so adding a project does not require editing hard-coded numbers here.
const staticRoutes = ['', 'about/', 'contact/', 'projects/'];
const projects = {};
for (const locale of ['pt', 'en']) {
  const dir = join('src', 'content', 'projects', locale);
  projects[locale] = readdirSync(dir).filter(name => name.endsWith('.md')).map(name => {
    const source = readFileSync(join(dir, name), 'utf8').replace(/\r\n/g, '\n');
    const [, frontmatter = '', body = ''] = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/) ?? [];
    const field = key => frontmatter.match(new RegExp('^' + key + ':\\s*(.+)$', 'm'))?.[1].trim();
    assert.equal(field('locale'), locale, name + ': locale does not match folder'); checks++;
    const slug = name.replace(/\.md$/, '');
    return { slug, key: field('translationKey') ?? slug, caseStudy: field('caseStudy') === 'true' && body.trim().length > 0 };
  });
}
assert.ok(projects.pt.length > 0); checks++;
assert.equal(projects.pt.length, projects.en.length, 'PT and EN must list the same number of projects'); checks++;
for (const project of projects.pt) {
  assert.ok(projects.en.some(other => other.key === project.key && other.caseStudy === project.caseStudy), 'missing EN counterpart for ' + project.key); checks++;
}

for (const [locale, prefix] of [['pt', ''], ['en', 'en/']]) {
  const entries = projects[locale];
  const home = read(prefix + 'index.html');
  const list = read(prefix + 'projects/index.html');
  assert.equal((list.match(/class="project-card project-card-rich/g) || []).length, entries.length); checks++;
  assert.equal((home.match(/class="home-project-card"/g) || []).length, entries.filter(entry => entry.slug !== 'pedro-pires').length); checks++;
  assert.ok(home.indexOf('featured-artist') < home.indexOf('class="home-project-card"')); checks++;
  for (const entry of entries.filter(entry => entry.caseStudy)) {
    assert.ok(existsSync(join('dist', prefix + 'projects', entry.slug, 'index.html')), 'missing case study ' + prefix + entry.slug); checks++;
  }
  const page = read(prefix + 'projects/pedro-pires/index.html');
  assert.ok(page.includes('81') && page.includes('Pedro Pires') && page.includes('hreflang="en"') && page.includes('hreflang="pt-PT"')); checks++;
  assert.equal((page.match(new RegExp('<img [^>]*src="[^"]*/images/projects/pedro-pires/', 'g')) || []).length, 3); checks++;
}
const htmlFiles = dir => readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? htmlFiles(join(dir,e.name)) : e.name.endsWith('.html') ? [join(dir,e.name)] : []);
for(const file of htmlFiles('dist')) {
  const html=readFileSync(file,'utf8');
  for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const local=decodeURI(match[1]);
    assert.ok(existsSync(join('dist',local,local.endsWith('/')?'index.html':'')), file + ': missing ' + local); checks++;
  }
}
const caseStudies = projects.pt.filter(p => p.caseStudy).length + projects.en.filter(p => p.caseStudy).length;
assert.equal((read('sitemap.xml').match(/<loc>/g)||[]).length, staticRoutes.length * 2 + caseStudies); checks++;
assert.ok(!existsSync('dist/docs') && !existsSync('dist/src')); checks++;
console.log(checks + ' build assertions passed: ' + projects.pt.length + ' projects per language, ' + caseStudies + ' case study pages, translations, sitemap and all local links/resources.');
