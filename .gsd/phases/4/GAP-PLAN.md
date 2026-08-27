---
gap_closure: true
---
# Gap Closure Plan for Phase 4

## Issue
The React application fails to build due to a syntax error in client/src/components/sections/Hero.jsx.
Specifically, line 41 contains href={mailto:$email} instead of href={{backtick}mailto:${email}{backtick}}.
This prevents the frontend from rendering and fails the following Must-Haves:
- Hero component displays name, title, bio and links.
- All components from cvData are now rendered in App.jsx in the correct order.
- No regressions in tests (Build check fails).

## Solution
1. Edit client/src/components/sections/Hero.jsx to correct the href attribute for the email link.
2. Run npm run build inside the client directory to confirm that the build succeeds.