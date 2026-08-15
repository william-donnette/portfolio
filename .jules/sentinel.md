## 2025-05-18 - Quote Shell Variables in GitLab CI Scripts
**Vulnerability:** Unquoted shell expansion of user-supplied CI variables (`$TOPIC`, `$BRANCH_NAME`, `$OPENAI_API_KEY`) in `.gitlab-ci.yml`.
**Learning:** External variables passed directly into command invocations or subshells within CI configuration files can lead to parameter splitting or shell injection vulnerabilities if unquoted.
**Prevention:** Always enclose variable expansions in double quotes (`"$VAR"`) when invoking shell subshells or passing arguments in CI configuration script blocks.
