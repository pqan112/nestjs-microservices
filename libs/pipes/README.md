# pipes

This library was generated with [Nx](https://nx.dev).

bổ sung sau

- **PDF:** EJS, Puppeteer
- **Storage:** Cloudinary
- **Payment:** Stripe
- **Message Broker:** Kafka

### 5. Integrations & Business Rules

- Keep Stripe, Kafka, Cloudinary, PDF, and email logic separated into appropriate services.
- Validate external inputs, webhook signatures, and Kafka message payloads.
- Ensure Stripe webhook and Kafka consumer processing is idempotent.
- Only mark invoices as `PAID` after verified successful payment.
- Handle integration failures and avoid inconsistent invoice data.

### 6. Security

- Never hardcode or expose secrets and credentials.
- Use environment variables for sensitive configuration.
- Never trust client-provided payment status.
- Avoid logging sensitive information.

### 7. Before Completing Tasks

- Review modified files and ensure changes follow existing conventions.
- Run relevant tests, lint, and build when applicable.
- Avoid modifying unrelated files.
- Summarize changes and any remaining issues.
