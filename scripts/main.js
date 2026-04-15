(function () {
  const state = {
    activeFilter: "all",
    activeEventId: null,
    activeScene: null,
    scrollScenes: [],
    scrollFrame: null,
    scrollObserver: null
  };

  function getData() {
    return window.portfolioData || {};
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderProfile() {
    const data = getData();
    const headline = document.querySelector("[data-profile='headline']");
    const summary = document.querySelector("[data-profile='summary']");
    const links = document.querySelector("[data-profile='links']");

    if (headline) headline.textContent = data.profile?.headline || "";
    if (summary) summary.textContent = data.profile?.summary || "";

    if (links) {
      links.innerHTML = (data.profile?.links || [])
        .map((link) => {
          return `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`;
        })
        .join("");
    }
  }

  function filterOptions() {
    const data = getData();
    return [
      ["all", "All"],
      ...Object.entries(data.eventTypes || {}).map(([key, value]) => [key, value.label])
    ];
  }

  function renderFilters() {
    const root = document.querySelector("[data-timeline-filters]");
    if (!root) return;

    root.innerHTML = filterOptions()
      .map(([key, label]) => {
        const pressed = key === state.activeFilter ? "true" : "false";
        return `<button type="button" class="filter-btn" data-filter="${escapeHtml(key)}" aria-pressed="${pressed}">${escapeHtml(label)}</button>`;
      })
      .join("");
  }

  function yearsInOrder(events) {
    const years = [];
    events.forEach((event) => {
      if (!years.includes(event.year)) years.push(event.year);
    });
    return years.sort((a, b) => {
      if (a === "Upcoming") return 1;
      if (b === "Upcoming") return -1;
      return String(a).localeCompare(String(b), "ko");
    });
  }

  function visibleEvents() {
    const data = getData();
    const events = data.timelineEvents || [];
    if (state.activeFilter === "all") return events;
    return events.filter((event) => event.type === state.activeFilter);
  }

  function renderTimeline() {
    const data = getData();
    const stage = document.querySelector("[data-timeline-stage]");
    if (!stage) return;

    const allEvents = data.timelineEvents || [];
    const events = visibleEvents();
    const years = yearsInOrder(allEvents);

    const yearEventCounts = {};
    const axis = years
      .map((year, index) => {
        const x = timelineX(index, years.length);
        const isEmpty = !events.some((event) => event.year === year);
        return `
          <span class="timeline-year${isEmpty ? " is-empty" : ""}" style="--x: ${x}%">
            ${escapeHtml(year)}
          </span>
        `;
      })
      .join("");

    const nodes = events
      .map((event) => {
        const yearIndex = years.indexOf(event.year);
        const eventIndex = yearEventCounts[event.year] || 0;
        yearEventCounts[event.year] = eventIndex + 1;
        return renderTimelineButton(event, {
          x: timelineX(yearIndex, years.length),
          y: timelineY(eventIndex),
          labelLeft: yearIndex === 0 ? "0%" : yearIndex === years.length - 1 ? "100%" : "50%",
          labelShift: yearIndex === 0 ? "0%" : yearIndex === years.length - 1 ? "-100%" : "-50%"
        });
      })
      .join("");

    stage.innerHTML = `
      <div class="timeline-axis" aria-hidden="true">${axis}</div>
      <div class="timeline-constellation">
        ${nodes || `<p class="timeline-empty-state">선택한 필터에 해당하는 타임라인이 없습니다.</p>`}
      </div>
    `;

    stage.querySelectorAll("[data-event-id]").forEach((button) => {
      button.addEventListener("click", () => openDetail(button.dataset.eventId));
    });
  }

  function timelineX(index, count) {
    if (count <= 1) return 50;
    return Math.round((8 + index * (84 / (count - 1))) * 100) / 100;
  }

  function timelineY(eventIndex) {
    const stackRows = [44, 35, 53, 26, 62, 17];
    const row = stackRows[eventIndex % stackRows.length];
    const overflowOffset = Math.floor(eventIndex / stackRows.length) * 5;
    return Math.min(76, row + overflowOffset);
  }

  function renderTimelineButton(item, position) {
    const data = getData();
    const type = data.eventTypes?.[item.type] || { label: item.type, accent: "#ffffff" };
    const selectedClass = state.activeEventId === item.id ? " is-selected" : "";

    return `
      <button
        type="button"
        class="timeline-event${selectedClass}"
        data-event-id="${escapeHtml(item.id)}"
        style="--event-color: ${escapeHtml(type.accent)}; --x: ${position.x}%; --y: ${position.y}%; --label-left: ${position.labelLeft}; --label-shift: ${position.labelShift}"
        aria-label="${escapeHtml(item.year)} ${escapeHtml(item.title)} 상세 보기"
      >
        <span class="star-node" aria-hidden="true"></span>
        <span class="cosmic-event-label">
          <span class="event-type">${escapeHtml(type.label)}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.subtitle)}</span>
        </span>
      </button>
    `;
  }

  function openDetail(eventId) {
    const data = getData();
    const item = (data.timelineEvents || []).find((event) => event.id === eventId);
    const panel = document.querySelector("[data-detail-panel]");
    if (!item || !panel) return;

    state.activeEventId = eventId;
    const type = data.eventTypes?.[item.type] || { label: item.type, accent: "#ffffff" };

    panel.hidden = false;
    document.body.classList.add("is-detail-open");
    panel.innerHTML = `
      <button type="button" class="detail-close" aria-label="상세 닫기">×</button>
      <p class="event-type" style="--event-color: ${escapeHtml(type.accent)}">${escapeHtml(type.label)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="detail-period">${escapeHtml(item.period)}</p>
      <p class="detail-role">${escapeHtml(item.role)}</p>
      <div class="tag-list">${(item.stack || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      ${renderDetailSection("Problem", item.problem)}
      ${renderDetailList("Built", item.built)}
      ${renderDetailList("Impact", item.impact)}
      ${renderDetailSection("Growth", item.growth)}
      ${item.source ? `<p class="detail-source">Source: ${escapeHtml(item.source)}</p>` : ""}
    `;

    const close = panel.querySelector(".detail-close");
    if (close) close.addEventListener("click", closeDetail);

    renderTimeline();
  }

  function renderDetailSection(title, body) {
    if (!body) return "";
    return `<section><h4>${escapeHtml(title)}</h4><p>${escapeHtml(body)}</p></section>`;
  }

  function renderDetailList(title, items) {
    if (!items || items.length === 0) return "";
    return `<section><h4>${escapeHtml(title)}</h4><ul>${items.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></section>`;
  }

  function closeDetail() {
    const panel = document.querySelector("[data-detail-panel]");
    state.activeEventId = null;
    document.body.classList.remove("is-detail-open");
    if (!panel) return;

    panel.hidden = true;
    panel.innerHTML = "";
    renderTimeline();
  }

  function renderSelectedWork() {
    const data = getData();
    const root = document.querySelector("[data-selected-work]");
    if (!root) return;

    root.innerHTML = (data.selectedWorks || [])
      .map((work) => {
        return `
          <article class="work-card">
            <div class="work-card-header">
              <p class="eyebrow">${escapeHtml(work.category || "Selected Work")}</p>
              <h3>${escapeHtml(work.title)}</h3>
            </div>
            <p>${escapeHtml(work.meaning)}</p>
            <div class="tag-list">${(work.stack || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
            <dl>
              ${renderDefinition("Problem", work.problem)}
              ${renderDefinition("Build", work.build)}
              ${renderDefinition("Impact", work.impact)}
              ${renderDefinition("Growth", work.growth)}
            </dl>
          </article>
        `;
      })
      .join("");
  }

  function renderDefinition(term, description) {
    if (!description) return "";
    return `<dt>${escapeHtml(term)}</dt><dd>${escapeHtml(description)}</dd>`;
  }

  function renderPhilosophy() {
    const data = getData();
    const root = document.querySelector("[data-philosophy]");
    if (!root) return;

    root.innerHTML = (data.philosophyPillars || [])
      .map((text, index) => {
        return `
          <article class="philosophy-item">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <p>${escapeHtml(text)}</p>
          </article>
        `;
      })
      .join("");
  }

  function renderTechStack() {
    const data = getData();
    const root = document.querySelector("[data-tech-stack]");
    if (!root) return;

    root.innerHTML = (data.techStacks || [])
      .map((group) => {
        return `
          <article class="tech-stack-card">
            <h3>${escapeHtml(group.name || group.label)}</h3>
            <div class="tag-list">${(group.items || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          </article>
        `;
      })
      .join("");
  }

  function renderClosing() {
    const data = getData();
    const root = document.querySelector("[data-closing-copy]");
    if (!root) return;
    root.textContent = data.closing || "";
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function setActiveScrollScene(scene) {
    if (!scene || scene === state.activeScene) return;

    state.activeScene = scene;
    const activeIndex = state.scrollScenes.indexOf(scene);
    const sceneName = scene.dataset.scrollScene || "";

    document.body.dataset.activeScene = sceneName;

    state.scrollScenes.forEach((item, index) => {
      const isActive = item === scene;
      item.classList.toggle("is-active", isActive);
      item.classList.toggle("is-before", !isActive && index < activeIndex);
      item.classList.toggle("is-after", !isActive && index > activeIndex);
    });
  }

  function updateScrollScenes() {
    state.scrollFrame = null;

    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pageProgress = clamp(window.scrollY / maxScroll, 0, 1);
    document.documentElement.style.setProperty("--page-scroll", pageProgress.toFixed(4));

    if (state.scrollScenes.length === 0) return;

    const viewportCenter = window.innerHeight / 2;
    let nearest = state.scrollScenes[0];
    let nearestDistance = Number.POSITIVE_INFINITY;

    state.scrollScenes.forEach((scene) => {
      const rect = scene.getBoundingClientRect();
      const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0, 1);
      const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);

      scene.style.setProperty("--scene-progress", progress.toFixed(3));

      if (distance < nearestDistance) {
        nearest = scene;
        nearestDistance = distance;
      }
    });

    setActiveScrollScene(nearest);
  }

  function requestScrollSceneUpdate() {
    if (state.scrollFrame !== null) return;

    if (typeof window.requestAnimationFrame === "function") {
      state.scrollFrame = window.requestAnimationFrame(updateScrollScenes);
      return;
    }

    updateScrollScenes();
  }

  function initScrollScenes() {
    state.scrollScenes = Array.from(document.querySelectorAll("[data-scroll-scene]"));
    if (state.scrollScenes.length === 0) return;

    state.scrollScenes.forEach((scene) => {
      scene.classList.add("scroll-scene");
      scene.classList.add("is-after");
    });

    if ("IntersectionObserver" in window) {
      state.scrollObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            requestScrollSceneUpdate();
          }
        },
        {
          root: null,
          rootMargin: "-30% 0px -34% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1]
        }
      );

      state.scrollScenes.forEach((scene) => state.scrollObserver.observe(scene));
    }

    window.addEventListener("scroll", requestScrollSceneUpdate, { passive: true });
    window.addEventListener("resize", requestScrollSceneUpdate);
    updateScrollScenes();
  }

  function bindFilters() {
    const root = document.querySelector("[data-timeline-filters]");
    if (!root) return;

    root.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      state.activeFilter = button.dataset.filter || "all";
      closeDetail();
      renderFilters();
      renderTimeline();
    });
  }

  function bindGlobalKeys() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDetail();
    });
  }

  function bindOutsideDetailClicks() {
    document.addEventListener("click", (event) => {
      const target = event.target;
      const panel = document.querySelector("[data-detail-panel]");
      if (!panel || panel.hidden) return;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-detail-panel]")) return;
      if (target.closest("[data-event-id]")) return;

      closeDetail();
    });
  }

  function init() {
    renderProfile();
    renderFilters();
    renderTimeline();
    renderSelectedWork();
    renderPhilosophy();
    renderTechStack();
    renderClosing();
    initScrollScenes();
    bindFilters();
    bindGlobalKeys();
    bindOutsideDetailClicks();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.portfolioApp = {
    renderTimeline,
    openDetail,
    closeDetail,
    renderTechStack,
    initScrollScenes,
    updateScrollScenes,
    setActiveScrollScene
  };
})();
