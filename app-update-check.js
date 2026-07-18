// Shows a "new version available" banner inside the packaged Android app
// (Trusted Web Activity) when a newer APK has been published than the one
// currently installed. Does nothing in a normal browser tab.
//
// IMPORTANT for whoever rebuilds the APK: bump CURRENT_APP_VERSION_CODE below
// to match the new appVersionCode in android-build/twa-manifest.json, AND
// update app-version.json's latestVersionCode/latestVersionName/apkUrl to
// point at the newly published release — otherwise this banner won't fire
// for anyone, or will fire for everyone including people already updated.
const CURRENT_APP_VERSION_CODE = 5;

(function () {
  const isPackagedApp = document.referrer.startsWith('android-app://');
  if (!isPackagedApp) return;

  fetch('app-version.json', { cache: 'no-store' })
    .then((r) => r.json())
    .then((data) => {
      if (!data || typeof data.latestVersionCode !== 'number') return;
      if (data.latestVersionCode <= CURRENT_APP_VERSION_CODE) return;

      const DISMISS_KEY = 'bibleStoryUpdateDismissed_' + data.latestVersionCode;
      if (localStorage.getItem(DISMISS_KEY)) return;

      const style = document.createElement('style');
      style.textContent = `
        #appUpdateBanner {
          position: fixed; left: 0; right: 0; bottom: 0; z-index: 10000;
          background: #2c3e50; color: #fff;
          padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
          font-family: 'Nunito', sans-serif; font-size: 0.9rem;
          box-shadow: 0 -4px 16px rgba(0,0,0,0.25);
        }
        #appUpdateBanner .aub-text { flex: 1; min-width: 180px; }
        #appUpdateBanner .aub-text strong { display: block; font-family: 'Baloo 2', sans-serif; font-size: 0.95rem; }
        #appUpdateBanner button {
          font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 0.85rem;
          padding: 8px 16px; border-radius: 20px; border: none; cursor: pointer;
        }
        #appUpdateBanner .aub-update { background: #f1c40f; color: #6b5100; }
        #appUpdateBanner .aub-dismiss { background: transparent; color: #ccc; border: 1px solid #556; }
      `;
      document.head.appendChild(style);

      const banner = document.createElement('div');
      banner.id = 'appUpdateBanner';
      banner.innerHTML = `
        <div class="aub-text">
          <strong>Update available (v${data.latestVersionName})</strong>
          ${data.notes || 'A new version of the app is ready to install.'}
        </div>
        <button class="aub-update" id="aubUpdateBtn">Download</button>
        <button class="aub-dismiss" id="aubDismissBtn">Not now</button>
      `;
      document.body.appendChild(banner);

      document.getElementById('aubUpdateBtn').addEventListener('click', () => {
        window.location.href = data.apkUrl;
      });
      document.getElementById('aubDismissBtn').addEventListener('click', () => {
        localStorage.setItem(DISMISS_KEY, '1');
        banner.remove();
      });
    })
    .catch(() => {});
})();
