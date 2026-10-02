import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => readFileSync(path.join(root, name), 'utf8');
const example = read('examples/hosted-mulch-embed.html');
const guide = read('docs/EMBED.md');
const readme = read('README.md');
const attribute = (tag, name) => tag.match(new RegExp('(?:\\s)' + name + '="([^"]*)"', 'i'))?.[1];
const frames = html => html.match(/<iframe\b[^>]*>/gi) || [];
const snippets = [...guide.matchAll(/```html\n([\s\S]*?)\n```/g)].map(match => match[1]);

test('hosted demo loads exactly the existing public widget, not the install guide', () => {
  assert.equal(frames(example).length, 1);
  assert.equal(attribute(frames(example)[0], 'src'), 'https://covercalcpro.com/embed/mulch/');
  assert.match(example, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
  assert.match(example, /<html lang="en">/);
  assert.match(example, /<h1 id="main-title" tabindex="-1">/);
  assert.match(example, /class="skip" href="#main-title"/);
  assert.match(example, /\.skip:focus-visible/);
  assert.match(example, /a:focus-visible/);
});

test('both pasteable snippets preserve titled responsive scrolling frames and fallback links', () => {
  assert.equal(snippets.length, 2);
  for (const html of [example, ...snippets]) {
    const frame = frames(html)[0];
    assert.ok(attribute(frame, 'title'));
    assert.equal(attribute(frame, 'width'), '100%');
    assert.ok(Number(attribute(frame, 'height')) >= 700);
    assert.equal(attribute(frame, 'loading'), 'lazy');
    assert.doesNotMatch(frame, /scrolling="no"|aria-hidden|display\s*:\s*none/i);
    assert.match(html, /<a\b[^>]*href="[^\"]+"[^>]*>Open (?:the full mulch calculator|the standalone volume checker)<\/a>/);
  }
  assert.equal(attribute(frames(snippets[0])[0], 'referrerpolicy'), 'no-referrer');
  assert.equal(attribute(frames(snippets[1])[0], 'src'), '/tools/landscape-volume-check.html');
  assert.ok(existsSync(path.join(root, attribute(frames(snippets[1])[0], 'src'))));
});

test('new example has no tracking, input collection, external scripts, hidden backlinks, or credentials', () => {
  assert.doesNotMatch(example, /<script\b|<form\b|<input\b|fetch\(|XMLHttpRequest|localStorage|sessionStorage|indexedDB|document\.cookie|gtag|adsbygoogle|token|api[-_ ]?key/i);
  const outbound = [...example.matchAll(/<a\b[^>]*>/g)].map(match => match[0]);
  assert.ok(outbound.length >= 3);
  for (const link of outbound.filter(tag => attribute(tag, 'href')?.startsWith('https://'))) {
    assert.equal(new URL(attribute(link, 'href')).origin, 'https://covercalcpro.com');
    assert.match(attribute(link, 'rel'), /nofollow/);
  }
  assert.doesNotMatch(example, /user-scalable=no|maximum-scale=1|transition:\s*all|outline:\s*none/);
});

test('all new documentation links to local kit files actually resolve', () => {
  for (const [file, text] of [['README.md', readme], ['docs/EMBED.md', guide]]) {
    for (const [, reference] of text.matchAll(/\]\(([^)]+)\)/g)) {
      if (reference.startsWith('https://') || reference.startsWith('#')) continue;
      assert.ok(existsSync(path.resolve(root, path.dirname(file), reference.split('#')[0])), `${file}: ${reference}`);
    }
  }
  assert.match(readme, /\[Embed a calculator\]\(docs\/EMBED.md\)/);
  assert.match(guide, /MIT license applies to the files included here, not to the complete production website/);
  assert.match(guide, /not a hidden backlink mechanism/);
});

test('worked checks reproduce the documented whole-bag arithmetic without product assumptions', () => {
  const ft = 100 * 3 / 12;
  assert.equal(ft, 25);
  assert.equal(Math.ceil(ft / 2), 13);
  assert.equal(Number((ft / 27).toFixed(3)), 0.926);
  const metricVolume = 10 * 5 / 100;
  assert.equal(metricVolume, 0.5);
  assert.equal(Math.ceil(metricVolume * 1000 / 50), 10);
  assert.match(guide, /9\.290304 m²/);
  assert.match(guide, /13 whole bags/);
  assert.match(guide, /10 whole bags/);
  assert.match(example, /13 whole bags/);
});
