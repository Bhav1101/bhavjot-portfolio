---
phase: 4
plan: 3
wave: 2
depends_on:
  - 1
gap_closure: false
---

# Plan 4.3: Projects, Certifications, and Education Sections

## Objective
Implement the final static content sections (Projects, Certifications, and Education) to complete the rendering of hardcoded CV data.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/src/config/cvData.js
- client/src/App.jsx

## Tasks

<task type="auto">
  <name>Build Projects Component</name>
  <files>
    client/src/components/sections/Projects.jsx
    client/src/App.jsx
  </files>
  <action>
    Create a card-based project grid.
    
    Steps:
    1. Create `client/src/components/sections/Projects.jsx`.
    2. Map over `cvData.projects` and render title, description, tech stack tags, and links (live URL, GitHub).
    3. Mount `<Projects />` in `App.jsx` below the Experience section.
  </action>
  <verify>
    npm run lint --prefix client
  </verify>
  <done>
    Projects grid renders fully with functional external links.
  </done>
</task>

<task type="auto">
  <name>Build Certifications and Education Components</name>
  <files>
    client/src/components/sections/Certifications.jsx
    client/src/components/sections/Education.jsx
    client/src/App.jsx
  </files>
  <action>
    Implement sections for both certs and education degrees.
    
    Steps:
    1. Create `client/src/components/sections/Certifications.jsx` using `cvData.certifications`.
    2. Create `client/src/components/sections/Education.jsx` using `cvData.education`.
    3. Mount `<Certifications />` and `<Education />` in `App.jsx` below the Projects section.
  </action>
  <verify>
    npm run lint --prefix client
  </verify>
  <done>
    Both components map over data without errors and are visible on the page.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Projects display description, tech used, and URLs.
- [ ] Certifications and Education details are present and accurate.
- [ ] All components from cvData are now rendered in `App.jsx` in the correct order.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in tests
