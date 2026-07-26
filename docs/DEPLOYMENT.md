# Deployment Runbook

## Dependency order

1. Create or select the Supabase project.
2. Configure frontend public values locally.
3. Configure Edge Function secrets.
4. Run the complete local release gate.
5. Link the Supabase project.
6. Apply the database migration.
7. Deploy both Edge Functions.
8. Build and deploy the web application.
9. Run the live smoke check.

## Commands

```bash
npm ci
npm run validate
npm run supabase:login
npm run supabase:link
npm run deploy:backend
npm run deploy:web
DRIFTGUARD_BASE_URL=https://your-domain.example npm run smoke:live
```

## Rollback

- Web: redeploy the previously verified artifact or Cloudflare deployment.
- Edge Functions: redeploy the prior commit using the same literal slugs.
- Database: prefer forward-compatible migrations. Do not reverse a destructive migration without a tested restore path.

A deployment is not successful until the expected version loads, authentication works, one deterministic rule evaluates correctly, and an evaluation audit row is readable by its owner.
