# DriftGuard portfolio and interview copy

## One-line portfolio card

Built a hybrid deterministic/AI review system that keeps consequential work inside user-owned constraints and preserves an auditable decision record.

## Product Engineering resume bullet

Built and validated a React/Supabase constraint-review product where deterministic code enforces binary, threshold, and checklist rules while server-side AI interprets semantic evidence; added RLS, quotas, immutable evaluation snapshots, deployment gates, and a reproducible product-evaluation protocol.

## Technical Product resume bullet

Defined a narrow constraint-drift problem, translated it into user-owned guardrails and Pass/Watch/Block acceptance rules, documented non-goals and trust boundaries, and designed a paired benchmark measuring false passes, false blocks, violation detection, review time, and user corrections.

## 30-second interview explanation

“DriftGuard addresses a specific review failure: important work gradually drifts outside accepted requirements, while reviewers reconstruct the rules late and generic AI can sound confident without proof. I built a system where the user owns the guardrails, deterministic code owns enforcement, and AI is limited to semantic evidence interpretation. Missing evidence becomes Watch, blocking violations force Block, and every cloud result preserves the exact rule snapshot. The engineering release is validated; the repository is explicit that real-user outcome testing is still the next proof step.”

## Two-minute interview explanation

“DriftGuard began with the observation that many consequential failures are not total misunderstandings. They are incremental constraint drift: an output weakens one requirement, omits evidence, or satisfies the spirit but not the explicit acceptance criteria. Existing review often mixes objective checks and semantic interpretation, and generic LLM evaluation makes the final authority unclear.

I designed the product around a strict responsibility split. The user defines or accepts the policy. Binary, threshold, and checklist requirements are evaluated deterministically. AI can interpret semantic evidence, but it cannot weaken a blocking rule or turn missing proof into a pass. The final verdict is Pass only when every active finding is met, Watch when something is unclear, and Block when a blocking rule is violated.

Technically, the frontend uses Supabase authentication and owner-scoped records. Edge Functions verify the caller, keep model credentials server-side, enforce quotas and request limits, combine deterministic and semantic findings, and write the evaluation with the exact constraint snapshot. Local fallback remains available but is labelled rules-preview so it is not confused with a persisted AI judgment.

The release pipeline checks schema synchronization, structural gates, contract tests, Edge TypeScript and bundling, frontend type checking, linting, formatting, and the production build. I also added a bounded evaluation protocol comparing unaided and assisted review. I deliberately did not claim reduced review time or production failure prevention because those require real participants and deployment evidence.”

## Three defensible technical trade-offs

1. **Server-authored history over browser convenience:** preserves audit integrity but requires backend deployment and authentication.
2. **Conservative uncertainty over optimistic completion:** missing evidence becomes Watch, increasing review friction but reducing unsupported passes.
3. **Pinned, bounded model integration over model flexibility:** improves reproducibility and error control but requires explicit revalidation when the model changes.

## Three defensible product trade-offs

1. **User confirmation of guardrails over automatic setup:** adds a step but preserves policy ownership.
2. **One narrow review job over general workflow automation:** limits market breadth but makes the product claim and evaluation tractable.
3. **Explicit integration checkpoints over passive-monitoring claims:** requires external workflow calls but avoids pretending the product observes work it cannot see.

## Biggest failure or limitation

The product has strong implementation evidence but no represented external user sessions or measured product outcome. The current repository cannot support claims about time saved, prevented incidents, adoption, or expert-level accuracy.

## Next evidence-backed iteration

Execute the frozen paired-review benchmark with 3–5 target users, classify every disagreement, and change the product only in response to repeated severe failure patterns or clear workflow friction.

## Role fit

### Product Engineering

Shows end-to-end product implementation, authentication, database policy, server-side integrations, failure handling, validation, and deployment boundaries.

### Forward-Deployed or Solutions Engineering

Shows how to translate an ambiguous operational review problem into an explicit workflow, acceptance model, integration checkpoint, pilot, and measurable implementation.

### AI Product or Technical Product

Shows scoped model responsibility, user-owned policy, measurable success and failure definitions, non-goals, research status, experiment design, and evidence-bound communication.
