// Fill in these values from your own Firebase project, then Google Sign-In
// and cloud quiz sync switch on automatically — nothing else to change.
//
// How to get them (free, ~5 minutes):
//   1. Go to https://console.firebase.google.com and create a project.
//   2. In the project, click the "</>" (web) icon to add a web app, then
//      copy the firebaseConfig object it shows you in below, replacing the
//      placeholder values.
//   3. In the Firebase console: Build → Authentication → Sign-in method →
//      enable "Google".
//   4. In the Firebase console: Build → Firestore Database → Create database
//      (start in production mode is fine).
//   5. In Firestore → Rules, paste this so each signed-in user can only read
//      and write their own quiz data, then click "Publish":
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{database}/documents {
//            match /users/{userId} {
//              allow read, write: if request.auth != null && request.auth.uid == userId;
//            }
//          }
//        }
//   6. In Authentication → Settings → Authorized domains, add:
//        aicodder4543.github.io
//
// Until real values replace the placeholders below, the site works exactly
// as before — no sign-in button appears, and everything stays local to the
// device (localStorage only).
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Mr3j3CF-PNtCf_MIy_U4gQxqpgCq_YY",
  authDomain: "the-bible-story-timeline.firebaseapp.com",
  projectId: "the-bible-story-timeline",
  storageBucket: "the-bible-story-timeline.firebasestorage.app",
  messagingSenderId: "876926083324",
  appId: "1:876926083324:web:165ddada3f8eb700a53779",
  measurementId: "G-LJVFNRWXW5"
};
