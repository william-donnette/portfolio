## 2025-03-15 - [Above-the-fold Lazy Loading Anti-pattern]
**Learning:** Adding `loading="lazy"` to images that are visible on the initial viewport (above the fold) is a performance anti-pattern. It delays the loading of critical content and negatively impacts the Largest Contentful Paint (LCP) metric.
**Action:** Always identify the viewport position of an element before applying lazy loading. Reserve it for components clearly located below the fold, such as the projects section in this portfolio.
