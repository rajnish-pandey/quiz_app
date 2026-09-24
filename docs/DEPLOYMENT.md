# Development and deployment

Status: planned workflow. No runnable scaffold or deployment exists yet.

## Intended local workflow

The scaffold will define:

```sh
npm ci
npm run dev
npm run typecheck
npm run test
npm run test:e2e
npm run build
npm run preview
```

These commands are unavailable until `package.json` and scripts exist. Document required test-browser installation then. If Windows PowerShell blocks `npm.ps1`, use `npm.cmd` rather than weakening execution policy.

## GitHub Pages configuration

Repository: `rajnish-pandey/quiz_app`.

Expected URL, **not verified live**: `https://rajnish-pandey.github.io/quiz_app/`.

- Configure Vite base `/quiz_app/`.
- Derive asset paths from the base, not root-relative `/assets/...`.
- Use hash navigation to avoid server rewrite requirements.
- Keep manifest `start_url`, scope, icons, and service worker under the repository path.
- Select GitHub Actions as the Pages source.
- Use a supported Node version and `npm ci` with the committed lockfile.
- Run type checking, content validation, and tests before uploading `dist`.
- Use official Pages actions and minimum permissions: contents read, pages write, id-token write.
- Publish only from the intended release branch; pull requests validate without deployment.

Select current compatible action versions when implementing. Consult [Vite deployment](https://vite.dev/guide/static-deploy) and [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

Check repository visibility, plan support, authentication, and settings at release. A workflow file alone does not enable hosting or prove deployment.

## Release verification

1. Clean production build and passing required checks.
2. Serve under the project subpath; verify assets, navigation, manifest.
3. Complete Hindi and English sessions in separate profiles.
4. Reload a timed session and verify its original deadline.
5. Verify backups and offline reload after successful caching.
6. Deploy and inspect the successful Pages run.
7. Open the live URL and repeat a short quiz/asset smoke test.
8. Record the verified URL and limitations in README.

## Updates and recovery

Commit content/application changes together when schemas depend on one another. Preserve learner data through database migrations; do not clear storage during routine deployments.

Fix failed releases or redeploy a working source revision. Account for database migrations already applied to learner devices: older code may not understand newer stored data.

Offer service-worker updates at a safe point. Clearing browser data also deletes progress, so it is not the first troubleshooting step. Export before any intentional data reset.

## Security and privacy

Static frontends cannot hide server secrets or private question banks. Do not commit learner backups. There is no authentication or automatic cloud backup. Future cloud services require a documented design extension.
