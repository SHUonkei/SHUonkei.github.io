// ===== Data Loading =====
async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return res.json();
}

// ===== Renderers =====
function highlightMyName(authors) {
  return authors
    .replace(/(Shuitsu Koyama)/g, '<strong>$1</strong>')
    .replace(/(小山修生)/g, '<strong>$1</strong>');
}

function renderPublications(data) {
  const container = document.getElementById('publications-list');
  if (!data.length) return;

  const sorted = [...data].sort((a, b) => b.year - a.year);

  container.innerHTML = sorted.map(pub => `
    <div class="publication-item ${pub.highlight ? 'highlight' : ''}">
      <div class="publication-title">${pub.title}</div>
      <div class="publication-authors">${highlightMyName(pub.authors)}</div>
      ${pub.venue ? `<div class="publication-venue">${pub.venue}${pub.note ? `, ${pub.note}` : ''}</div>` : ''}
      <span class="publication-year">${pub.year}</span>
      ${pub.type === 'international' ? '<span class="publication-type international">International</span>' : ''}
    </div>
  `).join('');
}

function renderInternships(data) {
  const container = document.getElementById('experience-timeline');
  if (!data.length) return;

  container.innerHTML = data.map(item => `
    <div class="timeline-item ${item.current ? 'current' : ''}">
      <div class="timeline-company">${item.company}</div>
      <div class="timeline-period">
        ${item.period}
        ${item.current ? '<span class="timeline-badge">現在</span>' : ''}
      </div>
    </div>
  `).join('');
}

function renderCompetitions(data) {
  const container = document.getElementById('achievements-grid');
  if (!data.length) return;

  container.innerHTML = data.map(item => {
    if (item.medals) {
      const medalsHTML = item.medals.map(m => `
        <span class="medal ${m.type}">
          <span class="medal-icon">${getMedalEmoji(m.type)}</span>
          ${getMedalLabel(m.type)} &times; ${m.count}
        </span>
      `).join('');
      return `
        <div class="achievement-card">
          <div class="achievement-platform">${item.platform}</div>
          <div class="medals">${medalsHTML}</div>
        </div>
      `;
    }
    return `
      <div class="achievement-card">
        <div class="achievement-platform">${item.platform}</div>
        <div class="achievement-detail">${item.detail}</div>
      </div>
    `;
  }).join('');
}

function getMedalEmoji(type) {
  const map = { gold: '★', silver: '★', bronze: '★' };
  return map[type] || '★';
}

function getMedalLabel(type) {
  const map = { gold: 'Gold', silver: 'Silver', bronze: 'Bronze' };
  return map[type] || type;
}

// ===== Intersection Observer for fade-in =====
function setupFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===== Init =====
async function init() {
  try {
    const [publications, internships, competitions] = await Promise.all([
      fetchJSON('data/publications.json'),
      fetchJSON('data/internships.json'),
      fetchJSON('data/competitions.json'),
    ]);

    renderPublications(publications);
    renderInternships(internships);
    renderCompetitions(competitions);
  } catch (err) {
    console.error('Data loading error:', err);
  }

  setupFadeIn();
}

document.addEventListener('DOMContentLoaded', init);
