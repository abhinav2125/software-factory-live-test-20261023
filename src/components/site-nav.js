import { createElement } from 'react';
// Note: the explicit .js extension lets plain Node (node --test) resolve the
// module as well; Next.js resolves it identically to 'next/link'.
import Link from 'next/link.js';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
];

/**
 * Shared semantic navigation bar rendered on every page via the root layout.
 * Uses next/link for client-side navigation. LinkComponent is injectable so
 * the component can be rendered in plain Node tests without a Next router.
 */
export default function SiteNav({ LinkComponent = Link } = {}) {
  return createElement(
    'nav',
    { className: 'site-nav', 'aria-label': 'Primary' },
    createElement(
      'ul',
      { className: 'site-nav__list' },
      navLinks.map(({ href, label }) =>
        createElement(
          'li',
          { key: href, className: 'site-nav__item' },
          createElement(LinkComponent, { href, className: 'site-nav__link' }, label),
        ),
      ),
    ),
  );
}
