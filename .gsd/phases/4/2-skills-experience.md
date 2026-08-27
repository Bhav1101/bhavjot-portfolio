---
phase: 4
plan: 2
wave: 2
depends_on:
  - 1
gap_closure: false
---

# Plan 4.2: Skills and Experience Sections

## Objective
Implement the Skills and Experience sections to detail the candidate's technical capabilities and past work history based on the CV data.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/src/config/cvData.js
- client/src/App.jsx

## Tasks

<task type="auto">
  <name>Build Skills Component</name>
  <files>
    client/src/components/sections/Skills.jsx
    client/src/App.jsx
  </files>
  <action>
    Create a component to display categorized skills.
    
    Steps:
    1. Create `client/src/components/sections/Skills.jsx`.
    2. Import `cvData` from `../../config/cvData.js`.
    3. Iterate through `cvData.skills` categories (languages, webStack, tools) and display them in distinct lists or a grid layout.
    4. Render `<Skills />` in `App.jsx` below the Stats section.
    
    USE: Simple, clean semantic lists using Tailwind classes because we are focusing on structure before the final Polish in Phase 5.
  </action>
  <verify>
    npm run lint --prefix client
  </verify>
  <done>
    Skills component successfully maps over and renders the skills object.
  </done>
</task>

<task type="auto">
  <name>Build Experience Component</name>
  <files>
    client/src/components/sections/Experience.jsx
    client/src/App.jsx
  </files>
  <action>
    Create a timeline-style list for the experience segment.
    
    Steps:
    1. Create `client/src/components/sections/Experience.jsx`.
    2. Map over `cvData.experience` to show role, company, period, and an unordered list of achievements.
    3. Render `<Experience />` in `App.jsx` below the Skills section.
  </action>
  <verify>
    npm run lint --prefix client
  </verify>
  <done>
    Experience component renders all achievements and details correctly.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Skills section groups and lists all technical skills.
- [ ] Experience section shows roles and associated achievements accurately.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in tests
