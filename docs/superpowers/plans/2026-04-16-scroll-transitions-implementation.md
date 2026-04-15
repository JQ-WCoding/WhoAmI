# Scroll Transitions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add native-scroll section transitions and developer-focused visual panels to the static portfolio.

**Architecture:** Keep the existing static HTML/CSS/vanilla JavaScript architecture. Mark major sections as scroll scenes in `index.html`, style them in `styles.css`, and let `scripts/main.js` manage active scene state, page progress, and per-scene progress with `IntersectionObserver` plus a throttled scroll update.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node smoke tests, GitHub Pages static deployment.

---

## File Structure

- Modify `tests/smoke.test.js`: add regression checks for scroll scene hooks, motion settings, and JavaScript exports.
- Modify `index.html`: add a fixed scroll progress indicator, scene hooks, and decorative system visuals that do not depend on screenshots.
- Modify `styles.css`: add section staging, active/inactive transitions, visual panels, progress indicator, responsive behavior, and reduced-motion behavior.
- Modify `scripts/main.js`: add scroll scene initialization, active scene state, progress custom properties, and public export for test visibility.

## Task 1: Add Failing Smoke Checks

**Files:**

- Modify: `tests/smoke.test.js`

- [ ] **Step 1: Add assertions for the scroll transition contract**

Add checks that require:

```js
[
  "data-scroll-progress",
  "data-scroll-scene",
  "scene-visual",
  "scroll-scene"
].forEach((hook) => assert.ok(html.includes(hook), `index.html should include ${hook}`));

assert.ok(css.includes(".scroll-progress"), "styles.css should style the scroll progress indicator");
assert.ok(css.includes(".scroll-scene.is-active"), "styles.css should style the active scroll scene");
assert.ok(css.includes("@media (prefers-reduced-motion: reduce)"), "styles.css should respect reduced motion");

["initScrollScenes", "updateScrollScenes", "setActiveScrollScene"].forEach((name) => {
  assert.ok(main.includes(name), `main.js should include ${name}`);
});
```

- [ ] **Step 2: Verify the test fails before implementation**

Run:

```bash
node tests/smoke.test.js
```

Expected: failure mentioning `index.html should include data-scroll-progress`.

## Task 2: Add Scroll Scene Markup

**Files:**

- Modify: `index.html`

- [ ] **Step 1: Add a progress indicator**

Add this immediately after `<div class="space-bg" aria-hidden="true"></div>`:

```html
<div class="scroll-progress" data-scroll-progress aria-hidden="true"></div>
```

- [ ] **Step 2: Mark major sections as scroll scenes**

Add `scroll-scene` and `data-scroll-scene` to the existing hero and content sections. Use these scene IDs:

```html
data-scroll-scene="hero"
data-scroll-scene="about"
data-scroll-scene="work"
data-scroll-scene="philosophy"
data-scroll-scene="tech-stack"
data-scroll-scene="contact"
```

- [ ] **Step 3: Add screenshot-free system visuals**

Add one `scene-visual` block to each content section. Each block is `aria-hidden="true"` and uses spans/divs only. The visuals are abstract system signals, not feature explanations.

## Task 3: Add Scroll Scene Styling

**Files:**

- Modify: `styles.css`

- [ ] **Step 1: Style global scroll progress**

Add `.scroll-progress` as a fixed top progress bar using `transform: scaleX(var(--page-scroll, 0))`.

- [ ] **Step 2: Stage sections**

Add `.scroll-scene` styles for viewport-sized rhythm, inactive opacity/scale, active focus, and pseudo-layer grid lines. Keep native scrolling and avoid scroll snapping.

- [ ] **Step 3: Style visual panels**

Add `.scene-visual` variants for about, work, philosophy, tech stack, and contact using grid lines, routes, signal bars, cards, and node rows. Keep them unframed or lightly integrated with each section.

- [ ] **Step 4: Respect reduced motion**

Add a reduced-motion media query that removes animated transitions and transforms while keeping content readable.

## Task 4: Add Scroll Scene JavaScript

**Files:**

- Modify: `scripts/main.js`

- [ ] **Step 1: Add state**

Extend state with:

```js
activeScene: null,
scrollScenes: [],
scrollFrame: null
```

- [ ] **Step 2: Add active scene functions**

Implement:

```js
function setActiveScrollScene(scene) {
  if (!scene || scene === state.activeScene) return;
  state.activeScene = scene;
  state.scrollScenes.forEach((item) => {
    const isActive = item === scene;
    item.classList.toggle("is-active", isActive);
    item.classList.toggle("is-before", !isActive && item.offsetTop < scene.offsetTop);
    item.classList.toggle("is-after", !isActive && item.offsetTop > scene.offsetTop);
  });
}

function updateScrollScenes() {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const pageProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  document.documentElement.style.setProperty("--page-scroll", String(pageProgress));

  const viewportCenter = window.innerHeight / 2;
  let nearest = state.scrollScenes[0] || null;
  let nearestDistance = Number.POSITIVE_INFINITY;

  state.scrollScenes.forEach((scene) => {
    const rect = scene.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
    const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
    scene.style.setProperty("--scene-progress", progress.toFixed(3));
    if (distance < nearestDistance) {
      nearest = scene;
      nearestDistance = distance;
    }
  });

  setActiveScrollScene(nearest);
  state.scrollFrame = null;
}

function initScrollScenes() {
  state.scrollScenes = Array.from(document.querySelectorAll("[data-scroll-scene]"));
  if (state.scrollScenes.length === 0) return;
  state.scrollScenes.forEach((scene) => scene.classList.add("scroll-scene"));
  updateScrollScenes();
}
```

Use `IntersectionObserver` when available. Fall back to immediate class assignment and scroll progress updates when unavailable.

- [ ] **Step 3: Wire startup and exports**

Call `initScrollScenes()` from `init()`, and export the scroll scene functions under `window.portfolioApp`.

## Task 5: Verify, Commit, and Deploy

**Files:**

- Modify: Git history only

- [ ] **Step 1: Verify tests pass**

Run:

```bash
node tests/smoke.test.js
```

Expected: `Smoke checks passed`.

- [ ] **Step 2: Commit the feature branch**

Run:

```bash
git add index.html styles.css scripts/main.js tests/smoke.test.js docs/superpowers/plans/2026-04-16-scroll-transitions-implementation.md
git commit -m "feat: add scroll transition scenes"
```

- [ ] **Step 3: Merge to main and deploy**

After verification, merge `feature/scroll-transitions` into `main`, push `main`, and confirm the GitHub Pages workflow succeeds.
