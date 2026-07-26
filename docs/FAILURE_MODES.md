# Failure Modes

| Failure | Expected behavior | Detection | Recovery |
|---|---|---|---|
| Missing browser configuration | Frontend preflight fails clearly | `npm run check:env:frontend` | Set project URL and publishable key |
| Missing AI secret | Edge preflight/deployment check fails | `npm run check:env:backend` | Set Edge Function secrets |
| AI timeout or malformed output | Evaluation remains non-passing and returns bounded error | Edge logs and user-visible error | Retry after provider recovery; no audit row is fabricated |
| Missing evidence | Rule becomes `Watch`, never `Pass` | Contract test and evaluation output | Supply observable evidence |
| Violated blocking rule | Overall result is `Block` | Deterministic contract test | Correct the violation and re-evaluate |
| Quota exhausted | AI request is rejected before provider call | RPC result and Edge response | Wait for reset or change authorized quota policy |
| Browser attempts audit mutation | Database rejects write | RLS / grant failure | Use the server evaluation path |
| Deployment drift | Release checker or schema sync fails | `npm run validate` | Restore exact migration, slugs, and environment contract |
