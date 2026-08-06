# DriftGuard evaluation report

## Evaluation status

**Protocol complete; external benchmark not yet executed.**

This document defines a reproducible evaluation without converting planned metrics into achieved results. Existing executable tests validate the judgment contract and release structure. The benchmark below is intended to test the product's user-facing claim.

## Evaluation question

Compared with unaided review, does DriftGuard help reviewers identify explicit constraint violations and missing evidence without increasing unsupported passes or excessive false blocks?

## Baseline

A reviewer receives the same project brief, guardrails, candidate output, and evidence bundle in a plain document. They record:

- verdict: pass, revise, or block;
- violated or unclear constraints;
- smallest required correction;
- time to decision.

The assisted condition supplies the same material through DriftGuard and asks the reviewer to accept, edit, or reject the system verdict.

## Dataset

Use 24–40 clearly labelled synthetic scenarios derived from common product and engineering review patterns. No scenario should contain private or production data.

Recommended categories:

1. Explicit blocking violation.
2. Missing evidence.
3. Threshold failure.
4. Incomplete checklist.
5. Semantic requirement met.
6. Semantic requirement violated.
7. Conflicting evidence.
8. Irrelevant but persuasive content.

Each scenario must include:

- accepted guardrail set;
- candidate work or action;
- submitted evidence;
- expected deterministic findings;
- expected final verdict where objectively decidable;
- ambiguity note where expert judgment is required.

## Sample size

- Automated contract benchmark: all scenarios.
- Initial usability benchmark: 3–5 participants, each completing 6–10 paired tasks.
- Later validation: expand only after the initial failure taxonomy is stable.

Synthetic scenarios do not count as real-user evidence. Participant results do not prove production impact.

## Procedure

1. Freeze the scenario set and answer key before participant testing.
2. Randomize baseline-first versus assisted-first ordering.
3. Capture start time, decision time, verdict, identified findings, correction, and confidence.
4. In the assisted condition, capture whether the user accepted, edited, or rejected the output.
5. Ask the participant to explain any disagreement.
6. Classify each disagreement before changing the product or answer key.

## Metrics

### Primary

- Blocking-violation recall.
- Unsupported-pass rate.
- False-block rate.
- Missing-evidence detection rate.
- Median review time.

### Secondary

- Agreement with the frozen answer key.
- User correction rate.
- Smallest-correction usefulness rating.
- Confidence calibration.
- Semantic-finding disagreement rate.

## Result table

Populate only after executing the benchmark.

| Metric | Baseline | DriftGuard | Difference | Evidence type |
| --- | ---: | ---: | ---: | --- |
| Blocking-violation recall | Not run | Not run | Not available | Planned |
| Unsupported-pass rate | Not run | Not run | Not available | Planned |
| False-block rate | Not run | Not run | Not available | Planned |
| Missing-evidence detection | Not run | Not run | Not available | Planned |
| Median review time | Not run | Not run | Not available | Planned |
| User correction rate | N/A | Not run | Not available | Planned |

## Existing executable evidence

The release tree already verifies:

- a violated blocking rule forces `Block`;
- missing or invalid evidence cannot produce `Pass`;
- deterministic rule types do not depend on model judgment;
- only complete `met` findings may produce `Pass`;
- Edge Function naming, deployment contracts, TypeScript checks, linting, formatting, and production build remain consistent.

See `RELEASE_REPORT.md`, `RELEASE_GATES.md`, and the judgment-contract test command referenced in `package.json`.

## Failure categories

Use these categories during analysis:

- false pass;
- false block;
- unresolved evidence misclassified as met;
- rule precedence error;
- semantic interpretation error;
- user-provided guardrail ambiguity;
- answer-key defect;
- unusable correction;
- latency or workflow failure.

## Representative failures

None are reported yet because the external benchmark has not been executed. Do not fabricate examples as observed failures. During testing, preserve sanitized input, expected result, actual result, and reviewer explanation for every disagreement.

## Limitations

- Synthetic scenarios cannot establish real operational value.
- A frozen answer key may still contain reviewer assumptions.
- Review time can improve through interface familiarity rather than better judgment.
- Model-dependent semantic findings may change if the pinned model changes.
- Participants drawn from one domain may not generalize to another.

## Conclusion

The repository has strong implementation and contract evidence but does not yet have defensible user-outcome evidence. The correct next claim is that DriftGuard has a reproducible evaluation protocol—not that the protocol has already demonstrated improvement.

## Reproduction commands

Current implementation validation:

```bash
npm ci
npm run validate
npm audit --omit=dev
```

After benchmark fixtures and an execution script are added, document the exact command here and commit the raw, anonymized result file alongside the interpreted report.
