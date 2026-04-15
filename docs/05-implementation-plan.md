# Cosmic Career Timeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a serverless static HTML portfolio that presents Lee Jun Kyu's life and developer story as a cosmic career timeline.

**Architecture:** Use plain `index.html`, `styles.css`, `scripts/data.js`, and `scripts/main.js` so the site can be opened directly in a browser without a dev server. Store all content in a static JS data object, render timeline events dynamically, and use a detail panel for selected events.

**Tech Stack:** HTML, CSS, vanilla JavaScript, static assets, local browser verification.

---

## File Structure

Create these files:

- `index.html`: semantic page shell, navigation, root containers
- `styles.css`: full visual system, responsive layout, timeline, detail panel, accessibility states
- `scripts/data.js`: profile, timeline, selected works, philosophy, tech stack data
- `scripts/main.js`: rendering, filtering, detail panel, keyboard interactions
- `assets/`: profile image and optional background/project images

Do not add a package manager unless the implementation chooses a framework later. The first version should run by opening `index.html`.

## Task 1: Scaffold Static Page

**Files:**

- Create: `index.html`
- Create: `styles.css`
- Create: `scripts/data.js`
- Create: `scripts/main.js`
- Create directory: `assets/`
- Create directory: `scripts/`

- [ ] **Step 1: Create directories**

Run:

```bash
mkdir -p scripts assets
```

Expected: `scripts` and `assets` exist in `/Users/junq/IdeaProjects/portfolio-web`.

- [ ] **Step 2: Create `index.html`**

Use this structure:

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>이준규 | Cosmic Career Timeline</title>
  <meta name="description" content="현실의 복잡한 문제를 시스템과 workflow로 바꾸며 점진적으로 성장하는 개발자 이준규의 포트폴리오">
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <div class="space-bg" aria-hidden="true"></div>

  <header class="site-header">
    <a class="brand" href="#hero" aria-label="이준규 포트폴리오 홈">이준규</a>
    <nav class="top-nav" aria-label="Primary navigation">
      <a href="#about">About Me</a>
      <a href="#timeline">Timeline</a>
      <a href="#work">Work</a>
      <a href="#philosophy">Philosophy</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="hero" class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Developer Portfolio</p>
        <h1 id="hero-title">이준규</h1>
        <p class="hero-headline" data-profile="headline"></p>
        <p class="hero-summary" data-profile="summary"></p>
        <div class="hero-links" data-profile="links"></div>
      </div>
      <figure class="profile-orbit">
        <img src="./assets/profile.jpg" alt="이준규 프로필 사진" onerror="this.parentElement.classList.add('is-placeholder'); this.remove();">
      </figure>
    </section>

    <section id="timeline" class="timeline-section" aria-labelledby="timeline-title">
      <div class="section-heading">
        <p class="eyebrow">Life & Career Timeline</p>
        <h2 id="timeline-title">삶과 커리어가 이어진 궤적</h2>
      </div>
      <div class="timeline-filters" data-timeline-filters aria-label="Timeline filters"></div>
      <div class="timeline-stage" data-timeline-stage></div>
      <aside class="detail-panel" data-detail-panel aria-live="polite" hidden></aside>
    </section>

    <section id="about" class="about-section" aria-labelledby="about-title">
      <div class="section-heading">
        <p class="eyebrow">About Me</p>
        <h2 id="about-title">복잡한 현실을 구조화하는 개발자</h2>
      </div>
      <p>
        물류와 제조 도메인에서 시작해 운영 안정화, 데이터 흐름, UI/UX, 연구, AI Agent workflow까지 확장해왔습니다.
      </p>
    </section>

    <section id="work" class="work-section" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="eyebrow">Selected Work</p>
        <h2 id="work-title">문제가 시스템이 된 순간들</h2>
      </div>
      <div class="work-grid" data-selected-work></div>
    </section>

    <section id="philosophy" class="philosophy-section" aria-labelledby="philosophy-title">
      <div class="section-heading">
        <p class="eyebrow">Developer Philosophy</p>
        <h2 id="philosophy-title">제가 문제를 바라보는 방식</h2>
      </div>
      <div class="philosophy-grid" data-philosophy></div>
    </section>

    <section id="contact" class="closing-section" aria-labelledby="closing-title">
      <div class="section-heading">
        <p class="eyebrow">Closing</p>
        <h2 id="closing-title">계속 탐구하며 점진적으로 성장합니다</h2>
      </div>
      <p data-closing-copy></p>
    </section>
  </main>

  <script src="./scripts/data.js"></script>
  <script src="./scripts/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Verify browser load**

Open `index.html` directly in a browser.

Expected: no server is required; the page loads with unstyled or minimally styled content before later tasks.

## Task 2: Add Static Data

**Files:**

- Modify: `scripts/data.js`

- [ ] **Step 1: Add `window.portfolioData`**

Use the dataset shape from `docs/04-data-model.md`. Include:

- `profile`
- `eventTypes`
- `timelineEvents`
- `selectedWorks`
- `philosophyPillars`
- `techStacks`
- `closing`

Minimum implementation:

```js
window.portfolioData = {
  profile: {
    name: "이준규",
    headline: "현실의 복잡한 문제를 시스템과 workflow로 바꾸는 개발자",
    summary: "물류와 제조 현장에서 시작해 운영 안정화, 데이터 흐름, AI Agent workflow까지 탐구하며 점진적으로 성장하고 있습니다.",
    links: [
      { label: "Blog", href: "https://junq2021.tistory.com/" },
      { label: "GitHub", href: "https://github.com/JQ-WCoding" }
    ]
  },
  eventTypes: {
    career: { label: "Career", accent: "#9bbcff" },
    research: { label: "Research", accent: "#9ff0d0" },
    "side-project": { label: "Side Project", accent: "#ffd38a" },
    workflow: { label: "Workflow", accent: "#f6a6ff" },
    philosophy: { label: "Philosophy", accent: "#ffffff" }
  },
  timelineEvents: [],
  selectedWorks: [],
  philosophyPillars: [
    "현실의 복잡도를 먼저 이해합니다.",
    "프로세스와 데이터 흐름으로 구조화합니다.",
    "운영 안정성과 사용자 경험을 함께 봅니다.",
    "문서와 규칙으로 팀이 다시 쓸 수 있는 기준을 남깁니다.",
    "AI를 기능이 아니라 workflow로 연결합니다."
  ],
  techStacks: [],
  closing: "저는 변화하는 세상을 계속 탐구하면서, 경험을 구조화하고 다음 문제를 풀 수 있는 방식으로 조금씩 성장하고 있습니다. 지금까지의 경력은 하나의 완성된 결론이라기보다, 더 복잡한 현실을 더 나은 시스템과 workflow로 바꿔가기 위한 과정입니다."
};
```

- [ ] **Step 2: Fill `timelineEvents`**

Copy the full initial dataset from `docs/04-data-model.md`.

Expected: timeline includes career, research, side-project, workflow, and philosophy events on the same year axis.

## Task 3: Render Content

**Files:**

- Modify: `scripts/main.js`

- [ ] **Step 1: Implement startup**

```js
const data = window.portfolioData;
let activeFilter = "all";
let activeEventId = null;

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderFilters();
  renderTimeline();
  renderSelectedWork();
  renderPhilosophy();
  renderClosing();
  bindGlobalKeys();
});
```

- [ ] **Step 2: Render profile**

```js
function renderProfile() {
  document.querySelector("[data-profile='headline']").textContent = data.profile.headline;
  document.querySelector("[data-profile='summary']").textContent = data.profile.summary;

  const links = document.querySelector("[data-profile='links']");
  links.innerHTML = data.profile.links
    .map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");
}
```

- [ ] **Step 3: Render filters**

```js
function renderFilters() {
  const filters = document.querySelector("[data-timeline-filters]");
  const options = [
    ["all", "All"],
    ...Object.entries(data.eventTypes).map(([key, value]) => [key, value.label])
  ];

  filters.innerHTML = options
    .map(([key, label]) => `<button type="button" class="filter-btn" data-filter="${key}" aria-pressed="${key === activeFilter}">${label}</button>`)
    .join("");

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    activeEventId = null;
    closeDetail();
    renderFilters();
    renderTimeline();
  });
}
```

- [ ] **Step 4: Render timeline**

```js
function renderTimeline() {
  const stage = document.querySelector("[data-timeline-stage]");
  const events = data.timelineEvents.filter((item) => activeFilter === "all" || item.type === activeFilter);
  const years = [...new Set(data.timelineEvents.map((item) => item.year))];

  stage.innerHTML = years
    .map((year) => {
      const yearEvents = events.filter((item) => item.year === year);
      return `
        <section class="timeline-year" aria-label="${year}">
          <h3>${year}</h3>
          <div class="event-stack">
            ${yearEvents.map(renderTimelineButton).join("")}
          </div>
        </section>
      `;
    })
    .join("");

  stage.querySelectorAll("[data-event-id]").forEach((button) => {
    button.addEventListener("click", () => openDetail(button.dataset.eventId));
  });
}

function renderTimelineButton(item) {
  const type = data.eventTypes[item.type];
  return `
    <button type="button" class="timeline-event" data-event-id="${item.id}" style="--event-color: ${type.accent}" aria-label="${item.year} ${item.title} 상세 보기">
      <span class="star-node" aria-hidden="true"></span>
      <span class="event-type">${type.label}</span>
      <strong>${item.title}</strong>
      <span>${item.subtitle}</span>
    </button>
  `;
}
```

- [ ] **Step 5: Render detail panel**

```js
function openDetail(eventId) {
  activeEventId = eventId;
  const item = data.timelineEvents.find((event) => event.id === eventId);
  const panel = document.querySelector("[data-detail-panel]");
  const type = data.eventTypes[item.type];

  panel.hidden = false;
  panel.innerHTML = `
    <button type="button" class="detail-close" aria-label="상세 닫기">×</button>
    <p class="event-type" style="--event-color: ${type.accent}">${type.label}</p>
    <h3>${item.title}</h3>
    <p class="detail-period">${item.period}</p>
    <p class="detail-role">${item.role}</p>
    <div class="tag-list">${item.stack.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <section><h4>Problem</h4><p>${item.problem}</p></section>
    <section><h4>Built</h4><ul>${item.built.map((text) => `<li>${text}</li>`).join("")}</ul></section>
    <section><h4>Impact</h4><ul>${item.impact.map((text) => `<li>${text}</li>`).join("")}</ul></section>
    <section><h4>Growth</h4><p>${item.growth}</p></section>
  `;

  panel.querySelector(".detail-close").addEventListener("click", closeDetail);
}

function closeDetail() {
  const panel = document.querySelector("[data-detail-panel]");
  panel.hidden = true;
  panel.innerHTML = "";
}
```

- [ ] **Step 6: Render remaining sections**

```js
function renderSelectedWork() {
  const root = document.querySelector("[data-selected-work]");
  root.innerHTML = data.selectedWorks
    .map((work) => `
      <article class="work-card">
        <h3>${work.title}</h3>
        <p>${work.meaning}</p>
        <div class="tag-list">${work.stack.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <dl>
          <dt>Problem</dt><dd>${work.problem}</dd>
          <dt>Build</dt><dd>${work.build}</dd>
          <dt>Impact</dt><dd>${work.impact}</dd>
          <dt>Growth</dt><dd>${work.growth}</dd>
        </dl>
      </article>
    `)
    .join("");
}

function renderPhilosophy() {
  const root = document.querySelector("[data-philosophy]");
  root.innerHTML = data.philosophyPillars
    .map((text, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${text}</p></article>`)
    .join("");
}

function renderClosing() {
  document.querySelector("[data-closing-copy]").textContent = data.closing;
}

function bindGlobalKeys() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetail();
  });
}
```

- [ ] **Step 7: Verify rendering**

Open `index.html`.

Expected:

- Hero copy appears.
- Timeline filter buttons appear.
- Timeline events render.
- Clicking an event opens detail panel.
- Escape closes detail panel.

## Task 4: Add Visual System

**Files:**

- Modify: `styles.css`

- [ ] **Step 1: Add base CSS**

```css
:root {
  --bg: #05070d;
  --bg-soft: #0b1020;
  --panel: rgba(12, 18, 32, 0.72);
  --border: rgba(177, 199, 255, 0.22);
  --text: #f4f7fb;
  --text-soft: #aab5c8;
  --muted: #6f7a91;
  --career: #9bbcff;
  --research: #9ff0d0;
  --side: #ffd38a;
  --workflow: #f6a6ff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--text);
  background: var(--bg);
  font-family: Inter, Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0;
}

a {
  color: inherit;
}

button {
  font: inherit;
}
```

- [ ] **Step 2: Add starfield background**

```css
.space-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 20% 20%, rgba(155, 188, 255, 0.28), transparent 22%),
    radial-gradient(circle at 72% 18%, rgba(159, 240, 208, 0.14), transparent 18%),
    radial-gradient(circle at 58% 62%, rgba(246, 166, 255, 0.12), transparent 24%),
    linear-gradient(180deg, #03050a 0%, #08101d 48%, #05070d 100%);
}

.space-bg::before,
.space-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.85) 0 1px, transparent 1.5px),
    radial-gradient(circle, rgba(155,188,255,0.65) 0 1px, transparent 1.5px);
  background-size: 120px 120px, 180px 180px;
  background-position: 0 0, 34px 58px;
  opacity: 0.42;
}
```

- [ ] **Step 3: Style layout**

Implement:

- fixed header with transparent background
- hero as first viewport with timeline hint
- section max width around `1180px`
- timeline stage as grid columns on desktop
- detail panel with translucent background and readable text
- cards only for repeated items and detail surfaces

- [ ] **Step 4: Add responsive CSS**

At `max-width: 920px`:

- reduce hero spacing
- timeline columns can wrap
- detail panel becomes normal block or bottom sheet

At `max-width: 640px`:

- nav becomes compact
- timeline becomes vertical
- event buttons become full width
- text sizes use fixed breakpoints, not viewport units

- [ ] **Step 5: Add accessibility states**

Include:

```css
:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Task 5: Content Completion

**Files:**

- Modify: `scripts/data.js`
- Reference: `docs/06-copy-draft.md`

- [ ] **Step 1: Fill `selectedWorks`**

Include:

- 제조향 AI 챗봇 시스템
- 비전 검사 포털
- CJ제일제당 제조솔루션 전환
- 한살림 물류 시스템
- Taily Storii
- Text-to-SQL 연구

- [ ] **Step 2: Fill `techStacks`**

Use groups from `docs/02-content-architecture.md`.

- [ ] **Step 3: Review copy tone**

Check:

- Closing says continuous exploration and gradual growth.
- Side project and research are integrated into year-based timeline.
- No project claims more than the source documents support.

## Task 6: Local Verification

**Files:**

- Verify all created files

- [ ] **Step 1: List files**

Run:

```bash
find . -maxdepth 3 -type f | sort
```

Expected includes:

```text
./docs/00-overview.md
./docs/01-reference-map.md
./docs/02-content-architecture.md
./docs/03-visual-design-direction.md
./docs/04-data-model.md
./docs/05-implementation-plan.md
./docs/06-copy-draft.md
./index.html
./scripts/data.js
./scripts/main.js
./styles.css
```

- [ ] **Step 2: Check JavaScript syntax**

Run:

```bash
node --check scripts/data.js
node --check scripts/main.js
```

Expected: both commands exit with code `0`.

- [ ] **Step 3: Open static HTML**

Open:

```text
/Users/junq/IdeaProjects/portfolio-web/index.html
```

Expected:

- Page opens without a server.
- Timeline events render.
- Filters work.
- Detail panel opens and closes.
- Mobile viewport has no text overlap.
