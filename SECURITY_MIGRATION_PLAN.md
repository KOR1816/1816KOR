# KOR1816 Firebase security migration plan

This is a preparation branch only. **Do not merge it into the live GitHub Pages site yet.** Production code and Firestore data remain unchanged.

## Verified production architecture

- `index.html` uses anonymous Firebase Authentication and shared Firestore documents under `siteData`: teams, alliance, home, seating, Viking, castle and castle-war data.
- `notices.html` uses anonymous authentication and writes `siteData/notices`.
- The old client-side admin password `0001` was embedded in public JavaScript and was not a real security boundary.
- Viking sign-up currently updates the whole shared document `siteData/viking_v1`. Public users must not retain write access to that shared document after rules are tightened.
- The current Firestore rule in Firebase Console was extended to expire on 2027-10-18. This is temporary continuity only; it leaves data publicly writable.

## Work completed on this branch

1. Google provider has been enabled in Firebase Authentication; Anonymous remains enabled.
2. `index.html`: replaced the old password prompts for team, seating, home, alliance, castle, and castle-war admin edit modes with Google sign-in. Initial allowed admin email: `to1ggi8410@gmail.com`.
3. `notices.html`: replaced the old password prompt with the same Google sign-in check.
4. Added `firestore.rules.draft` as a **draft only**. It allows public reads, admin writes to `siteData`, and expects public Viking signups to use separate `vikingRegistrations/{registrationId}` documents owned by the authenticated user.

## Important limitations — not ready to publish

- The Google sign-in UI is not enough by itself. The current live Firestore rules are still open, so a user could bypass the interface and write directly to Firestore until restrictive rules are actually published.
- The current Viking code still writes to `siteData/viking_v1`; it has **not yet been migrated** to `vikingRegistrations`. Publishing the draft rules now would break Viking sign-up/leave actions.
- No code or rule changes in this branch have been deployed to the live site.
- Additional operator emails must be added to the allowlist after the user confirms them.

## Remaining steps before merge/deployment

1. Migrate Viking registrations from the shared document to individual registration documents without deleting the existing records. Preserve the current team display, nickname list, team limit, duplicate prevention, and join/leave behavior.
2. Confirm whether all other admin users have Google accounts and collect their exact Google email addresses.
3. Test the new code against a separate staging Firebase project/database; test every existing page and save path, plus public Viking join/leave and unauthorized writes.
4. Review and finalize Firestore rules only after code migration and tests pass.
5. Keep a copy of the current rules and a rollback commit. Publish only after the user confirms the staging tests.

## Do not do

- Do not disable Anonymous Authentication during migration.
- Do not publish `firestore.rules.draft` yet.
- Do not merge this branch or change the live website until the Viking migration and tests are complete.
- Do not delete or overwrite existing Firestore documents as part of migration.
- Do not commit service-account keys or other private secrets to this public repository.
