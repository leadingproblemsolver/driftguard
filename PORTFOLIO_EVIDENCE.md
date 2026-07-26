# Portfolio Evidence — DriftGuard

## Functional claim

A web system for detecting and governing drift through deterministic judgment precedence and server-authored audit records.

## Engineering domain

Full-stack backend / governance / Supabase edge architecture

## Highest-signal surfaces

- authority boundaries
- deterministic judgment contract
- edge-function architecture
- release gates

## Reproduction commands

```bash
node scripts/release-check.mjs
npm test
npm run validate
```

## Validation completed in this upgrade

52 structural release checks and 5 judgment-contract tests passed offline.

## Human competence evidence still required

- Complete one implementation/reconstruction sprint on a Tier-1 subsystem.
- Complete one evidence-led debugging sprint.
- Explain the end-to-end runtime flow without notes.
- Complete one bounded live modification and rerun verification.
- Record a deployment or production-like smoke test.

## Unverified or externally blocked

- Full dependency installation, TypeScript build, and live Supabase smoke test require network and credentials.
- Container execution was unavailable.

## Claim discipline

Repository state and passing offline checks may be claimed. Live scale, adoption, resilience, latency, and production reliability may not be claimed until measured. See `AI_HUMAN_PROVENANCE.md`.
