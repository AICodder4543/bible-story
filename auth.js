// Shared Google Sign-In widget, usable on any page that has a
// <div id="authWrap"></div> in its header. Stays completely inert (never
// even downloads the Firebase SDK) until real values are added to
// firebase-config.js — see that file for setup steps.
//
// Pages that need to react to sign-in (e.g. to sync their own data, or to
// gate access) register a callback with window.authReady.push((user, db) =>
// {...}) — each one is called once Firebase Auth + Firestore are ready, and
// again every time the signed-in user changes.

const FIREBASE_CONFIGURED = typeof firebaseConfig !== 'undefined' && firebaseConfig.apiKey !== 'YOUR_API_KEY';

// The packaged Android app's WebView appends this to its user agent (see
// MainActivity.kt) and exposes window.AndroidBridge.signIn(), which performs
// Google Sign-In natively (no browser/Chrome involved) and calls back into
// window.onNativeSignIn(idToken) below.
const IS_NATIVE_APP = /BibleStoryApp/.test(navigator.userAgent) && !!window.AndroidBridge;

window.authReady = window.authReady || [];

let currentUser = null;
let db = null;
let auth = null;

const authWrap = document.getElementById('authWrap');

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function initFirebase() {
  await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
  await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js');
  await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js');

  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();

  auth.onAuthStateChanged((user) => {
    currentUser = user;
    renderAuthUI();
    window.authReady.forEach((cb) => cb(user, db));
  });

  // Popups get blocked by some browsers (and often inside the packaged
  // Android app's WebView), so fall back to a full-page redirect flow —
  // this call resolves the result once the user is redirected back here.
  auth.getRedirectResult().catch((err) => {
    if (err && err.code !== 'auth/no-such-provider') console.warn('Redirect sign-in failed:', err);
  });
}

function renderAuthUI() {
  if (!authWrap) return;
  if (currentUser) {
    authWrap.innerHTML = `
      <div class="auth-signed-in">
        <img class="auth-avatar" src="${currentUser.photoURL || ''}" alt="" referrerpolicy="no-referrer">
        <span class="auth-name">${currentUser.displayName || currentUser.email || 'Signed in'}</span>
        <button class="auth-btn auth-btn-ghost" id="signOutBtn">Sign out</button>
      </div>
    `;
    document.getElementById('signOutBtn').addEventListener('click', () => auth.signOut());
  } else {
    authWrap.innerHTML = `
      <button class="auth-btn auth-btn-google" id="signInBtn">
        <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.9v2.33A9 9 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.9A9 9 0 0 0 0 9c0 1.45.35 2.83.9 4.03l3.05-2.33z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .9 4.97L3.95 7.3C4.66 5.17 6.65 3.58 9 3.58z"/></svg>
        Sign in with Google
      </button>
    `;
    document.getElementById('signInBtn').addEventListener('click', signIn);
  }
}

function signIn() {
  if (IS_NATIVE_APP) {
    window.AndroidBridge.signIn();
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch((err) => {
    const popupIssues = ['auth/popup-blocked', 'auth/operation-not-supported-in-this-environment'];
    if (popupIssues.includes(err.code)) {
      auth.signInWithRedirect(provider);
      return;
    }
    alert('Sign-in failed: ' + err.message);
  });
}

// Called by MainActivity.kt after native Google Sign-In succeeds.
window.onNativeSignIn = function (idToken) {
  const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
  auth.signInWithCredential(credential).catch((err) => {
    alert('Sign-in failed: ' + err.message);
  });
};
window.onNativeSignInError = function (message) {
  alert('Sign-in failed: ' + message);
};

if (FIREBASE_CONFIGURED) {
  initFirebase().catch((err) => console.warn('Firebase failed to load:', err));
}
