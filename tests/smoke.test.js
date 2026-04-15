const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assertFile(relativePath) {
  assert.ok(fs.existsSync(path.join(root, relativePath)), `${relativePath} should exist`);
}

assertFile("index.html");
assertFile("styles.css");
assertFile("scripts/data.js");
assertFile("scripts/main.js");
assertFile("assets/space-background.png");

const html = read("index.html");
[
  "career-universe",
  "data-career-map",
  "data-profile=\"headline\"",
  "data-profile=\"summary\"",
  "data-profile=\"links\"",
  "data-timeline-filters",
  "data-timeline-stage",
  "data-detail-panel",
  "data-selected-work",
  "data-philosophy",
  "data-tech-stack",
  "data-closing-copy"
].forEach((hook) => assert.ok(html.includes(hook), `index.html should include ${hook}`));

assert.ok(
  html.indexOf("data-career-map") > html.indexOf("id=\"hero\""),
  "career map should render inside the first hero viewport"
);
assert.ok(
  html.indexOf("id=\"about\"") > html.indexOf("data-career-map"),
  "about section should come after the first-screen career map"
);

const localAssetRefs = [...html.matchAll(/(?:src|href)="\.\/(assets\/[^"]+)"/g)].map((match) => match[1]);
localAssetRefs.forEach((assetPath) => assertFile(assetPath));

const css = read("styles.css");
assert.ok(
  css.includes("./assets/space-background.png"),
  "styles.css should use the saved galaxy background asset"
);
assert.ok(css.includes(".career-universe"), "styles.css should style the first-screen career universe");

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(read("scripts/data.js"), sandbox, { filename: "scripts/data.js" });

const data = sandbox.window.portfolioData;
assert.ok(data, "window.portfolioData should be defined");
assert.equal(data.profile.name, "이준규");
assert.ok(data.profile.links.some((link) => link.href.includes("junq2021.tistory.com")));
assert.ok(data.profile.links.some((link) => link.href.includes("github.com/JQ-WCoding")));

assert.ok(Array.isArray(data.timelineEvents), "timelineEvents should be an array");
assert.ok(data.timelineEvents.length >= 10, "timeline should include at least 10 events");

const eventTypes = new Set(data.timelineEvents.map((event) => event.type));
["career", "research", "side-project", "philosophy"].forEach((type) => {
  assert.ok(eventTypes.has(type), `timeline should include ${type} events`);
});
assert.ok(!eventTypes.has("workflow"), "workflow work should be folded into white career nodes");

assert.equal(data.eventTypes.career.accent, "#ffffff", "career/work nodes should render white");
assert.equal(data.eventTypes.workflow, undefined, "workflow should not render as a separate filter/color");
assert.equal(data.eventTypes.research.accent, "#9ff0d0", "school and paper research node should render green");
assert.equal(data.eventTypes["side-project"].accent, "#ffd38a", "side project node should render yellow");
assert.equal(data.eventTypes.philosophy.accent, "#f6a6ff", "Upcoming node should be the pink node");

assert.ok(
  data.timelineEvents.some((event) => event.year === "2025" && event.type === "side-project"),
  "side projects should be integrated into the year-based timeline"
);
assert.ok(
  data.timelineEvents.some((event) => event.year === "2026" && event.type === "research"),
  "research should be integrated into the year-based timeline"
);
assert.equal(
  data.timelineEvents.filter((event) => event.type === "research").length,
  1,
  "school and paper should be merged into one research node"
);
assert.ok(
  data.timelineEvents.some((event) => {
    return event.year === "2026" && event.type === "research" && event.title.includes("Text-to-SQL") && event.title.includes("대학원");
  }),
  "merged research node should combine graduate school and Text-to-SQL paper"
);
assert.ok(
  data.timelineEvents.some((event) => event.year === "Upcoming" && event.type === "philosophy"),
  "Upcoming should keep the pink philosophy node"
);
assert.ok(
  data.closing.includes("변화하는 세상") && data.closing.includes("점진적으로 성장"),
  "closing should reflect continuous exploration and gradual growth"
);
assert.ok(data.techStacks.every((group) => group.label && group.items.length > 0), "tech stack groups should have labels and items");

const main = read("scripts/main.js");
["renderTimeline", "openDetail", "closeDetail", "renderTechStack"].forEach((name) => {
  assert.ok(main.includes(name), `main.js should include ${name}`);
});
assert.ok(main.includes("group.name || group.label"), "main.js should render tech stack labels from data");
assert.ok(
  main.includes("function timelineY(eventIndex)") && main.includes("stackRows[eventIndex % stackRows.length]"),
  "timeline dots should use a consistent stack row per event index"
);
assert.ok(main.includes("bindOutsideDetailClicks"), "detail panel should bind outside-click dismissal");
assert.ok(
  main.includes("document.body.classList.add(\"is-detail-open\")") && main.includes("document.body.classList.remove(\"is-detail-open\")"),
  "detail panel should toggle a body class while open"
);
assert.ok(
  main.includes("target.closest(\"[data-detail-panel]\")") && main.includes("target.closest(\"[data-event-id]\")"),
  "outside-click dismissal should ignore clicks inside the detail panel or on timeline nodes"
);
assert.ok(
  css.includes(".detail-panel .detail-close") && css.includes("left: 0.65rem") && css.includes("top: 0.65rem"),
  "detail close button should sit closer to the upper-left corner"
);
assert.ok(
  !css.includes(".timeline-event.is-selected .cosmic-event-label"),
  "selected timeline nodes should not keep the brief label open behind the detail panel"
);
assert.ok(
  css.includes("body.is-detail-open .career-universe::after") && css.includes("backdrop-filter: blur(10px)"),
  "opening the detail panel should blur and dim the career universe behind it"
);
assert.ok(
  /body\.is-detail-open\s*\{[^}]*overflow:\s*hidden/.test(css),
  "opening the detail panel should lock page scrolling"
);
assert.ok(
  css.includes("body.is-detail-open .hero-identity") && css.includes("body.is-detail-open .career-map") && css.includes("z-index: auto"),
  "detail panel should escape the blurred background stacking context while open"
);
assert.ok(
  css.includes("position: fixed") && css.includes("width: min(760px, calc(100vw - 2rem))") && css.includes("min-height: 50svh"),
  "detail panel should be a large centered modal that can occupy about half the viewport"
);

console.log("Smoke checks passed");
