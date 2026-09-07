# Design Brief

## Overview
Font Hunt — pocket field notebook for street typography. Should feel like a typographer's desk drawer + gallery: warm, tactile paper, ink, and specimen cards. Not generic dashed-slate SaaS.

## Design Goals
- Immediate legibility of style via type specimen rendering
- Tactile, editorial warmth (paper, ink, muted field colors)
- Fast scan of grid; clear filter affordance
- Polished empty states that invite logging

## Design Principles
- Ink on paper, not glass: off-white paper, deep charcoal ink, single accent (terracotta)
- Specimen first: card title IS the sample
- Minimal chrome, generous whitespace

## Visual Direction
Editorial mono + serif field notebook. Subtle paper texture (CSS noise), thin ruled lines, corner fold hint on cards, rounded-2xl cards with soft shadow. No heavy gradients.

## Typography
- UI: Work Sans (400/600), Inter fallback
- Specimen map: Lora (Serif), Work Sans (Sans-Serif), Pacifico (Script), Anton (Display), Space Mono (Monospace), Permanent Marker (Hand-Painted), system-ui (Other)
- Scale: display 36–48, card title 22–28, body 14–15, label 11 caps
- Hierarchy: specimen title > location > mood > date/tag row

## Color
- Primary (accent): #C45A2A (terracotta) — CTA, active filter
- Ink: #1A1A1E (headings), #2B2B30 (body)
- Surface: #FDFCF8 (paper), #F2F0EB (card/rule), #EAE8E3 (border)
- Muted: #6B6B74 (secondary)
- Tag chips: warm cream with ink border; active = terracotta fill + cream text
- States: focus = terracotta ring

## Layout
- Container: max-w-[1280px], px-4 sm:px-6 lg:px-8
- Grid: 1 col (<640) / 2 cols (640+) / 3 cols (1024+) / 4 cols (1280+), gap-5
- Alignment: left-aligned stack, asymmetric header (title + count + date line)
- Density: airy; cards min-h ~180

## Spacing
4/6/8/12 rhythm. Section py-6–8. Card p-5. Filter gap-2. Form gap-4.

## Components
- Header: logotype with stencil/slab feel, live entry count, thin rule
- Log Form: grouped fields, radio pill tags, inline errors, primary Add button (terracotta)
- Filter Bar: sticky, pill row (All + 7), count badges
- Specimen Card: rounded-2xl, paper surface, subtle border/shadow, title in mapped font, location line, mood italic faint, footer: tag dot + date + delete icon
- Delete Confirm: centered modal, overlay blur, cancel + destructive confirm
- Empty State: dashed paper card with compass/specimen icon, prompt text + anchor to form

## Interaction States
- Loading: not needed (local); keep for font load fallback
- Empty: inviting paper card (no entries) vs filtered empty (filter-specific copy + Clear filter)
- Error: red 600 inline under field, aria-invalid, shake subtle
- Success: toast "Added to field log" (auto-dismiss 2s) — optional polish
- Disabled: Add disabled until valid (50% opacity)
- Focus: 2px terracotta ring, offset

## Responsive Behavior
- <640: single stack, form full-width, filter scroll-x
- 640–1023: 2-col grid, form 2-col inner
- 1024+: 3-col, header side-by-side
- 1280+: 4-col

## Accessibility
- Semantic: header/main/section, form fieldset, ul for grid
- Keyboard: full tab order, filter as radio group, modal focus trap, Esc closes
- Focus: visible ring on all interactive
- Labels: associated labels, aria-describedby for errors
- Contrast: ink on paper ≥ 4.5:1, terracotta on cream ≥ 4.5:1

## Do's
- Let the type specimen dominate the card
- Keep paper warmth consistent
- Round generously (2xl), shadow softly

## Don'ts
- No cool gray dashed empty states
- No blue primary (breaks field notebook)
- No heavy drop shadows or neon
