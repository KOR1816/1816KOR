# KOR1816 Firebase security migration plan

This branch is a preparation branch only. It must not be merged into the live GitHub Pages site until the Firebase Authentication and Firestore changes are tested.

## Current live behavior verified from the existing source

- `index.html` signs in anonymously and uses Firestore documents under `siteData` including `teams`, `alliance`, `home`, `seating_v4`, `viking_v1`, and `castle_v1`.
- `notices.html` also signs in anonymously and writes `siteData/notices`.
- The client-side admin password is hardcoded as `0001`; because the website source is public, this is not a secure authorization boundary.
- Viking sign-up data is currently saved as one shared document (`siteData/viking_v1`). Simply restricting all writes to admins would break ordinary users' sign-up/leave actions.
- The Firestore rules are configured in Firebase Console, not in this repository. They were manually extended to expire on 2027-10-18 as a temporary continuity measure; this does not secure the database.

## Required safe migration

1. Keep the current production site and its existing Firestore data untouched while preparing and testing changes on this branch.
2. Enable Google as an Authentication provider in Firebase Console. Keep Anonymous enabled during migration.
3. Implement Google sign-in for the site owner and admin UI. The initial owner email is `to1ggi8410@gmail.com`; add other operator accounts only after they are identified. Do not rely on a password embedded in public JavaScript.
4. Separate admin-only writes from ordinary public actions. In particular, redesign Viking registration so a public user cannot overwrite the entire shared Viking document.
5. Test every existing feature against a staging/test Firestore database: team roster, alliance, home content, seating, notices, castle/war, Viking registration, and all admin edit flows.
6. Only after tests pass, publish the code and replace the temporary open Firestore rules with least-privilege rules. Keep a rollback copy of the current rules and do not delete existing documents.

## Do not do

- Do not turn off Anonymous Authentication before migration tests pass.
- Do not publish restrictive rules before the public Viking write path is redesigned and tested.
- Do not leave the current open read/write rule in place as the final security configuration.
- Do not commit Firebase private service-account keys or other secrets to this public repository.
