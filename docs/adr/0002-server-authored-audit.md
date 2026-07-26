# ADR-0002 — Evaluation audit rows are server-authored

**Status:** Accepted

The browser may request an evaluation but cannot insert, update, or delete its authoritative audit record. Edge Functions persist the exact rule snapshot and result under RLS-protected ownership.

This adds backend complexity but prevents a client from manufacturing favorable history. Revisit only if another trusted execution boundary replaces the Edge Functions.
