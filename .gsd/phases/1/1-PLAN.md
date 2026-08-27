---
phase: 1
plan: 1
wave: 1
depends_on: []
gap_closure: false
---

# Plan 1.1: Scaffolding Client and Server Workspaces

## Objective
Initialize the frontend (React + Vite) and backend (Node.js + Express) workspaces, configuring core dependencies and project structures to lay the foundation for the MERN stack portfolio.

## Context
Load these files for context:
- .gsd/SPEC.md
- .gsd/ROADMAP.md

## Tasks

<task type="auto">
  <name>Initialize Client Workspace</name>
  <files>
    client/package.json
    client/vite.config.js
    client/tailwind.config.js
    client/src/App.jsx
  </files>
  <action>
    Initialize the frontend React application using Vite and configure styling.
    
    Steps:
    1. Run `npm create vite@latest client -- --template react` in the root directory.
    2. Navigate into `client/` and install standard dependencies: `npm install`.
    3. Install Tailwind CSS and its peer dependencies (`npm install -D tailwindcss postcss autoprefixer`), then run `npx tailwindcss init -p`.
    4. Install Framer Motion, React Router, and Axios: `npm install framer-motion react-router-dom axios`.
    5. Configure `tailwind.config.js` to scan files (e.g., `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`).
    6. Add Tailwind directives to `client/src/index.css`.
    7. Update `client/src/App.jsx` to be a simple functional component that renders a basic heading with Tailwind classes to confirm styling works.
    
    AVOID: Modifying root-level files outside `client/`.
    USE: The `client/` subdirectory for all frontend configuration.
  </action>
  <verify>
    cd client && npm run build
  </verify>
  <done>
    Build succeeds without errors, and the client directory contains a configured React, Tailwind, and Framer Motion setup.
  </done>
</task>

<task type="auto">
  <name>Initialize Server Workspace</name>
  <files>
    server/package.json
    server/index.js
    server/.env.example
  </files>
  <action>
    Initialize the backend Node.js application and install essential dependencies.
    
    Steps:
    1. Create a `server` directory in the root and initialize it with `npm init -y`.
    2. Add `"type": "module"` to `server/package.json` to enable ES Modules.
    3. Install backend dependencies: `npm install express mongoose cors dotenv`.
    4. Install development dependencies: `npm install -D nodemon`.
    5. Set up `server/index.js` as the entry point with a basic Express app that listens on a port and has a `/api/health` route.
    6. Create `server/.env.example` with placeholders for `PORT` and `MONGO_URI`.
    7. Update `server/package.json` scripts to include `"start": "node index.js"` and `"dev": "nodemon index.js"`.
    
    AVOID: CommonJS `require` syntax.
    USE: ES Modules (`import`/`export`) for backend consistency.
  </action>
  <verify>
    cd server && node -c index.js
  </verify>
  <done>
    The index.js file passes syntax check and package.json contains all required dependencies.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] `client/` React app (Vite + Tailwind + Framer Motion) is initialized.
- [ ] `server/` Node app (Express + Mongoose) is initialized.
- [ ] Project structure and environment variables are set up.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in tests
