---
phase: 8
plan: 1
wave: 1
gap_closure: false
depends_on: []
---

# Plan 8.1: Theme and Layout Foundation

## Objective
Establish the glassmorphism UI base and introduce a dark/light mode toggle. This provides the structural foundation for the redesign.

## Context
Load these files for context:
- .gsd/SPEC.md
- client/tailwind.config.js
- client/src/index.css
- client/src/App.jsx
- client/src/components/layout/Navbar.jsx

## Tasks

<task type="auto">
  <name>Setup Glassmorphism & Theme Styles</name>
  <files>
    client/tailwind.config.js
    client/src/index.css
  </files>
  <action>
    Configure Tailwind for Dark mode (class strategy).
    Define global CSS variables and classes in index.css for the glassmorphism effect (backdrop-blur, semi-transparent backgrounds with borders) for both light and dark themes.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Tailwind config builds successfully and glassmorphism utility classes are available.
  </done>
</task>

<task type="auto">
  <name>Implement Theme Toggle in Navbar</name>
  <files>
    client/src/App.jsx
    client/src/components/layout/Navbar.jsx
  </files>
  <action>
    Add a theme state (dark/light) in the application (via Context or simple state in App and passing down).
    Update the Navbar component to include a toggle button (e.g., Sun/Moon icon).
    Apply the glassmorphism styling to the Navbar.
  </action>
  <verify>
    npm --prefix client run lint
  </verify>
  <done>
    Navbar includes a theme toggle and toggles a 'dark' class on the document root or body.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Glassmorphism base is styled.
- [ ] Light/Dark mode toggle works.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
