# Security lock receipt — 2026-08-27

- Patched transitive dependency: `js-yaml@4.3.1`.
- Reason: resolves GHSA-5p4m-2wfm-xmqj / CVE-2026-59870 affecting `js-yaml >=4.0.0 <4.3.1`.
- Enforcement: root `package.json` override plus refreshed immutable `package-lock.json`.
- Verification gate: `npm ci` followed by full repository validation and `npm audit --omit=dev`.

No vulnerability suppression or audit bypass is used.
