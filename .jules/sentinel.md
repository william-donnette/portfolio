## 2025-05-18 - Quote Shell Variables in GitLab CI
**Vulnerability:** Unquoted variable `$TOPIC` in `.gitlab-ci.yml` script step passed directly to `node generate-article.mjs $TOPIC`.
**Learning:** Shell parameters passed from trigger inputs or environment variables without double quotes are susceptible to word splitting, unexpected option injection, or command injection.
**Prevention:** Always wrap variables in double quotes (`"$VARIABLE"`) in shell script blocks in CI configuration files.
