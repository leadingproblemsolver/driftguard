# DriftGuard bounded pilot plan

## Initial user segment

Technical leads, product owners, consultants, or operators who regularly approve work against explicit requirements, acceptance criteria, or non-negotiable constraints.

## Recruitment method

Recruit 3–5 participants through direct professional outreach. Screen for recent review responsibility rather than general interest in AI or governance.

## Onboarding

1. Explain that DriftGuard is a prototype review aid, not a compliance authority.
2. Obtain consent for notes and optional recording.
3. Demonstrate one neutral example.
4. Ask the participant to complete paired baseline and assisted tasks.
5. End with one realistic workflow from the participant only when it can be sanitized safely.

## Tasks

- Review a candidate output without DriftGuard.
- Record verdict, violated or unclear constraints, correction, and time.
- Review a matched scenario with DriftGuard.
- Accept, edit, or reject the result.
- Explain the verdict and identify any false pass, false block, or unclear evidence.
- Complete one new scenario without facilitator guidance.

## Evidence to collect

- Task completion and time.
- Blocking-violation recall.
- Missing-evidence detection.
- Unsupported-pass and false-block disagreements.
- User correction rate.
- Smallest-correction usefulness.
- Whether the result changed the intended action.
- Observed confusion and workflow friction.
- Sanitized quotation only with consent.

## Success threshold

Proceed to a larger pilot only when:

- no severe unsupported pass occurs in the frozen scenario set;
- at least 80% of participants can explain the final verdict without facilitator correction;
- the smallest correction is rated actionable in at least 70% of completed assisted tasks;
- the workflow does not materially increase median review time without a compensating detection benefit;
- participants identify a realistic checkpoint where the tool could be used.

These are pilot decision thresholds, not achieved results.

## Failure threshold

Stop or redesign when:

- any repeated severe unsupported-pass pattern appears;
- participants cannot distinguish AI interpretation from deterministic enforcement;
- false blocks make the workflow operationally unusable;
- evidence entry costs more time than the review problem warrants;
- users cannot name a real recurring use case after completing the tasks.

## Stopping conditions

Stop immediately for privacy concerns, misunderstood consent, unsafe domain use, or evidence that participants are treating the output as an authority it is not.

## Maximum pilot scope

- 5 participants.
- 40 paired tasks in total.
- No private production data.
- No autonomous integration or passive monitoring.
- No claims beyond the observed sample.

## Pilot outputs

After execution, add anonymized session summaries, raw metric aggregates, failure taxonomy, product decisions, and an updated scorecard. Do not publish testimonials or quotations without recorded consent.
