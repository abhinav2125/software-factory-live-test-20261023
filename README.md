# Software Factory live test

This repository is enrolled in the persistent Software Factory service on Portainer. Every open issue posted by a current write, maintain or admin collaborator is eligible automatically; no label or manual runner command is required.

The solver runs OpenCode through the existing LiteLLM `qwen3-coder-next` route. It can add or update project source, documentation, tests, package dependencies and root configuration. Execution policy, CI authority and credentials remain protected.

A fresh verifier installs public npm dependencies and runs the project's lint, typecheck, test and build scripts when present. Next.js projects must supply lint, typecheck and build scripts. The service creates a pull request after successful verification. Humans review and merge all pull requests.

Each issue has a conservative $5 model accounting limit and a one-hour solve/verification deadline per stage. The controller polls GitHub every five seconds, retains state in PostgreSQL, and restarts automatically with its workers.

Generated dependencies, caches and production output must remain untracked. Include package-lock.json and any required TypeScript configuration in application changes.
