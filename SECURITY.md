# Security Policy

## Supported release

Security fixes are applied to the current `main` branch and the latest tagged release.

## Reporting

Do not open a public issue for a suspected vulnerability. Send a private report containing:

- affected commit or release;
- reproduction steps;
- expected and observed impact;
- whether credentials or personal data were exposed;
- a minimal proof of concept with secrets removed.

## Security boundaries

- Browser code receives only the Supabase project URL and publishable key.
- AI provider credentials and Supabase secret keys remain in Edge Function secrets.
- Edge Functions authenticate the caller and consume quota server-side.
- Evaluation audit rows are server-authored and user-immutable.
- Row-level security remains the final data-authorization boundary.

Never commit populated `.env` files, access tokens, service-role keys, or captured user evidence.
