// Google Sign-In + Firestore sync for the Daily Quiz.
// Stays completely inert (and never even downloads the Firebase SDK) until
// real values are added to firebase-config.js — see that file for setup
// steps. Relies on loadProgress/saveProgress/bestStreak/renderTodayCard/
// renderStreak/renderArchive from quiz.js, which loads before this script.

const FIREBASE_CONFIGURED = typeof FIREBASE_CONFIG !== 'undefined' && FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY';

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

  firebase.initializeApp(FIREBASE_CONFIG);
  auth = firebase.auth();
  db = firebase.firestore();

  auth.onAuthStateChanged((user) => {
    currentUser = user;
    renderAuthUI();
    if (user) syncFromCloudOnSignIn();
  });

  window.onQuizProgressChange = () => pushToCloud();
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
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch((err) => {
    alert('Sign-in failed: ' + err.message);
  });
}

function pushToCloud() {
  if (!currentUser || !db) return;
  db.collection('users').doc(currentUser.uid).set({
    quizProgress: loadProgress(),
    bestStreak: bestStreak(),
    displayName: currentUser.displayName || null,
    email: currentUser.email || null,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).catch((err) => console.warn('Cloud sync failed:', err));
}

async function syncFromCloudOnSignIn() {
  const snap = await db.collection('users').doc(currentUser.uid).get();
  const cloudData = snap.exists ? snap.data() : null;
  const localProgress = loadProgress();
  const localBest = bestStreak();

  let merged = localProgress;
  let mergedBest = localBest;
  if (cloudData && cloudData.quizProgress) {
    // Union of both devices' completed days; local entries win on same-day
    // conflicts since they're the freshest thing the user just did here.
    merged = { ...cloudData.quizProgress, ...localProgress };
    mergedBest = Math.max(localBest, cloudData.bestStreak || 0);
  }

  saveProgress(merged);
  localStorage.setItem(BEST_STREAK_KEY, String(mergedBest));

  renderTodayCard();
  renderStreak();
  renderArchive();

  pushToCloud();
}

if (FIREBASE_CONFIGURED) {
  initFirebase().catch((err) => console.warn('Firebase failed to load:', err));
}
