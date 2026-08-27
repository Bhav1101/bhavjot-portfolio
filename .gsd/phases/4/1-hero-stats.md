---
phase: 4
plan: 1
wave: 1
gap_closure: false
---

# Plan 4.1: Hero and Stats Sections

## Objective
Implement the Hero and Stats sections of the portfolio according to the CV data, providing an impactful introduction and quick highlights.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/src/config/cvData.js
- client/src/App.jsx

## Tasks

<task type="auto">
  <name>Build Hero Component</name>
  <files>
    client/src/components/sections/Hero.jsx
    client/src/App.jsx
  </files>
  <action>
    Create the Hero component using `cvData.hero`.
    
    Steps:
    1. Create `client/src/components/sections/Hero.jsx`.
    2. Import `cvData` from `../../config/cvData.js`.
    3. Build a section that displays the name, title, bio, and provides links to GitHub, LinkedIn, and Email using modern typography (Tailwind text classes).
    4. Update `client/src/App.jsx` to import and render `<Hero />` inside the main layout.
    
    AVOID: Complex animations at this stage because Phase 5 is specifically for styling passes and Framer Motion polishing. Keep it clean and functional.
    USE: Tailwind flex/grid utility classes for responsiveness because it aligns with our stack.
  </action>
  <verify>
    npm run lint --prefix client
  </verify>
  <done>
    Hero section is visible on page with dynamic data from `cvData`.
  </done>
</task>

<task type="auto">
  <name>Build Stats Component</name>
  <files>
    client/src/components/sections/Stats.jsx
    client/src/App.jsx
  </files>
  <action>
    Create the Stats component using `cvData.stats`.
    
    Steps:
    1. Create `client/src/components/sections/Stats.jsx`.
    2. Iterate over `cvData.stats` to render bold statistic blocks (e.g. "6 Months MERN Experience").
    3. Update `client/src/App.jsx` to import and render `<Stats />` right below `<Hero />`.
    
    AVOID: Hardcoding stats because they should be dynamically sourced from `cvData.js`.
  </action>
  <verify>
    npm run lint --prefix client
  </verify>
  <done>
    Stats section renders correctly below the Hero section.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Hero component displays name, title, bio and links.
- [ ] Stats component displays all items from cvData.stats.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in tests
