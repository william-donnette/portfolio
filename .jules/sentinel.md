## 2025-05-14 - Removed hardcoded Algolia API key
**Vulnerability:** The Algolia search API key was hardcoded in `docusaurus.config.ts`.
**Learning:** Even though search keys are meant to be public in the client-side bundle, hardcoding them in the source code makes it harder to rotate them and can lead to accidental exposure of more sensitive keys if the same pattern is followed for other secrets.
**Prevention:** Always use environment variables for API keys and configuration that might change between environments. Added a validation check to ensure the key is present during production builds.
