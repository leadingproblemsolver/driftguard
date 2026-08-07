# Deploy DriftGuard

DriftGuard is already structured as a production-capable light application:

- React/TanStack SPA/SSR frontend deployed as a Cloudflare Worker
- Supabase magic-link authentication
- Postgres with row-level security
- Supabase Edge Functions for guarded AI inference and hybrid evaluation
- Deterministic Pass / Watch / Block precedence
- Per-user AI quotas and server-authored audit history

## 1. Requirements

- Node.js 22
- npm 10+
- Supabase project
- OpenAI API key
- Cloudflare account
- production SMTP provider for public magic-link authentication

## 2. Frontend configuration

```bash
cp .env.example .env.local
```

Set:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

## 3. Backend configuration

```bash
cp supabase/functions/.env.example supabase/functions/.env.local
```

Set the OpenAI key, model, exact allowed origins, and other values described in `ENVIRONMENT.md`.

## 4. Deploy backend

```bash
npm ci
npm run supabase:login
npm run supabase:link -- --project-ref YOUR_PROJECT_REF
npm run deploy:backend
```

## 5. Validate

```bash
npm run validate
npm audit --omit=dev
```

Do not deploy if either command fails.

## 6. Deploy frontend

```bash
npm run deploy:web
```

Then add the production origin to:

- `ALLOWED_ORIGINS` in the Edge Function secrets
- Supabase Authentication Site URL
- Supabase Authentication Redirect URLs

Re-upload secrets after changing the production origin.

## 7. Smoke test

Follow the nine-step production smoke test in `README.md`.

## Release decision

The application requires credentials and deployment accounts, not a structural rewrite. The only archive defect found during this handoff was the missing `.vscode/settings.json`, which has been restored.
