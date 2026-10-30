import { createElement as h } from 'react';

export const metadata = {
  title: 'About Us',
  description:
    'About the Software Factory team: what the product does and how we approach quality.',
};

export default function AboutPage() {
  return h(
    'div',
    { className: 'page page--about' },
    h('span', {
      'aria-hidden': 'true',
      dangerouslySetInnerHTML: { __html: '<!-- factory-live-e2e:20261030-about-us -->' },
    }),
    h('h1', null, 'About Us'),
    h(
      'section',
      null,
      h('h2', null, 'Our purpose'),
      h(
        'p',
        null,
        'Software Factory exists to shorten the distance between an idea and a shipped change. The product watches a repository for new issues, implements the requested work in an isolated environment, verifies the result with the project\u2019s own checks, and opens a pull request so a human can review and merge with confidence.',
      ),
    ),
    h(
      'section',
      null,
      h('h2', null, 'How we approach quality'),
      h(
        'p',
        null,
        'Every change is validated before it reaches review: dependencies are installed from a clean lockfile, existing tests keep running, new behavior is covered where practical, and a production build must succeed. We treat protected configuration and credentials as off-limits to automation, and we keep generated artifacts out of version control.',
      ),
    ),
    h(
      'section',
      null,
      h('h2', null, 'The team'),
      h(
        'p',
        null,
        'We are a small group of engineers building reliable automation around everyday software work. We believe automation should be boring in the best way: predictable, auditable, and always leaving the final decision to people.',
      ),
    ),
  );
}
