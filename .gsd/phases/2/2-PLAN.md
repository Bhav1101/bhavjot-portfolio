---
phase: 2
plan: 2
wave: 2
depends_on: [2.1]
gap_closure: false
---

# Plan 2.2: Core Data Endpoints

## Objective
Implement controllers and routes to serve portfolio data (Projects, Experience, Skills, Certifications, Education) to the frontend client.

## Context
Load these files for context:
- .gsd/SPEC.md
- server/index.js
- server/models/Project.js

## Tasks

<task type="auto">
  <name>Create Portfolio Controllers</name>
  <files>
    server/controllers/portfolioController.js
  </files>
  <action>
    Implement GET handlers for all static content collections.
    
    Steps:
    1. Import the models (Project, Experience, Skill, Certification, Education).
    2. Write async functions `getProjects`, `getExperience`, `getSkills`, `getCertifications`, `getEducation` that fetch data from MongoDB, sorting by `order` field ascending.
    3. Export all functions.
    
    USE: `try/catch` blocks for robust error handling. Send a 500 status on database error.
  </action>
  <verify>
    Run `cd server && node -e "import('./controllers/portfolioController.js').then(m => console.log(Object.keys(m)))"`
  </verify>
  <done>
    All GET handlers are defined and exported correctly.
  </done>
</task>

<task type="auto">
  <name>Create Routes and Integrate in App</name>
  <files>
    server/routes/portfolioRoutes.js
    server/index.js
  </files>
  <action>
    Define the Express routes for the portfolio data and mount them in the server.
    
    Steps:
    1. Create `portfolioRoutes.js`, import Express router and all functions from `portfolioController.js`.
    2. Define routes: `GET /projects`, `GET /experience`, `GET /skills`, `GET /certifications`, `GET /education`.
    3. Import the routes module in `server/index.js` and mount it at `/api` (e.g., `app.use('/api', portfolioRoutes);`).
  </action>
  <verify>
    Ensure `server/index.js` still parses correctly: `cd server && node -c index.js`
  </verify>
  <done>
    Endpoints are mapped and integrated into the app router.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] `GET /api/projects` functions correctly
- [ ] `GET /api/experience` functions correctly
- [ ] `GET /api/skills` functions correctly
- [ ] `GET /api/certifications` functions correctly
- [ ] `GET /api/education` functions correctly

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] Server runs without routing errors
