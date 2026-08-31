---
phase: 8
plan: 3
wave: 3
gap_closure: false
depends_on: [2]
---

# Plan 8.3: Animations & Max-Width Expansion

## Objective
Expand the overall UI container to a wider setting (`max-w-7xl` or custom width) and inject rich Framer Motion animations across all sections.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/src/components/layout/Layout.jsx
- client/src/components/sections/Experience.jsx
- client/src/components/sections/Projects.jsx
- client/src/components/sections/Certifications.jsx
- client/src/components/sections/Education.jsx
- client/src/components/sections/Contact.jsx

## Tasks

<task type="auto">
  <name>Expand UI Max-Width</name>
  <files>
    client/src/components/layout/Layout.jsx
  </files>
  <action>
    Update the main container classes to expand horizontally (e.g., using `max-w-7xl` or broader width constraints).
    Ensure the layout is responsive and centers content appropriately on large screens.
  </action>
  <verify>
    npm --prefix client run lint
  </verify>
  <done>
    Main application wrapper enforces expanded horizontal width.
  </done>
</task>

<task type="auto">
  <name>Integrate Rich Framer Motion Animations</name>
  <files>
    client/src/components/sections/Experience.jsx
    client/src/components/sections/Projects.jsx
    client/src/components/sections/Certifications.jsx
    client/src/components/sections/Education.jsx
    client/src/components/sections/Contact.jsx
  </files>
  <action>
    Add Framer Motion scroll and entry animations (`initial`, `whileInView`, `viewport`) to these sections.
    Use glassmorphic styling for cards in these sections.
    Ensure smooth, sequential, or staggered entry animations.
  </action>
  <verify>
    npm --prefix client run lint
  </verify>
  <done>
    Framer motion hooks/components are applied to section cards and containers without linter errors.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] UI container uses extended width.
- [ ] Rich Framer Motion animations are present across components.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
