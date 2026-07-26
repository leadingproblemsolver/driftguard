# Contributing

1. Use Node 22 and npm 10.
2. Run `npm ci` from a clean checkout.
3. Keep AI interpretation advisory; deterministic precedence remains authoritative.
4. Do not add browser-visible server secrets or browser-authored audit rows.
5. Run `npm run validate` before opening a pull request.
6. Update `RELEASE_GATES.md`, API documentation, and migrations when a public contract changes.
7. Include a regression test for every defect fix.

Pull requests must state the changed invariant, proof command, failure mode considered, and rollback path.
