# DriftGuard product brief

## Target user

A technical lead, product owner, consultant, or operator responsible for consequential work whose output must remain inside explicit requirements, policies, or acceptance criteria.

## Painful workflow

Important constraints are usually scattered across briefs, tickets, review comments, policies, and memory. Reviewers reconstruct them late, apply them inconsistently, and often discover drift only after work has already been produced.

## Trigger

The user is about to perform an important action, approve an output, or review whether work still matches its declared intent.

## Current workaround

- Re-read specifications manually.
- Depend on reviewer memory.
- Use generic checklists that do not preserve evidence or rule precedence.
- Ask an LLM for a judgment without a deterministic enforcement boundary.

## Product intervention

DriftGuard lets the user define purpose, workflow, target, observable proof, and accepted guardrails. It evaluates structured evidence deterministically, uses AI only for semantic interpretation, and returns `Pass`, `Watch`, or `Block` with the smallest required correction.

## Primary outcome

Make constraint drift visible before consequential work is accepted or continued, while preserving who defined the rule, what evidence was supplied, how the verdict was produced, and what remains unresolved.

## Non-goals

- Autonomous policy creation or silent policy modification.
- Passive monitoring without an external integration.
- Replacing expert or accountable human judgment.
- Claiming compliance where evidence is missing.
- General project management, task execution, or workflow orchestration.

## Current status

The core workflow, deterministic judgment contract, authenticated architecture, local preview mode, deployment scripts, release gates, and validation pipeline are implemented. Production deployment and real-user outcome evidence remain account- and participant-dependent.

## Proof status

### Implemented and locally verified

- Deterministic precedence for binary, threshold, and checklist rules.
- Conservative treatment of missing or invalid evidence.
- Semantic interpretation isolated to the AI boundary.
- Server-authored evaluation records with constraint snapshots.
- RLS, quotas, origin controls, request limits, and server-only secrets.
- Canonical build and validation commands.

### Not yet proven

- Reduction in review time with real operators.
- Improvement in constraint-violation detection versus existing review practice.
- User trust, correction rate, repeat use, or adoption.
- Production reliability under live multi-user use.
