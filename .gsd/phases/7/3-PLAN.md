---
phase: 7
plan: 3
wave: 3
depends_on:
  - 2
gap_closure: false
---

# Plan 7.3: Projects, Journey, Skills, and Contact Redesign

## Objective
Finalize the redesign by applying the brutalist style to Projects, consolidating Education and Experience into a single "Journey" component, and updating the Skills and Contact sections. Clean up unused files.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/src/App.jsx
- client/src/components/sections/Projects.jsx
- client/src/components/sections/Education.jsx
- client/src/components/sections/Experience.jsx
- client/src/components/sections/Skills.jsx
- client/src/components/sections/Contact.jsx

## Tasks

<task type="auto">
  <name>Redesign Projects Section</name>
  <files>
    client/src/components/sections/Projects.jsx
    client/src/App.jsx
  </files>
  <action>
    Implement the 04 PROJECTS section per SPEC.
    
    Steps:
    1. Update `Projects.jsx` to include a giant text header (e.g., "SYSTEMS THAT FEEL SHARP BEFORE THEY SPEAK").
    2. Apply brutalist styling (faint borders, condensed fonts, stark contrasts) to the project cards.
    3. Ensure it renders correctly in `App.jsx` after the `Terminal` component.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Projects.jsx has the new brutalist headers and card designs.
  </done>
</task>

<task type="auto">
  <name>Create Journey Section</name>
  <files>
    client/src/components/sections/Journey.jsx
    client/src/components/sections/Education.jsx
    client/src/components/sections/Experience.jsx
    client/src/components/sections/Certifications.jsx
    client/src/App.jsx
  </files>
  <action>
    Implement the 05 JOURNEY section per SPEC.
    
    Steps:
    1. Create `Journey.jsx` to replace `Education.jsx`, `Experience.jsx`, and `Certifications.jsx`.
    2. Use a "EDUCATION & WORK-TRAJECTORY ON RECORD" header and a timeline-style brutalist list layout.
    3. Update `App.jsx` to use `Journey` in place of the old components, immediately after `Projects`.
    4. Remove the unused `Education.jsx`, `Experience.jsx`, and `Certifications.jsx` imports from `App.jsx`.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Journey.jsx aggregates the education and work timeline; old components are removed from App.jsx.
  </done>
</task>

<task type="auto">
  <name>Redesign Skills and Contact Sections</name>
  <files>
    client/src/components/sections/Skills.jsx
    client/src/components/sections/Contact.jsx
    client/src/App.jsx
  </files>
  <action>
    Implement the 06 SKILLS and 07 CONTACT sections per SPEC.
    
    Steps:
    1. Redesign `Skills.jsx` into a stark grid of skills with faint borders and mono-spaced fonts.
    2. Redesign `Contact.jsx` to a minimalist dark contact form with simple inputs (Name, Email, Message, Submit) and brutalist borders.
    3. Ensure `Skills` and `Contact` are placed after `Journey` in `App.jsx`.
  </action>
  <verify>
    cd client && npm run lint
  </verify>
  <done>
    Skills.jsx and Contact.jsx match the brutalist aesthetic and complete the page layout in App.jsx.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Projects section features a giant header and brutalist cards.
- [ ] Journey section combines experience and education into a timeline.
- [ ] Skills and Contact forms use minimal, dark brutalist styles.
- [ ] Unused section components are removed from App.jsx.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in frontend build
