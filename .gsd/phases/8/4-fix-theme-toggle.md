---
phase: 8
plan: 4
wave: 4
gap_closure: true
---

# Plan 8.4: Fix Theme Toggle Override in Layout

## Objective
Fix the main layout background so it respects the light/dark mode toggle. The `Layout.jsx` wrapper hardcodes a dark background (`bg-[#030014]`) and text color (`text-slate-100`), which overrides the theme toggle functionality from `index.css`.

## Context
Load these files for context:
- client/src/components/layout/Layout.jsx
- client/src/index.css

## Tasks

<task type="auto">
  <name>Remove hardcoded dark theme from Layout</name>
  <files>
    client/src/components/layout/Layout.jsx
  </files>
  <action>
    Remove the `bg-[#030014]` and `text-slate-100` classes from the root `div` in `Layout.jsx`.
    Ensure the root `div` relies on the body classes defined in `index.css` for its theme styling, or uses `dark:bg-[#030014] bg-slate-50 text-slate-900 dark:text-slate-100` instead.
  </action>
  <verify>
    npm --prefix client run build
  </verify>
  <done>
    Layout wrapper class no longer forces dark theme across the entire application.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Light/Dark mode toggle works visually across the entire background.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in tests
