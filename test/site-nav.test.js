import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SiteNav, { navLinks } from '../src/components/site-nav.js';

// Stand-in for next/link so the nav can render outside a Next.js router.
function StubLink({ href, children, ...rest }) {
  return createElement('a', { href, ...rest }, children);
}

function renderNav() {
  return renderToStaticMarkup(createElement(SiteNav, { LinkComponent: StubLink }));
}

test('navigation bar is a semantic nav with a primary landmark label', () => {
  const html = renderNav();
  assert.match(html, /<nav[^>]*aria-label="Primary"/);
});

test('navigation bar contains Home and About Us links to / and /about', () => {
  const html = renderNav();
  assert.match(html, /<a[^>]*href="\/"[^>]*>Home<\/a>/);
  assert.match(html, /<a[^>]*href="\/about"[^>]*>About Us<\/a>/);
});

test('navLinks declares exactly the two primary destinations in order', () => {
  assert.deepEqual(navLinks, [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
  ]);
});
