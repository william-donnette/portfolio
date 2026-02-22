# Sentinel Journal 🛡️

## 2026-02-22 - Missing rel="noopener noreferrer" on External Links
**Vulnerability:** Several external links in the application used \`target="_blank"\` without \`rel="noopener noreferrer"\`, which can lead to reverse tabnabbing attacks.
**Learning:** Centralizing link behavior in a reusable component (like \`Button\`) allows for broad application of security best practices across the entire codebase.
**Prevention:** Enhance shared UI components to automatically include security attributes for external links.
