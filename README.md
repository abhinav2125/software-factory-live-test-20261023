# Software Factory live acceptance fixture

This public repository contains only synthetic code and tests. It is used to test automatic issue pickup, an isolated OpenCode worker, independent verification, and a pull request for human review.

`uniqueStrings` deliberately contains a bug at the initial commit. `npm test` must fail until the factory fixes it. Tests and automation policy are protected from candidate changes. No external dependencies or repository secrets are required.

The factory must leave the final PR unmerged for human approval.
