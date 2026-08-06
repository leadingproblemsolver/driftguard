# DriftGuard Externalization Scorecard

Scoring rule: `1` requires visible, defensible repository evidence. `0` means the criterion is not yet supported. No partial credit is awarded.

| # | Criterion | Initial | Final | Evidence | Evidence type | Remaining gap |
|---:|---|---:|---:|---|---|---|
| 1 | Specific user and painful problem | 1 | 1 | `docs/PRODUCT_BRIEF.md`, `docs/CASE_STUDY.md` | documented | Validate urgency with target users |
| 2 | Clear value proposition | 1 | 1 | `README.md`, `docs/PRODUCT_BRIEF.md` | implemented/documented | Test comprehension externally |
| 3 | Functional core workflow | 1 | 1 | application source, `README.md`, `RELEASE_REPORT.md` | implemented | Live credentialed smoke test |
| 4 | Realistic example or sample data | 1 | 1 | local preview, `evaluation/cases.mjs` | synthetic/local | Add anonymized real-task fixtures |
| 5 | Runnable setup | 1 | 1 | `README.md`, lockfile, environment examples | documented/local | Confirm clean install in CI |
| 6 | Deployment or distribution path | 1 | 1 | Supabase and Cloudflare scripts/docs | implemented/documented | Complete account-bound deployment |
| 7 | Architecture documentation | 1 | 1 | `docs/CASE_STUDY.md`, `docs/API.md` | documented | None material for portfolio readiness |
| 8 | Tests or automated validation | 1 | 1 | release checks, judgment tests, benchmark runner | locally measured | CI run on final branch |
| 9 | Security/privacy/correctness boundaries | 1 | 1 | RLS, server-secret split, release gates | implemented/documented | Hosted two-user isolation proof |
| 10 | Product requirements or decision rationale | 1 | 1 | `PRODUCT_DIRECTION.md`, product docs | documented | Independent stakeholder review |
| 11 | Evaluation methodology | 0 | 1 | `docs/EVALUATION_REPORT.md`, `evaluation/cases.mjs` | locally executable | Independently reviewed semantic corpus |
| 12 | Quantitative results | 1 | 1 | 24/24 agreement; 0 critical false passes; 0 false blocks | locally measured synthetic | Real-task and server-path results |
| 13 | Real-user evidence | 0 | 0 | `research/RESEARCH_STATUS.md` | absent | Complete observed sessions |
| 14 | Demo or polished visual walkthrough | 0 | 0 | `docs/DEMO_SCRIPT.md`, `docs/DEMO_CAPTURE_PLAN.md` | prepared, not captured | Record and attach media |
| 15 | Adoption, launch, or iteration evidence | 0 | 0 | `docs/PILOT_PLAN.md`, `docs/ANALYTICS_SPEC.md` | planned | Run bounded pilot |

## Initial score

**11/15**

## Final defensible score

**12/15**

The repository is technically stronger than this score suggests. The missing points are intentionally reserved for externally observed behavior and captured demonstration evidence.

## Truthful current claim

> DriftGuard implements a hybrid deterministic/AI constraint-review workflow and reproduces the expected local verdict in 24/24 authored benchmark scenarios.

## Unsupported claims

- proven reduction in review time;
- proven prevention of real production failures;
- independently validated expert-level semantic judgment;
- production adoption or repeat use;
- regulatory or legal compliance assurance;
- production reliability or enterprise readiness.
