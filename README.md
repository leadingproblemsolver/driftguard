# DriftGuard — Agent Session Settlement Preflight

DriftGuard is a pre-execution control layer for long-running agent and CLI runtimes.

The first distribution wedge is deliberately narrow: catch **false-idle, lost continuation, stale callbacks, compaction/checkpoint corruption, unbounded waits, and session/provider identity drift** before a runtime reports a session settled.

## What a user gets immediately

The landing page opens into a working seven-gate settlement preflight. A maintainer can paste a real state transition or failure path and evaluate it without first designing a policy system.

The seven default gates are:

1. true settlement;
2. no pending continuation intent;
3. transcript tail committed;
4. stale generations cannot mutate current state;
5. checkpoint survives compaction;
6. provider waits are bounded;
7. session/provider identity stays stable.

A violated blocking gate deterministically forces **Block**. Missing proof cannot become **Pass**.

Underneath this wedge, the generic DriftGuard engine is still available: users can edit the template or define a different guardrail set.

## Local run

Requires Node 22 and npm 10+.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Without Supabase credentials the product remains usable as a local `rules-preview`. Cloud AI judgment, persistence, auth, and audit history require Supabase.

## Production configuration

Frontend `.env.local`:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_YOUR_ACTUAL_KEY
```

Server-only `supabase/functions/.env.local`:

```env
AI_BASE_URL=https://api.openai.com/v1
AI_API_KEY=sk-YOUR_ACTUAL_OPENAI_API_KEY
AI_MODEL=gpt-5.4-mini-2026-03-17
AI_RESPONSE_FORMAT=json_object
AI_REASONING_EFFORT=none
AI_TIMEOUT_MS=30000
AI_MAX_OUTPUT_TOKENS=4000
ALLOWED_ORIGINS=http://localhost:3000,https://YOUR_ACTUAL_PRODUCTION_DOMAIN
```

See `ENVIRONMENT.md` for the exact trust boundary.

## Deploy backend

```bash
npm run supabase:login
npm run supabase:link -- --project-ref YOUR_PROJECT_REF
npm run deploy:backend
```

This syncs `schema.sql`, pushes the database contract, uploads Edge Function secrets, and deploys `evaluate` plus `infer-guardrails`.

## Validate before distribution

```bash
npm run validate
npm audit --omit=dev
```

The release contract is in `RELEASE_GATES.md`.

## Deploy web

```bash
npm run deploy:web
```

The existing Nitro target deploys to Cloudflare through Wrangler. After deployment, add the production origin to Supabase Auth redirects and `ALLOWED_ORIGINS`, then re-upload Edge Function secrets.

## First distribution loop

Do not pitch “a generic guardrail platform.” Send maintainers to the preloaded settlement preflight from a concrete issue/reproduction involving one of the target failure modes. The useful artifact is the seven-gate model itself; DriftGuard is the enforcement mechanism behind it.
