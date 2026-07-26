# ADR-0001 — Deterministic precedence remains authoritative

**Status:** Accepted

AI is useful for interpreting semantic evidence, but it is not permitted to decide whether a violated blocking rule can be ignored. The server applies deterministic precedence after interpretation: a violated blocking rule forces `Block`, and missing proof prevents `Pass`.

Alternatives rejected:

- model-only verdicts, because they are non-repeatable and vulnerable to prompt drift;
- browser-side precedence, because users could bypass or mutate it.

Revisit only if a formally verified alternative preserves equal or stronger auditability.
