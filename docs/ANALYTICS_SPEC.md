# DriftGuard analytics specification

## Purpose

Measure whether users can define guardrails, complete an evaluation, understand the result, and act on the smallest correction. This specification does not require adding a third-party analytics service before a pilot.

## Privacy boundary

Do not send raw work content, evidence text, guardrail text, email addresses, access tokens, or constraint snapshots to product analytics. Store only bounded event metadata and participant/session identifiers suitable for the pilot.

## Core events

| Event | When emitted | Essential properties |
| --- | --- | --- |
| `workflow_started` | User begins intent setup | mode, source, session_id |
| `intent_completed` | Four required intent fields are completed | duration_ms, fields_completed |
| `guardrails_proposed` | Proposal returns | proposed_count, mode |
| `guardrails_confirmed` | User accepts or edits guardrails | accepted_count, edited_count, removed_count |
| `evaluation_submitted` | Work and evidence are submitted | rule_count, rule_type_counts |
| `evaluation_generated` | Result is displayed | verdict, evaluation_mode, latency_ms, finding_counts |
| `evaluation_accepted` | User accepts the result | verdict |
| `evaluation_edited` | User changes a rule, evidence item, or interpretation | edit_type, verdict_before |
| `task_completed` | User records or exports the final decision | verdict, total_duration_ms |
| `error_encountered` | A user-visible failure occurs | stage, stable_error_code, recoverable |
| `feedback_submitted` | User rates or comments on the output | usefulness_rating, changed_action, correction_useful |

## Definitions

### Activation

A user confirms at least one guardrail set and receives one evaluation result.

### Core success

A user receives a result, can correctly explain why it occurred, and either accepts it or makes a deliberate evidence/rule correction.

### Failure

Any of:

- workflow abandoned before the first result;
- user cannot explain the verdict;
- result is rejected because of a false pass or false block;
- error prevents completion;
- correction is not actionable.

### Repeat use

The same participant completes a second distinct review workflow on a later occasion.

### Retention

Do not report retention until a real recurring use case and observation window are established.

## Pilot dashboard

Report:

- activation rate;
- median time to first result;
- task completion rate;
- verdict distribution;
- user correction rate;
- false-pass and false-block disagreements;
- correction usefulness;
- changed-action rate;
- error rate by workflow stage;
- repeat-use count.

## Evidence classification

Analytics collected from fixtures or internal testing must be labelled simulated or local. Only events from consented external participants may be reported as user evidence.
