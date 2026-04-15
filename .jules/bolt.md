## 2025-05-15 - [Image Optimization Verification]
**Learning:** When verifying performance attributes like `fetchPriority` in a React/Docusaurus environment using automated tools (like Playwright), remember that React's `fetchPriority` attribute is rendered as lowercase `fetchpriority` in the actual DOM.
**Action:** Always check for lowercase attribute names when querying the DOM in verification scripts for React-based applications.
