// Full-site sign-in gate. Include after auth.js on every page. Blocks the
// page behind a "Sign in with Google" screen until the user is signed in;
// right after a successful sign-in it sends them to home.html. Stays
// completely inert if Firebase isn't configured yet (see firebase-config.js).

if (typeof FIREBASE_CONFIGURED !== 'undefined' && FIREBASE_CONFIGURED) {
  const JUST_SIGNED_IN_FLAG = 'bibleStoryJustSignedIn';

  const style = document.createElement('style');
  style.textContent = `
    #authGateOverlay {
      position: fixed; inset: 0; z-index: 9999;
      background: linear-gradient(180deg, #eaf4ff 0%, #fdf9f1 60%);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
      font-family: 'Nunito', sans-serif;
    }
    #authGateOverlay.show { opacity: 1; pointer-events: auto; }
    #authGateOverlay .gate-card {
      text-align: center;
      max-width: 380px;
      padding: 40px 32px;
      background: #fff;
      border-radius: 22px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      margin: 20px;
    }
    #authGateOverlay img { width: 72px; height: 72px; margin-bottom: 16px; }
    #authGateOverlay h2 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      color: #2c3e50;
      margin: 0 0 10px;
    }
    #authGateOverlay p {
      color: #666;
      font-size: 0.98rem;
      line-height: 1.5;
      margin: 0 0 26px;
    }
    #authGateOverlay .gate-signin-btn {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 0.98rem;
      padding: 12px 24px;
      border-radius: 30px;
      border: 1.5px solid #dadce0;
      background: #fff;
      color: #444;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    #authGateOverlay .gate-signin-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.15); }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.id = 'authGateOverlay';
  overlay.innerHTML = `
    <div class="gate-card">
      <img src="logo-512.png" alt="The Bible Story logo">
      <h2>Welcome to The Bible Story</h2>
      <p>Sign in with Google to continue — this keeps your quiz progress and streak safely backed up to your account.</p>
      <button class="gate-signin-btn" id="gateSignInBtn">
        <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.9v2.33A9 9 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.9A9 9 0 0 0 0 9c0 1.45.35 2.83.9 4.03l3.05-2.33z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .9 4.97L3.95 7.3C4.66 5.17 6.65 3.58 9 3.58z"/></svg>
        Sign in with Google
      </button>
    </div>
  `;

  function mountOverlay() {
    if (!document.getElementById('authGateOverlay')) document.body.appendChild(overlay);
  }
  if (document.body) mountOverlay();
  else document.addEventListener('DOMContentLoaded', mountOverlay);

  document.addEventListener('click', (e) => {
    if (e.target.closest('#gateSignInBtn')) {
      sessionStorage.setItem(JUST_SIGNED_IN_FLAG, '1');
      signIn();
    }
  });

  window.authReady = window.authReady || [];
  window.authReady.push((user) => {
    mountOverlay();
    if (user) {
      // Already signed in — never show the gate at all, just let the page's
      // own loading/splash screen (if any) carry on as normal.
      overlay.classList.remove('show');
      const justSignedIn = sessionStorage.getItem(JUST_SIGNED_IN_FLAG);
      if (justSignedIn) {
        sessionStorage.removeItem(JUST_SIGNED_IN_FLAG);
        if (!location.pathname.endsWith('home.html')) {
          location.href = 'home.html';
        }
      }
    } else {
      overlay.classList.add('show');
    }
  });
}
