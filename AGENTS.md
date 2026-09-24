# Project Rules

- After making local changes, do not push to GitHub immediately.
- First build or serve the site locally and open the local web preview for review.
- Push to GitHub only after the user explicitly confirms the local preview.

## Commit And Deploy Flow

1. Make the requested source/content changes locally.
2. Run `export NODE_OPTIONS=--openssl-legacy-provider` before React build/deploy commands.
3. Build or preview locally:
   - Use `npm run build` to build the static site.
   - Use `npm start` if an interactive development preview is needed at `http://localhost:3000`.
   - For production-build review, serve `build/` locally and open the local web preview.
4. Wait for the user's explicit confirmation that the local preview is correct.
5. After confirmation, commit the local changes:
   - `git add -A`
   - `git commit -m "<concise message>"`
6. Deploy with the README shortcut:
   - `npm run deploy`
   - This runs `predeploy` (`npm run build`) and then `gh-pages -d build`.
7. Push the source branch after deploy so GitHub source matches the deployed page:
   - `git push origin main`
