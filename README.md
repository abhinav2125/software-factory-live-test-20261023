# Software Factory live test

This repository is enrolled in the persistent Software Factory service on Portainer. Every open issue posted by a current write, maintain or admin collaborator is eligible automatically; no label or manual runner command is required.

The solver runs OpenCode through the existing LiteLLM `qwen3-coder-next` route. It can add or update project source, documentation, tests, package dependencies and root configuration. Execution policy, CI authority and credentials remain protected.

A fresh verifier installs public npm dependencies and runs the project's lint, typecheck, test and build scripts when present. Next.js projects require a production build script; other checks run when present. The service creates a pull request after successful verification. Humans review and merge all pull requests.

Model spending has no dollar cap, as authorized by the repository owner. Each solve/verification stage has a one-hour deadline. The controller polls GitHub every five seconds, retains state in PostgreSQL, and restarts automatically with its workers.

Generated dependencies, caches and production output must remain untracked. Include package-lock.json and any required TypeScript configuration in application changes.

## The website

This repository also contains a small Next.js (App Router) demo site for the Software Factory service:

- `/` — the home page, describing what the service does and how it works.
- `/about` — the About Us page, describing the product's purpose and the team's approach to quality.

Both pages share a semantic navigation bar (a `<nav aria-label="Primary">` landmark) with **Home** (`/`) and **About Us** (`/about`) links that use Next.js client-side navigation (`next/link`). The layout uses system fonts only — no external fonts, images, or scripts — and remains usable at a 375px mobile viewport.

### Running the site

```sh
npm install        # or: npm ci
npm run dev        # development server (defaults to http://localhost:3000)
```

Then open `http://localhost:3000/` for the home page and `http://localhost:3000/about` for the About Us page. The navbar links navigate between the two routes; direct loads and refreshes of `/about` also work.

### Production build and start

```sh
npm run build      # production build (next build --webpack)
npm start          # serve the production build on http://localhost:3000
```

### Tests

```sh
npm test           # node --test: unique-strings unit tests plus render tests
                   # for the shared navbar and both pages
```
