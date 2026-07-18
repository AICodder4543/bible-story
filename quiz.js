// Daily Catholic Quiz logic.
// The quiz shown each day is picked automatically from QUIZ_SETS based on
// the date — no server needed, it just "rotates" forever. Progress and
// streaks are saved in this browser's localStorage (per-device, not synced
// across devices, since this is a static site with no backend).

const STORAGE_KEY = 'bibleStoryQuizProgress';
const BEST_STREAK_KEY = 'bibleStoryQuizBestStreak';

// ---------- Date helpers ----------
function todayStr() {
  return dateToStr(new Date());
}
function dateToStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
function strToDate(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function daysBetween(aStr, bStr) {
  const a = strToDate(aStr);
  const b = strToDate(bStr);
  return Math.round((b - a) / 86400000);
}
function addDays(dateStr, n) {
  const d = strToDate(dateStr);
  d.setDate(d.getDate() + n);
  return dateToStr(d);
}
function formatDisplayDate(dateStr) {
  const d = strToDate(dateStr);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

// ---------- Quiz set lookup ----------
function quizSetForDate(dateStr) {
  let dayIndex = daysBetween(QUIZ_EPOCH, dateStr);
  const len = QUIZ_SETS.length;
  dayIndex = ((dayIndex % len) + len) % len; // wrap, including dates before epoch
  return QUIZ_SETS[dayIndex];
}

// ---------- Progress storage ----------
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}
function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  if (window.onQuizProgressChange) window.onQuizProgressChange(progress);
}
function recordResult(dateStr, answers, score, total) {
  const progress = loadProgress();
  progress[dateStr] = { answers, score, total, completedAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateBestStreak();
  saveProgress(progress);
}

// ---------- Streak calculation ----------
function currentStreak() {
  const progress = loadProgress();
  let streak = 0;
  let cursor = todayStr();
  // Today doesn't have to be done yet for the streak to still count from yesterday.
  if (!progress[cursor]) cursor = addDays(cursor, -1);
  while (progress[cursor]) {
    streak++;
    cursor = addDays(cursor, -1);
  }
  return streak;
}
function updateBestStreak() {
  const streak = currentStreak();
  const best = parseInt(localStorage.getItem(BEST_STREAK_KEY) || '0', 10);
  if (streak > best) localStorage.setItem(BEST_STREAK_KEY, String(streak));
}
function bestStreak() {
  return parseInt(localStorage.getItem(BEST_STREAK_KEY) || '0', 10);
}

// ---------- Rendering: today's quiz ----------
const todayCard = document.getElementById('todayCard');
const streakNumEl = document.getElementById('streakNum');
const bestStreakNumEl = document.getElementById('bestStreakNum');

function renderTodayCard() {
  const date = todayStr();
  const set = quizSetForDate(date);
  const progress = loadProgress();
  const done = progress[date];

  const questionsHTML = set.questions.map((item, qi) => {
    const userAnswer = done ? done.answers[qi] : null;
    const choicesHTML = item.choices.map((choice, ci) => {
      let cls = 'choice';
      if (done) {
        cls += ' locked';
        if (ci === item.answer) cls += ' correct';
        else if (ci === userAnswer) cls += ' incorrect';
      }
      const checked = userAnswer === ci ? 'checked' : '';
      const disabled = done ? 'disabled' : '';
      return `
        <label class="${cls}" data-qi="${qi}" data-ci="${ci}">
          <input type="radio" name="q${qi}" value="${ci}" ${checked} ${disabled}>
          ${choice}
        </label>`;
    }).join('');

    return `
      <div class="question-block">
        <div class="q-text">${qi + 1}. ${item.q}</div>
        ${choicesHTML}
        <div class="note ${done ? 'show' : ''}">${item.note}</div>
      </div>`;
  }).join('');

  const banner = done
    ? `<div class="already-done-banner">✓ You already finished today's quiz — you scored ${done.score}/${done.total}!</div>`
    : '';

  const actionsHTML = done
    ? ''
    : `<div class="quiz-actions">
         <button class="btn" id="submitQuizBtn">Check My Answers</button>
         <span class="score-result" id="scoreResult"></span>
       </div>`;

  todayCard.innerHTML = `
    ${banner}
    <div class="quiz-date-row">
      <div class="quiz-theme">${set.theme}</div>
      <div class="quiz-date">${formatDisplayDate(date)}</div>
    </div>
    ${questionsHTML}
    ${actionsHTML}
  `;

  if (!done) {
    todayCard.querySelectorAll('.choice').forEach((label) => {
      label.addEventListener('click', () => {
        const qi = label.dataset.qi;
        todayCard.querySelectorAll(`.choice[data-qi="${qi}"]`).forEach((l) => l.classList.remove('selected'));
        label.classList.add('selected');
      });
    });

    document.getElementById('submitQuizBtn').addEventListener('click', () => {
      const answers = set.questions.map((_, qi) => {
        const checked = todayCard.querySelector(`input[name="q${qi}"]:checked`);
        return checked ? Number(checked.value) : -1;
      });
      if (answers.includes(-1)) {
        document.getElementById('scoreResult').textContent = 'Please answer every question first!';
        document.getElementById('scoreResult').style.color = '#e74c3c';
        return;
      }
      const score = answers.filter((a, qi) => a === set.questions[qi].answer).length;
      recordResult(date, answers, score, set.questions.length);
      renderTodayCard();
      renderStreak();
      renderArchive();
    });
  }
}

function renderStreak() {
  streakNumEl.textContent = currentStreak();
  bestStreakNumEl.textContent = bestStreak();
}

// ---------- Archive ----------
const archiveGrid = document.getElementById('archiveGrid');
const overlay = document.getElementById('overlay');
const archiveModal = document.getElementById('archiveModal');
const archiveModalContent = document.getElementById('archiveModalContent');
const archiveCloseBtn = document.getElementById('archiveCloseBtn');

const ARCHIVE_DAYS = 30;

function renderArchive() {
  const progress = loadProgress();
  const today = todayStr();
  let html = '';
  for (let i = 0; i < ARCHIVE_DAYS; i++) {
    const dateStr = addDays(today, -i);
    const set = quizSetForDate(dateStr);
    const entry = progress[dateStr];
    const statusClass = entry ? 'done' : (i === 0 ? '' : 'missed');
    const statusText = entry ? `✓ ${entry.score}/${entry.total}` : (i === 0 ? 'Not done yet' : 'Missed');
    html += `
      <div class="archive-item ${statusClass}" data-date="${dateStr}">
        <div class="a-date">${formatDisplayDate(dateStr)}</div>
        <div class="a-theme">${set.theme}</div>
        <div class="a-status">${statusText}</div>
      </div>`;
  }
  archiveGrid.innerHTML = html;

  archiveGrid.querySelectorAll('.archive-item').forEach((item) => {
    item.addEventListener('click', () => openArchiveModal(item.dataset.date));
  });
}

function openArchiveModal(dateStr) {
  const set = quizSetForDate(dateStr);
  const progress = loadProgress();
  const entry = progress[dateStr];

  const questionsHTML = set.questions.map((item, qi) => {
    const userAnswer = entry ? entry.answers[qi] : null;
    const choicesHTML = item.choices.map((choice, ci) => {
      let cls = 'choice locked';
      if (ci === item.answer) cls += ' correct';
      else if (ci === userAnswer) cls += ' incorrect';
      return `<div class="${cls}">${choice}</div>`;
    }).join('');
    return `
      <div class="question-block">
        <div class="q-text">${qi + 1}. ${item.q}</div>
        ${choicesHTML}
        <div class="note show">${item.note}</div>
      </div>`;
  }).join('');

  const summary = entry
    ? `<div class="already-done-banner">✓ You scored ${entry.score}/${entry.total} on this day</div>`
    : `<div class="already-done-banner" style="background:#fdf3e3;border-color:#d3a021;color:#8a5a0c;">You didn't take this quiz — here are the questions and answers.</div>`;

  archiveModalContent.innerHTML = `
    <div class="quiz-date-row">
      <div class="quiz-theme">${set.theme}</div>
      <div class="quiz-date">${formatDisplayDate(dateStr)}</div>
    </div>
    ${summary}
    ${questionsHTML}
  `;

  overlay.classList.add('show');
  archiveModal.classList.add('show');
}

function closeArchiveModal() {
  overlay.classList.remove('show');
  archiveModal.classList.remove('show');
}
archiveCloseBtn.addEventListener('click', closeArchiveModal);
overlay.addEventListener('click', closeArchiveModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeArchiveModal();
});

// ---------- Init ----------
renderTodayCard();
renderStreak();
renderArchive();
