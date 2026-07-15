## 2026-07-15 - Command Injection in GitLab CI
**Vulnerability:** Shell variables like `$TOPIC`, `$BRANCH_NAME`, and `$OPENAI_API_KEY` were used without double quotes in `.gitlab-ci.yml` script blocks.
**Learning:** External inputs or dynamic values sourced from environment variables can contain spaces or shell-metacharacters (e.g., `;`, `&`, `|`), which can lead to command injection or broken scripts when executed in a shell environment without proper quoting.
**Prevention:** Always double-quote shell variables in CI/CD pipelines and shell scripts, especially when they originate from user input or external APIs.
