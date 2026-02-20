# Sentinel Security Journal

## 2025-05-22 - Enforcing Environment Variable for Algolia Search API Key
**Vulnerability:** Hardcoded Algolia Search API Key in `docusaurus.config.ts`.
**Learning:** Moving required configuration fields (like `algolia.apiKey`) to environment variables without a fallback will cause the Docusaurus build to fail with a `ValidationError` if the variable is missing.
**Prevention:** Always provide a placeholder in `.env.example` and ensure CI/CD pipelines are updated with the necessary environment variables when removing hardcoded defaults.
