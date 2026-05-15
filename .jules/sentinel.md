# Sentinel Journal 🛡️

This journal documents critical security learnings, vulnerability patterns, and reusable security patterns for this project.

## 2024-05-16 - Command Injection in GitLab CI
**Vulnerability:** Shell variables `$TOPIC` and `$BRANCH_NAME` were not quoted in `.gitlab-ci.yml`.
**Learning:** Unquoted variables in shell scripts can lead to command injection if the variables contain malicious characters or spaces.
**Prevention:** Always double-quote shell variables in scripts.
