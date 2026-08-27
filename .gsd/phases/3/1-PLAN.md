---
phase: 3
plan: 1
wave: 1
gap_closure: false
depends_on: []
---

# Plan 3.1: Frontend Scaffolding & Design System

## Objective
Set up the React application entry point properly, establish the Tailwind design system suitable for a software engineer portfolio, create the central configuration file with the CV data, and set up the base layout structure.

## Context
Load these files for context:
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- client/package.json

## Tasks

<task type="auto">
  <name>React Entry Cleanup & Setup</name>
  <files>
    client/index.html
    client/src/main.ts
    client/src/main.jsx
    client/src/style.css
    client/src/counter.ts
  </files>
  <action>
    The initial Vite scaffold was slightly off (created main.ts instead of main.jsx). Fix the entry point.
    
    Steps:
    1. Rename `client/src/main.ts` to `client/src/main.jsx` (use `mv` or create new and delete old).
    2. Replace the contents of `main.jsx` to use standard React 18+ `createRoot` rendering the `<App />` component from `App.jsx` inside StrictMode. Import `index.css`.
    3. Update `client/index.html` to point to `<script type="module" src="/src/main.jsx"></script>`.
    4. Delete `client/src/style.css` and `client/src/counter.ts` if they exist.
    
    AVOID: Leaving broken references in `index.html`.
    USE: Standard React entry patterns.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Vite build succeeds without errors related to `main.ts` or missing files.
  </done>
</task>

<task type="auto">
  <name>Tailwind Config & Global Styles</name>
  <files>
    client/tailwind.config.js
    client/src/index.css
  </files>
  <action>
    Establish a modern design system suitable for an AppSec/VAPT focused software engineer, inspired by `sawad.framer.website`.
    
    Steps:
    1. Update `client/tailwind.config.js`:
       - Add custom color palette (e.g., primary accent color, neutral grays for dark mode or clean light mode).
       - Add a modern sans-serif font family (e.g., 'Inter', 'Geist', or system-ui) to `theme.extend.fontFamily`.
    2. Update `client/src/index.css`:
       - Ensure `@tailwind base; @tailwind components; @tailwind utilities;` are present.
       - Set global `body` styles: default background color, text color, and `scroll-behavior: smooth` on `html` for single-page scrolling.
    
    AVOID: Overly complex custom CSS; leverage Tailwind utilities as much as possible.
  </action>
  <verify>
    cd client && npx tailwindcss -i ./src/index.css -o ./dist/output.css
  </verify>
  <done>
    Tailwind CSS compiles successfully with the new configuration.
  </done>
</task>

<task type="auto">
  <name>CV Data Configuration & Base Layout</name>
  <files>
    client/src/config/cvData.js
    client/src/components/layout/Layout.jsx
    client/src/App.jsx
  </files>
  <action>
    Create the central source of truth for the CV data and the base structure for the single-page scroll.
    
    Steps:
    1. Create `client/src/config/cvData.js` and export a constant object containing all CV data from `SPEC.md` (Hero details, Stats, grouped Skills, Experience with achievements, Projects including SportsSphere, Certifications, and Education).
    2. Create `client/src/components/layout/Layout.jsx`: a functional component taking `children` that renders a standard container wrapper (e.g., `max-w-5xl mx-auto px-4`, responsive padding).
    3. Update `client/src/App.jsx` to render `<Layout>` wrapping empty `<section>` blocks with standard `id` attributes matching the portfolio sections: `hero`, `stats`, `skills`, `experience`, `projects`, `certifications`, `education`, `contact`. Add placeholder text in each section.
    
    AVOID: Hardcoding CV data directly in components; always read from `cvData.js`.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    React builds successfully and `cvData.js` contains all the data specified in the SPEC.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] React entry point is `main.jsx` and it works.
- [ ] Tailwind configuration has a defined color palette and typography.
- [ ] `cvData.js` accurately reflects the SPEC.md content.
- [ ] `App.jsx` contains the base single-page scroll sections.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in tests
