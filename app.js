// Builds the road, stations, dots and detail panel from ERAS (see data.js).

const stationsEl = document.getElementById('stations');
const roadPath = document.getElementById('roadPath');
const roadViewport = document.getElementById('roadViewport');
const dotsEl = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const overlay = document.getElementById('overlay');
const detailPanel = document.getElementById('detailPanel');
const closeBtn = document.getElementById('closeBtn');

const detailIcon = document.getElementById('detailIcon');
const detailTitle = document.getElementById('detailTitle');
const detailDates = document.getElementById('detailDates');
const detailSummary = document.getElementById('detailSummary');
const detailBanner = document.getElementById('detailBanner');
const imageCredit = document.getElementById('imageCredit');
const detailChronologyWrap = document.getElementById('detailChronologyWrap');
const eventCards = document.getElementById('eventCards');

const progressFill = document.getElementById('progressFill');
const exploredCountEl = document.getElementById('exploredCount');
const moodWash = document.getElementById('moodWash');
const bgIconA = document.getElementById('bgIconA');
const bgIconB = document.getElementById('bgIconB');
let bgIconShowingA = true;

const charOverlay = document.getElementById('charOverlay');
const characterModal = document.getElementById('characterModal');
const charCloseBtn = document.getElementById('charCloseBtn');
const charAvatar = document.getElementById('charAvatar');
const charName = document.getElementById('charName');
const charStory = document.getElementById('charStory');

let currentIndex = 0;
const visited = new Set();
const visitedEvents = new Set();
const eventKey = (eraIdx, evIdx) => `${eraIdx}-${evIdx}`;

// Renders a glossy 3D-style emoji image when available, else the plain emoji.
function iconHTML(emoji) {
  const url = ICONS_3D[emoji];
  if (url) return `<img class="icon-3d" src="${url}" alt="" draggable="false">`;
  return `<span class="icon-emoji">${emoji}</span>`;
}

// ---------- Build stations ----------
ERAS.forEach((era, i) => {
  const station = document.createElement('div');
  station.className = 'station';
  station.style.setProperty('--era-color', era.color);
  station.style.setProperty('--station-delay', `${i * 0.08}s`);
  station.dataset.index = i;
  station.tabIndex = 0;
  station.setAttribute('role', 'button');
  station.setAttribute('aria-label', era.title);

  station.innerHTML = `
    <div class="station-badge">${iconHTML(era.icon)}</div>
    <div class="station-label">${era.title}</div>
    <div class="station-dates">${era.dates}</div>
  `;

  station.addEventListener('click', () => openEra(i));
  station.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEra(i); }
  });

  stationsEl.appendChild(station);
});

// ---------- Build dots ----------
ERAS.forEach((era, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.title = era.title;
  dot.addEventListener('click', () => { goTo(i); openEra(i); });
  dotsEl.appendChild(dot);
});

function updateDots() {
  [...dotsEl.children].forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function updateStationsActiveState() {
  [...stationsEl.children].forEach((s, i) => s.classList.toggle('active', i === currentIndex));
}

// ---------- Road path (winding curve through station badges) ----------
function drawRoad() {
  const stationEls = [...stationsEl.children];
  const containerRect = stationsEl.getBoundingClientRect();
  const width = stationsEl.scrollWidth;
  const height = roadViewport.clientHeight;

  // .stations is centered with margin:auto when it's narrower than the
  // viewport, so the road-path svg (anchored at left:0 of road-viewport)
  // needs to shift to match wherever .stations actually starts.
  roadPath.style.left = `${stationsEl.offsetLeft}px`;
  roadPath.setAttribute('width', width);
  roadPath.setAttribute('height', height);
  roadPath.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const points = stationEls.map((s) => {
    const badge = s.querySelector('.station-badge');
    const r = badge.getBoundingClientRect();
    const x = r.left - containerRect.left + r.width / 2;
    const y = r.top - containerRect.top + r.height / 2;
    return { x, y };
  });

  if (points.length < 2) return;

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    d += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
  }

  roadPath.innerHTML = `<path d="${d}" fill="none" stroke="#d8c9a3" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 22" />`;
}

// ---------- Navigation ----------
function goTo(i) {
  currentIndex = Math.max(0, Math.min(ERAS.length - 1, i));
  const target = stationsEl.children[currentIndex];
  target.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
  updateDots();
  updateStationsActiveState();
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === ERAS.length - 1;
  moodWash.style.backgroundColor = ERAS[currentIndex].color;
  updateBgIcon(ERAS[currentIndex]);
}

function updateBgIcon(era) {
  const url = era.bgScene || era.image || ICONS_3D[era.icon];
  const isScene = !!(era.bgScene || era.image);
  if (!url) return;
  const incoming = bgIconShowingA ? bgIconB : bgIconA;
  const outgoing = bgIconShowingA ? bgIconA : bgIconB;
  bgIconShowingA = !bgIconShowingA;

  // Fade the current background out first, then bring the new one in once
  // it has actually finished loading — avoids a jarring "pop" mid-fade.
  outgoing.classList.remove('show');

  incoming.classList.toggle('scene', isScene);
  const revealIncoming = () => incoming.classList.add('show');
  if (incoming.src === url && incoming.complete) {
    revealIncoming();
  } else {
    incoming.classList.remove('show');
    incoming.onload = revealIncoming;
    incoming.src = url;
  }
}

prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

// ---------- Full-screen swipe navigation (road view only) ----------
// Lets a swipe anywhere on the main road screen move between eras, not just
// the narrow road strip or the Prev/Next buttons.
(() => {
  const SWIPE_MIN_DISTANCE = 50;
  const SWIPE_MAX_OFF_AXIS = 70;
  let startX = 0;
  let startY = 0;
  let tracking = false;

  function popupOpen() {
    return detailPanel.classList.contains('show') || characterModal.classList.contains('show');
  }

  document.addEventListener('pointerdown', (e) => {
    if (popupOpen() || e.pointerType === 'mouse' && e.button !== 0) return;
    tracking = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  document.addEventListener('pointerup', (e) => {
    if (!tracking) return;
    tracking = false;
    if (popupOpen()) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) < SWIPE_MIN_DISTANCE || Math.abs(dy) > SWIPE_MAX_OFF_AXIS) return;
    if (dx < 0) goTo(currentIndex + 1);
    else goTo(currentIndex - 1);
  });

  document.addEventListener('pointercancel', () => { tracking = false; });
})();

document.addEventListener('keydown', (e) => {
  if (characterModal.classList.contains('show')) {
    if (e.key === 'Escape') closeCharacter();
    return;
  }
  if (detailPanel.classList.contains('show')) {
    if (e.key === 'Escape') closeDetail();
    return;
  }
  if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
});

// ---------- Detail panel ----------
function openEra(i) {
  currentIndex = i;
  const era = ERAS[i];
  goTo(i);

  detailIcon.innerHTML = iconHTML(era.icon);
  detailIcon.style.setProperty('--era-color', era.color);
  detailTitle.textContent = era.title;
  detailDates.textContent = era.dates;
  detailSummary.textContent = era.summary;
  detailBanner.src = era.image;
  detailBanner.alt = era.imageCredit;
  imageCredit.textContent = `🎨 ${era.imageCredit}`;

  detailChronologyWrap.innerHTML = era.chronology ? `
    <details class="ec-deeper detail-chronology">
      <summary class="ec-deeper-toggle">
        <span class="ec-deeper-label">📅 Detailed Chronology</span>
        <span class="ec-deeper-arrow">▸</span>
      </summary>
      <div class="ec-deeper-content">
        ${era.chronology.map((c, ci) => `
          <div class="ec-deeper-point" style="--point-delay:${ci * 0.05}s">
            <div class="ec-deeper-heading">${c.date}</div>
            <div class="ec-deeper-text">${c.text}</div>
          </div>
        `).join('')}
      </div>
    </details>
  ` : '';

  eventCards.innerHTML = era.events.map((ev, ci) => {
    const seen = visitedEvents.has(eventKey(i, ci));
    const deeper = ev.catholicTeaching ? `
      <details class="ec-deeper">
        <summary class="ec-deeper-toggle">
          <span class="ec-deeper-label">📚 Go deeper: Catholic teaching</span>
          <span class="ec-deeper-arrow">▸</span>
        </summary>
        <div class="ec-deeper-content">
          ${ev.catholicTeaching.map((pt, pi) => `
            <div class="ec-deeper-point" style="--point-delay:${pi * 0.1}s">
              <div class="ec-deeper-heading">${pt.heading}</div>
              <div class="ec-deeper-text">${pt.text}</div>
            </div>
          `).join('')}
        </div>
      </details>
    ` : '';

    return `
    <div class="event-card${seen ? ' visited' : ''}" style="--era-color:${era.color}; --card-delay:${ci * 0.08}s" data-era="${i}" data-event="${ci}">
      <label class="ec-check" data-era="${i}" data-event="${ci}" title="Mark as read">
        <input type="checkbox" ${seen ? 'checked' : ''}>
        <span class="ec-check-mark">✓</span>
      </label>
      <div class="ec-icon">${ev.icon}</div>
      <div class="ec-title">${ev.title}</div>
      <div class="ec-text">${ev.text}</div>
      <div class="ec-tap">✨ Meet ${ev.character.name}</div>
      ${deeper}
    </div>
  `;
  }).join('');

  [...eventCards.children].forEach((card) => {
    card.addEventListener('click', () => {
      const eraIdx = Number(card.dataset.era);
      const evIdx = Number(card.dataset.event);
      const era2 = ERAS[eraIdx];
      const ev = era2.events[evIdx];
      openCharacter(era2, ev.character);
    });

    const deeperEl = card.querySelector('.ec-deeper');
    if (deeperEl) {
      deeperEl.addEventListener('click', (e) => e.stopPropagation());
    }

    const checkEl = card.querySelector('.ec-check');
    checkEl.addEventListener('click', (e) => e.stopPropagation());
    checkEl.querySelector('input').addEventListener('change', (e) => {
      const eraIdx = Number(checkEl.dataset.era);
      const evIdx = Number(checkEl.dataset.event);
      setEventRead(eraIdx, evIdx, e.target.checked, card);
    });
  });

  overlay.classList.add('show');
  detailPanel.classList.add('show');
}

function closeDetail() {
  overlay.classList.remove('show');
  detailPanel.classList.remove('show');
}

closeBtn.addEventListener('click', closeDetail);
overlay.addEventListener('click', closeDetail);

// ---------- Character modal ----------
const charFullBioWrap = document.getElementById('charFullBioWrap');

function openCharacter(era, character) {
  charAvatar.innerHTML = iconHTML(character.icon);
  charAvatar.style.setProperty('--era-color', era.color);
  charName.textContent = character.name;
  charStory.textContent = character.story;

  charFullBioWrap.innerHTML = character.fullBio ? `
    <details class="char-deeper">
      <summary class="ec-deeper-toggle">
        <span class="ec-deeper-label">📖 Meet ${character.name}: The Full Story (Catholic Resources)</span>
        <span class="ec-deeper-arrow">▸</span>
      </summary>
      <div class="char-deeper-content">
        <p class="char-deeper-bio">${character.fullBio}</p>
        ${character.references ? `<p class="char-deeper-refs"><strong>References:</strong> ${character.references}</p>` : ''}
      </div>
    </details>
  ` : '';
  const deeperEl = charFullBioWrap.querySelector('.char-deeper');
  if (deeperEl) deeperEl.addEventListener('click', (e) => e.stopPropagation());

  charOverlay.classList.add('show');
  characterModal.classList.add('show');
}

function closeCharacter() {
  charOverlay.classList.remove('show');
  characterModal.classList.remove('show');
}

charCloseBtn.addEventListener('click', closeCharacter);
charOverlay.addEventListener('click', closeCharacter);

function setEventRead(eraIdx, evIdx, checked, card) {
  const key = eventKey(eraIdx, evIdx);
  if (checked) visitedEvents.add(key);
  else visitedEvents.delete(key);
  card.classList.toggle('visited', checked);
  checkEraComplete(eraIdx);
}

function checkEraComplete(eraIdx) {
  const era = ERAS[eraIdx];
  const allSeen = era.events.every((_, ci) => visitedEvents.has(eventKey(eraIdx, ci)));
  if (allSeen && !visited.has(eraIdx)) {
    visited.add(eraIdx);
    stationsEl.children[eraIdx].classList.add('visited');
    updateProgress();
  } else if (!allSeen && visited.has(eraIdx)) {
    visited.delete(eraIdx);
    stationsEl.children[eraIdx].classList.remove('visited');
    updateProgress();
  }
}

function updateProgress() {
  exploredCountEl.textContent = visited.size;
  progressFill.style.width = `${(visited.size / ERAS.length) * 100}%`;
}

// ---------- Init ----------
// Hide the splash as soon as the DOM/JS is ready rather than waiting for
// every image on the page (window 'load') plus an extra artificial delay —
// the splash was sitting for a lot longer than it needed to.
window.addEventListener('resize', drawRoad);
function initApp() {
  drawRoad();
  goTo(0);
  preloadEraImages();
  const splash = document.getElementById('splash');
  if (splash) splash.classList.add('hide');
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
setTimeout(drawRoad, 50);

// Quietly fetch every era's background/banner image in the background after
// the page has settled, so switching eras later doesn't wait on the network.
function preloadEraImages() {
  const urls = new Set();
  ERAS.forEach(era => {
    if (era.image) urls.add(era.image);
    if (era.bgScene) urls.add(era.bgScene);
  });
  let i = 0;
  const urlList = [...urls];
  const loadNext = () => {
    if (i >= urlList.length) return;
    const img = new Image();
    img.onload = img.onerror = () => setTimeout(loadNext, 150);
    img.src = urlList[i++];
  };
  setTimeout(loadNext, 1000);
}
