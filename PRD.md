# Product Requirements Document

## Challenge
- Name: Font Hunt — Street Sign Typography Log
- Type: Brawl
- Source: VibeDev street-sign typography challenge

## Problem
Street photographers / typography enthusiasts need a lightweight field log to capture admired lettering in the wild with its vibe, without a backend or image upload.

## Goal
Ship a polished, responsive, accessible single-page app that lets users log, browse (filtered), and delete typography finds with mood and style, persisting to localStorage.

## Target User
Designer / field hunter using phone on the street and desktop for review.

## User Flow
1. Land → header + tag-mapped hero type + log form (top) + filter bar + card grid.
2. Fill form: Nickname (required), Location/Context (required), Style Tag (required radio, 7 options), Mood Note (optional), Date Spotted (required, defaults today) → Add to log.
3. New entry appears immediately in scrollable card grid with style-driven font rendering.
4. Filter bar (All + 7 tags + count) narrows grid; empty states guide user.
5. Delete on card → confirm modal → removes from storage and grid.
6. Reload → state restored from localStorage.

## Required Features
- Log form with validation (required fields, inline errors, today-default date)
- 7 fixed Style Tags: Serif, Sans-Serif, Script, Display, Monospace, Hand-Painted, Other
- Mood note optional (90–180 chars suggested)
- Scrollable card grid (filtered view), filter bar with counts
- Delete with confirmation dialog
- localStorage persistence (CRUD + hydration on load)
- Google Fonts tag→font mapping per spec

## Functional Requirements
- Tag → Font: Serif→Lora, Sans-Serif→Work Sans, Script→Pacifico, Display→Anton, Monospace→Space Mono, Hand-Painted→Permanent Marker, Other→system-ui/Inter
- Card title renders in mapped font; tag chip visible
- Date formatted human-readable, stored ISO (YYYY-MM-DD)
- Counts per tag update live; All count = total
- Empty states: no entries vs no match for filter
- Accessible labels, keyboard operable form/filter/modal, focus trap on confirm
- No backend, no images, client-only

## UX Requirements
- Form above fold, grid below; filter bar sticks on scroll
- Inline validation, disabled submit until valid, success feedback
- Delete confirm prevents accidental loss (cancel/confirm, Esc support)
- Subtle empty-state illustrations / copy that invites first entry

## Responsive Requirements
- Mobile: 1 col; Tablet (640px+): 2 cols; Desktop (1024px+): 3 cols; Wide (1280px+): 4 cols
- Filter bar wraps; header stacks on narrow

## Technical Stack
- Framework: Vite + React 18 + React Router (single route) - normalized from brief
- Language: TypeScript (strict)
- Styling: Tailwind CSS (utility-first, custom tokens)
- Data / API: localStorage (key: font-hunt-entries), Google Fonts via <link>
- Testing: Vitest + Testing Library + jsdom
- Runtime: Node 20+, pnpm/npm

## Technical Constraints
- No backend, no image handling
- Must work offline after load (fonts cached by browser)
- Keep bundle small; single SPA entry

## Acceptance Criteria
- [ ] Can add entry with all fields; appears in grid with correct font
- [ ] Required fields block submit with visible errors
- [ ] Tags filter correctly; counts accurate; All resets
- [ ] Delete requires confirm; cancels and confirms behave correctly
- [ ] Reload restores entries from localStorage
- [ ] Empty → inviting CTA; filtered empty → "No X finds yet" + clear filter
- [ ] Responsive 1/2/3/4 cols verified at 375/768/1024/1440
- [ ] Keyboard: tab through form, filter, cards, modal; Enter/Esc work
- [ ] Google Fonts load and map per tag; Other is neutral
- [ ] Build passes, tests pass

## Out of Scope
- Auth, sharing, export/import, image upload, map view, backend sync
