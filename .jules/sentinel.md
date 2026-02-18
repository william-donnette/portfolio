## 2025-05-22 - AI Content Sanitization Pattern
**Vulnerability:** Potential Stored XSS via AI-generated MDX content if the model is subject to prompt injection or hallucinations.
**Learning:** Even with system instructions, AI models can sometimes generate unwanted HTML/scripts. Relying solely on the model's instructions is insufficient for security.
**Prevention:** Implement a multi-layer defense: 1) Explicitly forbid dangerous tags in the system prompt. 2) Programmatically sanitize the AI's output before saving it to the filesystem or publishing it.
