---
phase: 7
plan: 2
wave: 2
depends_on:
  - 1
gap_closure: false
---

# Plan 7.2: About, Numbers, and Live Sections

## Objective
Build and integrate the new "About", "Numbers" (Stats), and "Live" (Terminal) sections into the application, following the newly established brutalist aesthetic.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/src/App.jsx
- client/src/components/sections/Stats.jsx

## Tasks

<task type="auto">
  <name>Create About Section</name>
  <files>
    client/src/components/sections/About.jsx
    client/src/App.jsx
  </files>
  <action>
    Implement the 01 ABOUT section per SPEC.
    
    Steps:
    1. Create `About.jsx` featuring a large brutalist header ("BUILDING DIGITAL PRODUCTS FROM SCRATCH" or similar) and a short bio text.
    2. Ensure typography uses the new condensed and mono fonts.
    3. Integrate `About` into `App.jsx` immediately after the `Hero` component.
    
    AVOID: Excessive padding and soft curves.
    USE: Sharp lines and high-contrast text.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    About.jsx is created and imported/rendered in App.jsx.
  </done>
</task>

<task type="auto">
  <name>Overhaul Stats Section</name>
  <files>
    client/src/components/sections/Stats.jsx
    client/src/App.jsx
  </files>
  <action>
    Update the 02 NUMBERS section per SPEC.
    
    Steps:
    1. Redesign `Stats.jsx` into a brutalist 4-column stat grid.
    2. Use harsh mono-spaced typography for numbers and labels (Projects Built, GitHub Repos, Internships, etc.).
    3. Include faint 1px borders to separate columns.
    4. Ensure `Stats` is rendered in `App.jsx` immediately after the `About` component.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Stats.jsx reflects a 4-column brutalist grid and is correctly ordered in App.jsx.
  </done>
</task>

<task type="auto">
  <name>Create Live Terminal Section</name>
  <files>
    client/src/components/sections/Terminal.jsx
    client/src/App.jsx
  </files>
  <action>
    Implement the 03 LIVE section per SPEC.
    
    Steps:
    1. Create `Terminal.jsx` to simulate a terminal console with dummy commands like `> whoami` and `> education`.
    2. Style it with mono-spaced fonts and pitch-black backgrounds, alongside simple stat/Discord cards if applicable.
    3. Integrate `Terminal` into `App.jsx` immediately after the `Stats` component.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Terminal.jsx is created with simulated commands and is correctly ordered in App.jsx.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] About section exists with a large header.
- [ ] Numbers section is a 4-column grid.
- [ ] Live section features a terminal simulation.
- [ ] All sections are placed correctly in `App.jsx`.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in frontend build
