# DriftGuard release report

**Release date:** 2026-07-06  
**Target:** Supabase Auth/Postgres/Edge Functions + Cloudflare Worker frontend

## Release decision

**Code status: deploy-ready after project-specific credentials and origins are supplied.**

The repository cannot be truthfully described as already deployed because no Supabase project, OpenAI key, Cloudflare account, production domain, or SMTP provider was supplied. No code changes are expected after those values are entered; the scripted preflights reject incomplete configuration.

## Structural non-negotiables enforced

- One narrow job: keep consequential work inside user-accepted constraints.
- Four-field default setup and a three-step workflow.
- AI proposes guardrails; the user accepts or edits them.
- Objective evidence is deterministic; AI interprets semantic evidence only.
- A violated blocking rule always returns `Block`.
- Missing or invalid evidence can never return `Pass`.
- Every cloud evaluation is computed and written by the Edge Function with the exact guardrail snapshot.
- Browser roles cannot insert, update, or delete evaluation history.
- All application tables use RLS and owner-scoped policies.
- AI keys remain server-only; frontend environment variables are public Supabase values only.
- Current and legacy Supabase key formats are supported.
- Literal Edge Function names are identical across folders, browser invokes, auth config, and deployment commands.
- VS Code Deno support is scoped to `supabase/functions`, with root/shared and per-function import maps.
- AI calls have request-size limits, timeouts, output caps, per-user quotas, sanitized errors, and exact-origin CORS.
- “Before action,” “after output,” and “daily” are integration checkpoints, not fake passive monitoring.
- Root `schema.sql` is canonical and the deployable migration is generated from it.
- npm is the only package manager; Wrangler is pinned locally and Supabase CLI commands pin `supabase@2.109.0`.

## Verified in this release tree

| Gate                                                             | Result                                                           |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Structural release checks                                        | 56 passed                                                        |
| Judgment-contract tests                                          | 5 passed                                                         |
| Deno lint/check, Edge TypeScript, slug parity, and bundle        | Passed                                                           |
| Frontend TypeScript                                              | Passed                                                           |
| ESLint                                                           | Passed                                                           |
| Prettier                                                         | Passed                                                           |
| Cloudflare/Nitro production build                                | Passed                                                           |
| Frontend environment preflight with non-placeholder values       | Passed                                                           |
| Backend environment preflight with non-placeholder values        | Passed                                                           |
| npm vulnerability audit, production and development dependencies | 0 known vulnerabilities                                          |
| Local Cloudflare Worker request                                  | HTTP 200 with expected title and metadata                        |
| Fresh `npm ci` from a clean source tree                          | Passed; 394 packages installed in 13 seconds in this environment |
| Unused generated dependency removal                              | 133 packages removed; no unused UI component library remains     |

## External checks that require the deployer's accounts

- Apply `schema.sql` to the selected Supabase project.
- Confirm RLS isolation with two real test users.
- Complete a live OpenAI inference and semantic evaluation.
- Complete a real magic-link flow with production SMTP.
- Deploy the Worker and confirm the final production origin.
- Run the nine-step production smoke test in `README.md`.

These are credential-bound deployment checks, not unresolved implementation work.

## Non-blocking upstream notices

The build emits framework-maintainer notices from the connected Lovable/TanStack toolchain: Vite notes that `vite-tsconfig-paths` can eventually be replaced by native path resolution, Nitro ignores an internal `inlineDynamicImports` option because code splitting is active, and npm marks transitive `tsconfck@3.1.6` as unmaintained. The connected Lovable wrapper currently owns those dependencies. They do not fail installation, tests, build, Worker startup, or the zero-vulnerability audit; replacing the wrapper would trade away the existing Lovable integration and is not required for deployment.
