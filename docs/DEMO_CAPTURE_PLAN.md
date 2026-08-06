# DriftGuard demo capture plan

## Capture 1 — hero workflow

- **Route:** application landing/workspace route after local startup.
- **Command:** `npm ci && npm run dev`.
- **State:** four intent fields populated with a realistic product-review example.
- **Capture:** the input fields, accepted guardrails, and the primary evaluation action in one frame.
- **Filename:** `docs/images/hero.png`.
- **Caption:** “Define the purpose, workflow, target, proof, and user-owned guardrails before evaluating consequential work.”

## Capture 2 — blocking verdict

- Add a blocking binary rule: “Required acceptance test passed.”
- Submit `No` with a short evidence note.
- Capture the `Block` verdict, violated rule, and smallest correction.
- **Filename:** `docs/images/block-result.png`.
- **Caption:** “A violated blocking rule deterministically forces Block.”

## Capture 3 — missing evidence

- Remove the supplied value or evidence for an active rule.
- Capture the `Watch` result.
- **Filename:** `docs/images/watch-result.png`.
- **Caption:** “Missing evidence is unresolved; it never becomes Pass.”

## Capture 4 — audit history

- Use an authenticated credentialed environment.
- Complete one cloud evaluation and open its history record.
- Capture verdict, evaluation mode, model identity, and constraint snapshot without displaying personal data or credentials.
- **Filename:** `docs/images/audit-history.png`.
- **Caption:** “Cloud evaluations preserve the exact accepted constraints used for the decision.”

## Video path

Follow `docs/DEMO_SCRIPT.md`. Record at 1080p, keep the browser zoom readable, and finish within 60–90 seconds.

## Sensitive information to exclude

- Supabase project references where not intentionally public.
- Email addresses and magic-link messages.
- Tokens, API keys, request headers, or browser storage values.
- Private user content or production records.
- Provider error bodies or database administration screens.

## Completion rule

Do not mark the demo criterion complete until the real image or video exists in the repository or is linked from the README. This plan alone is preparation, not demonstration evidence.
