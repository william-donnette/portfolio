## 2025-05-15 - [Image Optimization Patterns]
**Learning:** For React/Docusaurus projects, `fetchPriority` must be camelCased to be correctly recognized as a prop, even though it's `fetchpriority` in standard HTML. Explicit `width` and `height` attributes should always be added to images alongside CSS sizing to allow the browser to reserve space and prevent Cumulative Layout Shift (CLS).
**Action:** Always use camelCase for `fetchPriority` in JSX and cross-reference Tailwind classes (e.g., `w-80`) with pixel values (320px) for explicit image attributes.
