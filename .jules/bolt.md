## 2026-06-15 - [Image Optimization for CLS and LCP]
**Learning:** Adding explicit `width` and `height` attributes to images is crucial for preventing Cumulative Layout Shift (CLS) in Docusaurus/React apps, even when using CSS for sizing. Using `fetchPriority="high"` on the hero image (LCP element) significantly improves perceived load performance.
**Action:** Always identify natural dimensions of images and LCP candidates early. Apply `width`, `height`, and `fetchPriority` or `loading="lazy"` appropriately to all key images.
