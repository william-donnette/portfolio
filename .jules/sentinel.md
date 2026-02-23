# Sentinel Security Journal

## 2025-05-14 - Shell Command Injection in GitLab CI
**Vulnerability:** The `$TOPIC` variable was used without quotes in a shell command within `.gitlab-ci.yml`, allowing for arbitrary command execution if the variable contains shell-special characters.
**Learning:** Variables provided by users or external systems must always be quoted when used in shell scripts to prevent the shell from interpreting them as multiple arguments or separate commands.
**Prevention:** Always quote shell variables: `"$VARIABLE"`. Use linters like ShellCheck for scripts, although it might not catch all CI/CD YAML-embedded scripts.

## 2025-05-14 - Hardcoded Algolia Search API Key
**Vulnerability:** The Algolia `apiKey` was hardcoded in `docusaurus.config.ts`.
**Learning:** While search-only keys are often public, hardcoding them in source code makes rotation difficult and violates the principle of separating configuration from code.
**Prevention:** Use environment variables for all API keys and secrets. Use `.env.example` to document required variables without exposing actual values.
