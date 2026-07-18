// Firestore sync of quiz progress/streaks, layered on top of auth.js.
// Relies on loadProgress/saveProgress/bestStreak/renderTodayCard/
// renderStreak/renderArchive from quiz.js, and on window.onAuthReady being
// called by auth.js once Firebase Auth + Firestore are ready.

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

window.onAuthReady = (user) => {
  if (user) syncFromCloudOnSignIn();
};
window.onQuizProgressChange = () => pushToCloud();
