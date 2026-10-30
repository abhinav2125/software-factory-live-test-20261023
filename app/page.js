import { createElement as h } from 'react';

export const metadata = {
  title: 'Home',
  description:
    'Software Factory demo site home page: turn GitHub issues into verified, human-reviewed pull requests.',
};

export default function HomePage() {
  return h(
    'div',
    { className: 'page page--home' },
    h(
      'section',
      { className: 'hero' },
      h('h1', null, 'Software Factory'),
      h(
        'p',
        { className: 'hero__lede' },
        'A demo site for the Software Factory service: open a GitHub issue, and an automated solver implements it, verifies the result, and opens a pull request for human review.',
      ),
    ),
    h(
      'section',
      null,
      h('h2', null, 'What this site is'),
      h(
        'p',
        null,
        'This small site demonstrates a project enrolled in the Software Factory service. It is built with Next.js, verified by automated checks, and deployed through the same pull-request workflow the service produces.',
      ),
    ),
    h(
      'section',
      null,
      h('h2', null, 'How it works'),
      h(
        'ol',
        null,
        h('li', null, 'A collaborator opens an issue describing the change they want.'),
        h('li', null, 'The solver implements the change in the repository.'),
        h('li', null, 'Automated verification installs dependencies and runs lint, tests, and the production build.'),
        h('li', null, 'A pull request is opened for humans to review and merge.'),
      ),
    ),
  );
}
