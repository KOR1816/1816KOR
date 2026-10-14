import { readFileSync } from "node:fs";
import {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails
} from "@firebase/rules-unit-testing";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";
import test, { before, after } from "node:test";

let env;

before(async () => {
  env = await initializeTestEnvironment({
    projectId: "demo-kor1816",
    firestore: { rules: readFileSync("firestore.rules.draft", "utf8") }
  });
});

after(async () => {
  await env?.cleanup();
});

test("public visitors can read site data", async () => {
  const db = env.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(db, "siteData", "teams")));
});

test("public visitors cannot change shared site data", async () => {
  const db = env.authenticatedContext("visitor-1").firestore();
  await assertFails(setDoc(doc(db, "siteData", "teams"), { hacked: true }));
});

test("allowlisted Google admin can change shared site data", async () => {
  const db = env.authenticatedContext("admin-1", {
    email: "to1ggi8410@gmail.com"
  }).firestore();
  await assertSucceeds(setDoc(doc(db, "siteData", "teams"), { safe: true }));
});

test("second allowlisted Google admin can change shared site data", async () => {
  const db = env.authenticatedContext("admin-2", {
    email: "to1ggi8403@gmail.com"
  }).firestore();
  await assertSucceeds(setDoc(doc(db, "siteData", "teams"), { safe: true }));
});

test("unlisted Google account cannot change shared site data", async () => {
  const db = env.authenticatedContext("other-1", {
    email: "not-an-admin@example.com"
  }).firestore();
  await assertFails(setDoc(doc(db, "siteData", "teams"), { hacked: true }));
});

test("signed-in visitor can create a registration only at their own UID", async () => {
  const db = env.authenticatedContext("visitor-2").firestore();
  const registration = {
    nickname: "TestPlayer",
    team: 1,
    uid: "visitor-2",
    createdAt: Date.now()
  };
  await assertSucceeds(setDoc(doc(db, "vikingRegistrations", "visitor-2"), registration));
  await assertFails(setDoc(doc(db, "vikingRegistrations", "someone-else"), {
    ...registration,
    uid: "visitor-2"
  }));
});

test("Viking registrations cannot select teams above 25", async () => {
  const db = env.authenticatedContext("visitor-25").firestore();
  await assertFails(setDoc(doc(db, "vikingRegistrations", "visitor-25"), {
    nickname: "TestPlayer25",
    team: 26,
    uid: "visitor-25",
    createdAt: Date.now()
  }));
});

test("visitors cannot edit registrations in place", async () => {
  await env.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), "vikingRegistrations", "visitor-3"), {
      nickname: "TestPlayer3",
      team: 1,
      uid: "visitor-3",
      createdAt: Date.now()
    });
  });
  const db = env.authenticatedContext("visitor-3").firestore();
  await assertFails(setDoc(doc(db, "vikingRegistrations", "visitor-3"), {
    nickname: "ChangedName",
    team: 2,
    uid: "visitor-3",
    createdAt: Date.now()
  }));
});

test("visitors can cancel their own registration but not another user's", async () => {
  await env.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), "vikingRegistrations", "visitor-4"), {
      nickname: "TestPlayer4",
      team: 1,
      uid: "visitor-4",
      createdAt: Date.now()
    });
  });
  const ownDb = env.authenticatedContext("visitor-4").firestore();
  await assertSucceeds(deleteDoc(doc(ownDb, "vikingRegistrations", "visitor-4")));
  const otherDb = env.authenticatedContext("visitor-5").firestore();
  await assertFails(deleteDoc(doc(otherDb, "vikingRegistrations", "visitor-4")));
});
