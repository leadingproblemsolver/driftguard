# DriftGuard Evaluation Report

**Evaluation date:** 2026-08-06  
**Evidence type:** locally measured deterministic benchmark  
**Scope:** `src/lib/drift-engine.ts`

## Evaluation question

Does the local rules engine preserve the declared `Pass / Watch / Block` precedence across objective-rule and conservative semantic-preview scenarios, and does it prevent unsupported approval compared with a deliberately ungated review baseline?

## Method

The benchmark contains 24 authored fixtures covering binary, threshold, checklist, evidence, mixed-rule, inactive-rule, missing-proof, privacy-marker, and unsupported-claim cases. Each fixture has an expected verdict. The runner executes `evaluateLocally` and compares the result with that label.

The baseline is intentionally weak and transparent: an **ungated review** treats submitted work as acceptable because no explicit constraint precedence exists. It is not an LLM or expert-review comparison.

```bash
npm run evaluate:externalization
```

Machine-readable inputs and results:

- `evaluation/cases.mjs`
- `evaluation/results.json`

## Results

| Metric | Result |
|---|---:|
| Scenarios | 24 |
| DriftGuard verdict agreement | 24/24 |
| Ungated-baseline agreement | 7/24 |
| Critical false passes | 0 |
| False blocks | 0 |
| Unsupported passes prevented vs baseline | 17 |

## Supported claim

The checked local rules engine reproduced the expected verdict in all 24 authored scenarios, including blocking-rule precedence and conservative treatment of missing semantic proof.

## Failure categories tested

- missing binary, metric, or checklist evidence;
- objective threshold violation;
- partial checklist completion;
- blocking versus warning enforcement;
- unsupported quantitative claims;
- restricted-data markers;
- semantic uncertainty;
- inactive-rule exclusion;
- mixed rules where one blocking violation must dominate.

## Limitations

- Fixtures are authored scenarios, not observed user tasks.
- Expected labels were not independently adjudicated.
- The baseline is an ungated proxy, not an LLM or expert reviewer.
- Hosted Edge Functions and provider output quality are outside this benchmark.
- The result does not establish adoption, ROI, latency, scale, production reliability, or improved real-world outcomes.

## Next justified evaluation

Run the same cases through the authenticated server path, add an independently reviewed semantic corpus, and complete three observed operator sessions using recent non-sensitive work.
