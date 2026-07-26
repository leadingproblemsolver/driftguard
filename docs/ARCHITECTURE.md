# Architecture

```mermaid
flowchart LR
    U[Authenticated user] --> W[React / TanStack web application]
    W -->|publishable key + user JWT| S[Supabase]
    W -->|infer request| I[infer-guardrails Edge Function]
    W -->|evidence + rule snapshot| E[evaluate Edge Function]
    I --> A[AI provider]
    E --> A
    I --> Q[consume_ai_request RPC]
    E --> Q
    I --> DB[(Postgres + RLS)]
    E --> DB
    DB --> W

    subgraph Deterministic authority
      P[Rule precedence]
      B[Blocking violation forces Block]
      M[Missing proof prevents Pass]
    end
    E --> P --> B
    P --> M
```

## Authority split

| Concern | Authority |
|---|---|
| User identity | Supabase Auth |
| Row access | Postgres RLS |
| Quota consumption | Server-side database function |
| Semantic interpretation | AI provider through Edge Functions |
| Final precedence | Deterministic evaluation code |
| Audit history | Server-authored immutable evaluation rows |

The AI may interpret evidence, but it cannot override a violated blocking rule or convert absent evidence into `Pass`.
