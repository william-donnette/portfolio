## 2025-05-15 - [Security Enhancements and Fixes]
**Vulnerability:** Hardcoded Algolia API key in docusaurus.config.ts and a high-severity DoS vulnerability in Axios.
**Learning:** Hardcoding public API keys is a common but risky practice that can lead to credential leakage if permissions are changed. Vulnerable dependencies like Axios can expose the application to DoS attacks even if not directly used in the main application logic but present in the environment.
**Prevention:** Use environment variables for all API keys, even if they appear public. Regularly run `npm audit` and upgrade dependencies to fix known vulnerabilities. Implement defense-in-depth measures like Content Security Policy (CSP) to mitigate risks from XSS.
