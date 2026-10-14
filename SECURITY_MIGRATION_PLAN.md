# KOR1816 Firebase security migration plan

This is a preparation branch only. **Do not merge it into the live GitHub Pages site yet.** Production code and Firestore data remain unchanged.

## Verified production architecture

- `index.html` uses anonymous Firebase Authentication and shared Firestore documents under `siteData`: teams, alliance, home, seating, Viking, and castle data.
- `notices.html` uses anonymous authentication and writes `siteData/notices`.
- The old client-side admin password `0001` was embedded in public JavaScript and was not a secure authorization boundary.
- Viking sign-up originally updated the whole shared document `siteData/viking_v1`.
- The current Firestore rule in Firebase Console was extended to expire on 2027-10-18. This is temporary continuity only; it leaves data publicly writable.

## Work completed on this branch

1. Google provider is enabled in Firebase Authentication; Anonymous remains enabled.
2. `index.html`: replaced hardcoded password prompts for team, seating, home, alliance, castle, and castle-war edit modes with Google sign-in checks. Initial allowed admin email: `to1ggi8410@gmail.com`.
3. `notices.html`: replaced the old admin password prompt with the same Google sign-in check.
4. Viking public join/leave code now uses individual `vikingRegistrations/{uid}` documents rather than writing the entire shared roster document. Existing roster data remains in `siteData/viking_v1` and is still displayed alongside new registrations; the existing shared document is not deleted.
5. Team-count changes now update only team-count metadata in the old shared document, using merge mode, so the legacy roster is not overwritten.
6. Added `firestore.rules.draft`: public reads, admin-only writes to `siteData`, and individual Viking registrations limited to the signed-in user's own UID. Draft only.
7. Added automated JavaScript syntax checking and Firestore rules emulator tests for public reads, admin-only shared writes, own-UID registration, and registration cancellation.
8. Opened draft PR: https://github.com/KOR1816/1816KOR/pull/1

## Important limitations — not ready to publish

- The Google sign-in UI is not enough by itself. Current live Firestore rules remain open, so direct Firestore writes are not yet restricted.
- These changes have **not** been deployed to the live site. GitHub Actions runs syntax and emulator tests; these are not a substitute for testing the actual UI against a separate staging Firebase project.
- Existing Viking entries are preserved and displayed, but their original sign-up owners cannot be inferred. A legacy entry cannot be cancelled by a public user through the new ownership rule; an operator must handle those legacy cancellations.
- The client checks duplicate nicknames for normal use, but this is not a complete anti-impersonation system because users are not individually verified against Kingshot accounts.
- Additional operator emails must be added to the allowlist after the user confirms them.
- Before production rules are tightened, verify every other Firestore path used by the site and confirm that all public read paths continue to work.

## Remaining steps before merge/deployment

1. Test all pages and save flows on a separate staging Firebase project/database: team roster, alliance, home, seating, notices, castle/war, Viking registration, and admin editing.
2. Confirm the allowed Google emails for other operators.
3. Review and finalize Firestore rules only after tests pass.
4. Keep a copy of the current rules and a rollback commit. Publish only after the user confirms staging tests.

## Do not do

- Do not disable Anonymous Authentication during migration.
- Do not publish `firestore.rules.draft` yet.
- Do not merge this branch or change the live website until tests are complete.
- Do not delete or overwrite existing Firestore documents as part of migration.
- Do not commit service-account keys or other private secrets to this public repository.
