// Fill in these values from your own Firebase project, then Google Sign-In
// and cloud quiz sync switch on automatically — nothing else to change.
//
// How to get them (free, ~5 minutes):
//   1. Go to https://console.firebase.google.com and create a project.
//   2. In the project, click the "</>" (web) icon to add a web app, then
//      copy the firebaseConfig object it shows you into FIREBASE_CONFIG below.
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
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
