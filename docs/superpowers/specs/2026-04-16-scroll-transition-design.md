# Scroll Transition Portfolio Design

## Goal

Add an Obsidian Assembly-inspired scroll transition experience to the portfolio without depending on project screenshots or photography.

The portfolio should feel like a guided career narrative: each major section takes focus as the user scrolls, and visual emphasis moves between identity, career context, selected work, philosophy, technology, and contact.

## Reference Interpretation

The useful pattern from `https://obsidianassembly.com/` is not the use of photography itself. The stronger pattern is a fixed-feeling stage where scroll progress changes the active content, visual hierarchy, and scene mood.

For this portfolio, the same interaction should be translated into a developer-focused system aesthetic:

- Use section-level transitions instead of image-led scene changes.
- Use project structure, workflow signals, logs, nodes, and data lines as visual material.
- Keep text readable and avoid making the portfolio feel like a landing page with decorative animation.

## Recommended Direction

Use option B as the primary implementation: full-page section transitions across the existing portfolio sections.

The target flow is:

1. Hero
2. About
3. Timeline
4. Selected Work
5. Philosophy
6. Tech Stack
7. Contact

Each section should occupy roughly one viewport on desktop and enough vertical space on mobile. As the user scrolls, the current section becomes the focal layer with opacity, translation, scale, and background tone changes. Adjacent sections should remain discoverable enough that scrolling still feels natural.

## Visual Strategy Without Project Photos

Project visuals will be generated from the meaning of each project rather than external screenshots.

Examples:

- Logistics and manufacturing work: process flows, warehouse/grid lines, status nodes, data routes.
- AI chatbot, MCP, and SSE work: tool-call states, token stream fragments, graph edges, agent step indicators.
- Text-to-SQL research: query snippets, similarity scores, retrieval rows, evaluation matrix shapes.
- Operations and deployment work: pipeline stages, release markers, monitoring-style pulses.

These visuals should be implemented with HTML and CSS first. SVG or canvas can be introduced only if the CSS version cannot express the interaction cleanly.

## Interaction Model

Use lightweight vanilla JavaScript, matching the current static architecture.

The implementation should:

- Track section visibility with `IntersectionObserver`.
- Set an active section state on the document.
- Use CSS custom properties for scroll progress where helpful.
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking. Native scrolling must remain intact.
- Keep keyboard navigation and anchor links working.

## Content Structure

The existing static content should remain the source of truth:

- `index.html` keeps semantic sections and anchor targets.
- `scripts/data.js` remains responsible for profile, timeline, work, philosophy, tech stack, and closing copy.
- `scripts/main.js` renders dynamic data and adds scroll-state behavior.
- `styles.css` owns section staging, transition effects, and visual panels.

The feature should not introduce a framework or build step.

## GitHub Pages Direction

This site should be deployable as a static GitHub Pages site.

Recommended setup:

- Keep `index.html` at the repository root.
- Add `.nojekyll` so GitHub Pages serves the static files directly.
- Add a GitHub Actions Pages workflow that uploads the whole repository root as a static artifact.
- Ignore editor metadata and generated dependency folders.

Publishing still requires a GitHub repository remote and GitHub account authentication.

## Testing

Use the existing Node smoke test style and add checks for:

- Scroll transition hooks in `index.html`.
- Scroll scene styling in `styles.css`.
- Scroll scene initialization in `scripts/main.js`.
- `prefers-reduced-motion` styles.
- GitHub Pages workflow file presence.

Manual browser verification should confirm:

- Sections transition smoothly on desktop.
- Mobile layout remains readable.
- Anchor navigation still lands on the intended sections.
- Reduced-motion mode removes nonessential animation.

## Out Of Scope

- Adding a frontend framework.
- Creating artificial project screenshots.
- Replacing all existing content.
- Heavy scroll-jacking or forced snap behavior that blocks normal scrolling.
- Remote GitHub repository creation without user confirmation of repository name and visibility.
