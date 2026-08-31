---
phase: 7
plan: 1
wave: 1
gap_closure: false
---

# Plan 7.1: Foundation & Hero Redesign

## Objective
Establish the brutalist, terminal-inspired global design system and overhaul the Hero component to match the new aesthetic. This includes updating fonts, global CSS, Tailwind configuration, layout shells, and the Hero.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/tailwind.config.js
- client/src/index.css
- client/index.html
- client/src/components/layout/Layout.jsx
- client/src/components/layout/Navbar.jsx
- client/src/components/sections/Hero.jsx

## Tasks

<task type="auto">
  <name>Setup Brutalist Design System & Fonts</name>
  <files>
    client/index.html
    client/src/index.css
    client/tailwind.config.js
  </files>
  <action>
    Update global styles for a terminal-inspired brutalist theme.
    
    Steps:
    1. In `client/index.html`, add Google Fonts links for `Anton` (or `Bebas Neue`) and `Space Mono`.
    2. In `client/tailwind.config.js`, update the color palette. Set the primary dark background to `#07080c`, and add custom accents for Cyan and Gold/Orange. Configure the newly added fonts.
    3. In `client/src/index.css`, enforce a pitch black background (`#07080c`) and add faint gridlines globally. Remove any glassmorphism or soft shadows.
    
    AVOID: Soft borders and shadows because they break the brutalist aesthetic.
    USE: Strict grid alignments and pitch black background because this matches the target design.
  </action>
  <verify>
    cd client && npm run build && cat tailwind.config.js
  </verify>
  <done>
    Tailwind config reflects the new colors/fonts, and global CSS has gridlines/dark theme without soft shadows.
  </done>
</task>

<task type="auto">
  <name>Redesign Layout and Navbar</name>
  <files>
    client/src/components/layout/Layout.jsx
    client/src/components/layout/Navbar.jsx
  </files>
  <action>
    Overhaul the layout shell for the brutalist style.
    
    Steps:
    1. In `Navbar.jsx`, update the navigation links to use mono-spaced fonts (`Space Mono`). Add glowing indicator dots and strict 1px faint borders.
    2. In `Layout.jsx`, apply strict constraints and wire up the updated styling structure. Remove any non-brutalist paddings or roundings.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Navbar and Layout render correctly with mono-spaced links, faint 1px borders, and a stark brutalist feel.
  </done>
</task>

<task type="auto">
  <name>Overhaul Hero Section</name>
  <files>
    client/src/components/sections/Hero.jsx
  </files>
  <action>
    Update the Hero to match SPEC 00 HERO.
    
    Steps:
    1. Use giant condensed typography (`Anton`) for the name (e.g., "BHAVJOT").
    2. Add the title "FULL STACK DEVELOPER • APPSEC • VAPT" with harsh typography.
    3. Include the dynamic profile photo (`assets/hero.png` or fallback to placeholder) with brutalist borders.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Hero component features giant condensed text, specified job titles, and incorporates the profile photo.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Global styling and Tailwind config are updated.
- [ ] Layout and Navbar are strict and mono-spaced.
- [ ] Hero uses massive typography and includes a profile photo.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in frontend build
