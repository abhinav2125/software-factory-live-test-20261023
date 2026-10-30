import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HomePage from '../app/page.js';
import AboutPage from '../app/about/page.js';

test('home page renders a Software Factory heading and overview content', () => {
  const html = renderToStaticMarkup(createElement(HomePage));
  assert.match(html, /<h1[^>]*>Software Factory<\/h1>/);
  assert.match(html, /pull request/i);
});

test('about page renders an About Us H1', () => {
  const html = renderToStaticMarkup(createElement(AboutPage));
  assert.match(html, /<h1[^>]*>About Us<\/h1>/);
});

test('about page describes the product purpose and the team quality approach', () => {
  const html = renderToStaticMarkup(createElement(AboutPage));
  assert.match(html, /purpose/i);
  assert.match(html, /quality/i);
  assert.match(html, /pull request/i);
});

test('about page includes the factory live e2e marker comment', () => {
  const html = renderToStaticMarkup(createElement(AboutPage));
  assert.ok(html.includes('<!-- factory-live-e2e:20261030-about-us -->'));
});
