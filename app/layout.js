import { createElement } from 'react';
import './globals.css';
import SiteNav from '../src/components/site-nav.js';

export const metadata = {
  title: {
    default: 'Software Factory',
    template: '%s | Software Factory',
  },
  description:
    'Software Factory demo site: an automated service that turns GitHub issues into reviewed pull requests.',
};

export default function RootLayout({ children }) {
  return createElement(
    'html',
    { lang: 'en' },
    createElement(
      'body',
      null,
      createElement(
        'header',
        { className: 'site-header' },
        createElement(
          'div',
          { className: 'container site-header__inner' },
          createElement('span', { className: 'site-header__brand' }, 'Software Factory'),
          createElement(SiteNav, null),
        ),
      ),
      createElement('main', { className: 'container site-main' }, children),
      createElement(
        'footer',
        { className: 'site-footer' },
        createElement(
          'div',
          { className: 'container' },
          createElement(
            'p',
            null,
            'Software Factory demo site. Issues in, reviewed pull requests out.',
          ),
        ),
      ),
    ),
  );
}
