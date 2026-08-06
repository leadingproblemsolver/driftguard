# DriftGuard Finalization Report

**Date:** 2026-08-06  
**Branch:** `agent/finalize-driftguard`

## Files created or materially updated

- `evaluation/cases.mjs`
- `evaluation/results.json`
- `scripts/externalization-evaluation.mjs`
- `package.json`
- `docs/EVALUATION_REPORT.md`
- `docs/CASE_STUDY.md`
- `docs/EXTERNALIZATION_SCORECARD.md`
- `docs/FINALIZATION_REPORT.md`

## Functional changes

- Added a reproducible 24-case benchmark for binary, threshold, checklist, evidence, mixed-rule, inactive-rule, missing-proof, privacy-marker, and unsupported-claim behavior.
- Added a deliberately transparent ungated baseline for measuring unsupported approval prevention.
- Added `npm run evaluate:externalization`.
- Added the benchmark to both `npm run validate` and `npm run check:offline`.
- Committed machine-readable benchmark fixtures and measured summary results.

## Validation and evaluation results

Completed against the saved release source:

- `node scripts/release-check.mjs`: **52 structural checks passed**.
- `npm test`: **5 judgment-contract tests passed**.
- `node --experimental-strip-types scripts/externalization-evaluation.mjs`:
  - **24/24** expected-verdict agreement;
  - **0** critical false passes;
  - **0** false blocks;
  - **17** unsupported passes prevented versus the declared ungated baseline.

## Blocked validation

A clean `npm ci` could not complete in this execution environment because its internal package mirror did not contain `youch-core@0.3.3`. Therefore the following are not claimed as rerun on this branch here:

- full `npm run validate`;
- dependency-backed typecheck, lint, formatting, and production build;
- live Supabase deployment and hosted smoke test;
- account-bound two-user isolation verification.

CI should run the full gate using the public npm registry.

## Final score

**12/15 defensible externalization score.**

## Unsupported criteria

1. Real-user evidence.
2. Captured polished demo media.
3. Adoption, launch, or iteration evidence.

## Claims that must not yet be made

- production-proven or enterprise-ready;
- real errors prevented, time saved, cost saved, or ROI;
- independently validated semantic accuracy;
- user adoption, repeat use, or willingness to pay;
- hosted tenant isolation without a preserved live two-user test.

## Exact next three actions

1. Let CI run `npm ci` and `npm run validate` on this branch using the public npm registry.
2. Record the prepared 60–90 second demo and commit the capture artifacts or stable video link.
3. Complete three observed operator sessions and update the research status with evidence-bound findings.
