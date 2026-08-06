# DriftGuard 75-second demo script

## 0–10 seconds — painful problem

“Important work rarely fails because nobody knew the goal. It drifts because constraints are scattered, evidence is incomplete, and reviewers reconstruct the rules too late.”

## 10–20 seconds — existing failure

“Generic AI review can sound confident even when proof is missing. A checklist can enforce explicit rules, but it cannot interpret semantic evidence. DriftGuard keeps those responsibilities separate.”

## 20–55 seconds — product workflow

1. Show the four-field setup: purpose, workflow, target, and observable proof.
2. Generate proposed guardrails and explicitly accept or edit them.
3. Show one blocking binary rule, one threshold rule, and one semantic rule.
4. Submit evidence with the blocking rule violated. Show `Block` and the smallest required correction.
5. Remove evidence from one rule. Show `Watch`, not `Pass`.
6. Supply complete evidence. Show that `Pass` is possible only when every active finding is met.
7. Open evaluation history and point to the stored constraint snapshot and evaluation mode.

Suggested narration:

“AI may propose and interpret, but the user owns the guardrails and deterministic code owns enforcement. A violated blocking rule forces Block. Missing evidence becomes Watch. Every cloud result preserves the exact rules used for that decision.”

## 55–68 seconds — measured evidence

“The release tree passes the documented structural gates, judgment-contract tests, Edge checks, type checking, linting, formatting, and production build. Product-outcome testing is defined separately and has not yet been represented as completed.”

## 68–75 seconds — limitation

“DriftGuard is not a compliance authority or passive monitor. The next proof step is a paired review benchmark with real operators.”
