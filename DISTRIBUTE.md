# Distribution: first wedge

## ICP

Maintainers of long-running agent/CLI frameworks where session state can become incorrect across asynchronous callbacks, retries, compaction, provider waits, or resume boundaries.

## Trigger signals

Lead with a real issue or reproduction involving one of these:

- session reports idle/complete while continuation work remains;
- queued or stale callbacks mutate a newer generation;
- continuation intent disappears across a turn or retry;
- compaction/summarization loses the resume checkpoint;
- provider/tool waits leave the session half-settled;
- resumed work attaches to the wrong session/provider identity.

## Distribution motion

1. Reproduce or summarize the concrete failure.
2. Share the seven-gate settlement model as the useful artifact.
3. Link directly to the DriftGuard landing page; the primary CTA opens the preloaded preflight.
4. Ask the maintainer to run the failure path against the gates and mark which invariant is missing.
5. Capture the exact gate they reject, edit, or add. That is product signal; do not broaden the pitch.

## One-line positioning

**DriftGuard is a settlement preflight for long-running agent runtimes: before a session reports idle, complete, or safe-to-resume, it checks seven continuation/state invariants and blocks false settlement.**

## What not to pitch

Do not lead with “AI governance,” “generic guardrails,” project management, compliance, or passive monitoring. The first sale is prevention of a specific session-state failure, not adoption of a platform.
