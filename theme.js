// Shared dark/light theme system for every page.
// Modes: 'auto' (follow system), 'light', 'dark' — stored in localStorage.
// Applies data-theme="light"|"dark" on <html> for CSS to key off, and
// renders a small toggle button into <div id="themeToggle"></div> if present.

const THEME_KEY = 'bibleStoryTheme';
const root = document.documentElement;

const themeToggleStyle = document.createElement('style');
themeToggleStyle.textContent = `
  #themeToggle { display: inline-flex; }
  .theme-toggle-btn {
    border: 1.5px solid rgba(0,0,0,0.12);
    background: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    padding: 0;
  }
  .theme-toggle-btn:hover { transform: translateY(-1px) scale(1.05); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
  :root[data-theme="dark"] .theme-toggle-btn { background: #2a2d33; border-color: rgba(255,255,255,0.15); color: #eae6df; }
`;
document.head.appendChild(themeToggleStyle);

function systemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getMode() {
  return localStorage.getItem(THEME_KEY) || 'auto';
}

function resolveTheme(mode) {
  if (mode === 'light' || mode === 'dark') return mode;
  return systemPrefersDark() ? 'dark' : 'light';
}

function applyTheme(mode) {
  root.setAttribute('data-theme', resolveTheme(mode));
  root.setAttribute('data-theme-mode', mode);
  renderToggle(mode);
}

function setMode(mode) {
  localStorage.setItem(THEME_KEY, mode);
  applyTheme(mode);
}

function cycleMode() {
  const order = ['auto', 'light', 'dark'];
  const next = order[(order.indexOf(getMode()) + 1) % order.length];
  setMode(next);
}

function renderToggle(mode) {
  const el = document.getElementById('themeToggle');
  if (!el) return;
  const icon = mode === 'auto' ? '🌗' : (mode === 'dark' ? '🌙' : '☀️');
  const label = mode === 'auto' ? 'Auto' : (mode === 'dark' ? 'Dark' : 'Light');
  el.innerHTML = `<button class="theme-toggle-btn" id="themeToggleBtn" title="Theme: ${label} (tap to change)">${icon}</button>`;
  document.getElementById('themeToggleBtn').addEventListener('click', cycleMode);
}

if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getMode() === 'auto') applyTheme('auto');
  });
}

applyTheme(getMode());
document.addEventListener('DOMContentLoaded', () => applyTheme(getMode()));
