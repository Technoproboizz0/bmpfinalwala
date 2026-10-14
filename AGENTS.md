# Architecture
- Keep imported BytesMusic domain pages, auth, player, search, and admin behavior under `src/features/bytes`; this preserves the uploaded application's workflows while allowing its presentation to change.
- Use TanStack Start file routes in `src/routes` and a small compatibility adapter for legacy page links; this keeps navigation integrated with the template router without introducing a second router.
- Read the database URL and public key only from `.env` (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY); the owner edits them there.
- Keep visual tokens and shared UI treatments in `src/styles.css`; this keeps the monochrome design consistent across imported screens.
