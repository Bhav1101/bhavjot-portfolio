---
phase: 8
plan: 2
wave: 2
gap_closure: false
depends_on: [1]
---

# Plan 8.2: Hero & Skills UI Redesign

## Objective
Implement the Terminal Bio in the Hero section and create the interactive, horizontally scrolling Skills marquee with filter headers.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/src/components/sections/Hero.jsx
- client/src/components/sections/Skills.jsx

## Tasks

<task type="auto">
  <name>Terminal Bio in Hero</name>
  <files>
    client/src/components/sections/Hero.jsx
  </files>
  <action>
    Redesign the Hero section to include a Terminal Window element.
    Display the bio (Name, Education, Role, Hobbies, Stack) in a code-styled terminal view, simulating typing or a glowing terminal effect. Ensure it matches the glassmorphic theme.
  </action>
  <verify>
    npm --prefix client run lint
  </verify>
  <done>
    Hero contains a terminal-styled component rendering the bio details.
  </done>
</task>

<task type="auto">
  <name>Skills Marquee with Filters</name>
  <files>
    client/src/components/sections/Skills.jsx
  </files>
  <action>
    Refactor the Skills component into an infinite horizontal scrolling marquee using Framer Motion or CSS animations.
    Add clickable filter headers (Languages, Web Stack, Tools) above the marquee.
    Clicking a header should pause the marquee and statically display the filtered skills.
  </action>
  <verify>
    npm --prefix client run lint
  </verify>
  <done>
    Skills component features a horizontally floating marquee and functional filter headers.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Terminal Bio is present in Hero.
- [ ] Skills marquee floats horizontally and stops/filters on header click.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
