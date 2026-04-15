## 2025-05-14 - [Shell Command Injection in CI/CD]
**Vulnerability:** Command injection in GitLab CI/CD pipeline. Unquoted shell variables like `$TOPIC` and `$BRANCH_NAME` in `script` blocks could allow an attacker to execute arbitrary commands by crafting malicious input.
**Learning:** Shell scripts in CI/CD pipelines are often overlooked as an attack vector. Variables passed from external sources (like UI triggers) must be treated as untrusted input.
**Prevention:** Always wrap shell variables in double quotes (e.g., `"$VARIABLE"`) in CI/CD script blocks to prevent word splitting and command injection.
