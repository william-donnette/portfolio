## 2025-05-15 - [Command Injection in GitLab CI]
**Vulnerability:** Unquoted shell variables `$TOPIC` and `$BRANCH_NAME` in `.gitlab-ci.yml` allowed for command injection when running `node generate-article.mjs`.
**Learning:** Shell variables in CI configurations must always be quoted when passed as arguments to commands to prevent malicious input from being interpreted as shell commands.
**Prevention:** Systematically quote all variables in CI/CD script blocks, especially those derived from user input or external sources.
