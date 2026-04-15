# Visual Design Direction

## Concept

**Cosmic Career Timeline**

우주 배경 위에 경력과 삶의 사건을 별처럼 배치한다. 연도는 X축의 좌표이고, 사건은 별자리처럼 연결된다. 사용자는 별을 클릭하면서 이준규가 어떤 문제를 만나고 어떤 방식으로 개발자로 성장했는지 탐색한다.

## Visual Mood

Keywords:

- deep space
- quiet confidence
- modern engineering
- readable data
- cinematic but controlled
- exploration
- gradual growth

Avoid:

- 과도한 보라/파랑 그라데이션
- 장식용 구체, bokeh, blob
- 읽기 어려운 과한 글로우
- 포트폴리오 템플릿처럼 보이는 카드 남발
- 모든 섹션을 둥근 카드 안에 넣는 구성

## Color System

Base:

- Background: `#05070d`
- Space blue black: `#0b1020`
- Panel: `rgba(12, 18, 32, 0.72)`
- Border: `rgba(177, 199, 255, 0.22)`
- Text primary: `#f4f7fb`
- Text secondary: `#aab5c8`
- Muted: `#6f7a91`

Accents:

- Career star: `#9bbcff`
- Research star: `#9ff0d0`
- Side project star: `#ffd38a`
- Workflow star: `#f6a6ff`
- Philosophy star: `#ffffff`

Do not let the screen become one-note blue. Use accent colors sparingly on stars, tags, chart lines, and selected states.

## Typography

Preferred direction:

- Korean/English readable sans-serif
- Use system fonts first to keep static page simple

CSS font stack:

```css
font-family: Inter, Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Rules:

- Letter spacing: `0`
- Do not scale font size with viewport width.
- Large hero name can be responsive through breakpoints, not `vw`.
- Body text must remain readable on a dark background.

## Hero Layout

Desktop:

- Full viewport height, but leave a visible hint of the timeline below.
- Top navigation at upper right.
- Name and identity at upper left.
- Profile image at upper right or near navigation area.
- Timeline starts in lower half of first viewport.

Mobile:

- Hero height can be `auto` with min height.
- Profile image becomes smaller and moves near name or below links.
- Timeline becomes vertical and starts after hero copy.

## Timeline Layout

Desktop:

- Horizontal year columns: 2021, 2022, 2023, 2024, 2025, 2026, Upcoming
- Main axis runs left to right.
- Events are placed above and below axis to reduce overlap.
- Each event star has:
  - small glowing node
  - short label
  - optional one-line subtitle

Mobile:

- Vertical timeline.
- Year heading sticky or repeated.
- Event cards stacked, but still visually tied to stars/nodes.

## Detail Panel

Desktop:

- Clicking a star opens a floating panel near the selected event.
- The panel should feel like an instrument readout, not a generic modal.
- Include a close icon button.
- Keep width around `360px - 460px`.

Mobile:

- Detail panel opens as bottom sheet or full-width section below selected event.
- Avoid content overlap.
- Button and close controls must be at least `40px` square.

Panel content order:

1. Type label
2. Title
3. Period
4. Role/stack tags
5. Problem
6. Built
7. Impact
8. Growth note

## Interaction

Required:

- Star hover/focus state
- Star click opens detail
- Keyboard focusable timeline items
- Escape closes detail panel
- Filter buttons for all/career/research/side-project/workflow/philosophy
- Smooth scroll from hero to timeline

Optional:

- Subtle parallax star background
- SVG/canvas starfield
- Timeline line pulse on selected event

Avoid:

- Heavy animation that distracts from reading
- Auto-moving content that makes text hard to inspect
- Hover-only information

## Asset Direction

Profile:

- Use the existing profile photo if available.
- Crop as circle or soft square with no heavy frame.

Background:

- Use a real or generated space image if available.
- If no asset exists, implement CSS/canvas starfield.
- The background must not overpower text.

Project visuals:

- Only use public-safe screenshots/images.
- Internal company systems can use abstract diagrams or text-only readouts.

## Accessibility

- Use semantic buttons for timeline events.
- All clickable stars need `aria-label`.
- Maintain visible focus ring.
- Contrast must be strong on dark background.
- Do not rely on color alone; use type labels.
- Respect `prefers-reduced-motion`.

## Responsive Breakpoints

Suggested:

```css
@media (max-width: 920px) {
  /* tablet layout */
}

@media (max-width: 640px) {
  /* mobile layout */
}
```

## Design QA Checklist

- First viewport shows name, identity, profile, links, and part of timeline.
- Timeline labels do not overlap at desktop width.
- Mobile text does not overflow buttons or panels.
- Detail panel never covers the selected star in an incoherent way.
- Filter controls remain usable on mobile.
- Background still looks intentional if images fail.
