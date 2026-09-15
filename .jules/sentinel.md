## 2025-09-15 - [Quote Shell Variables in CI Pipeline Scripts]
**Vulnerability:** Shell variables in `.gitlab-ci.yml` (`$TOPIC`, `$BRANCH_NAME`, `$OPENAI_API_KEY`) were left unquoted during command execution.
**Learning:** Unquoted variables passed to shell commands (like `node generate-article.mjs $TOPIC`) or echo redirections (`echo OPENAI_API_KEY=$OPENAI_API_KEY > .env`) allow command injection or syntax breakage when input contains spaces, quotes, or special shell characters.
**Prevention:** Always wrap environment and user-supplied shell variables in double quotes (`"$VARIABLE"`) in CI script commands.
