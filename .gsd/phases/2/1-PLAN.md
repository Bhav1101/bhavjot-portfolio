---
phase: 2
plan: 1
wave: 1
gap_closure: false
---

# Plan 2.1: Database Connection and Models

## Objective
Set up the MongoDB connection via Mongoose and define all database schemas according to the specifications to store portfolio content.

## Context
Load these files for context:
- .gsd/SPEC.md
- server/index.js
- server/.env.example

## Tasks

<task type="auto">
  <name>Configure MongoDB Connection</name>
  <files>
    server/config/db.js
    server/index.js
    server/.env.example
  </files>
  <action>
    Create a robust database connection module using Mongoose.
    
    Steps:
    1. Create `server/config/db.js` that exports a `connectDB` async function connecting to `process.env.MONGO_URI`.
    2. Add `MONGO_URI=` to `server/.env.example` as a placeholder.
    3. Import and call `connectDB()` inside `server/index.js` before starting the express app.
    
    AVOID: Hardcoding the connection string.
    USE: `process.env.MONGO_URI`.
  </action>
  <verify>
    Run `cd server && node -e "import('./config/db.js').then(m => console.log('ok'))"`
  </verify>
  <done>
    MongoDB connection utility successfully established and integrated into server startup.
  </done>
</task>

<task type="auto">
  <name>Create Core Models (Project, Experience, Skill)</name>
  <files>
    server/models/Project.js
    server/models/Experience.js
    server/models/Skill.js
  </files>
  <action>
    Define Mongoose schemas for the primary CV sections.
    
    Steps:
    1. Create `Project.js`: title, description, techs (array of strings), liveUrl, githubUrl, imageUrl, order (number).
    2. Create `Experience.js`: role, company, duration, achievements (array of strings), order (number).
    3. Create `Skill.js`: category (e.g., 'Languages', 'Web Stack', 'Tools'), name, icon (optional string), order (number).
    
    AVOID: Overcomplicating schema data types. Keep them simple and matching the SPEC.
    USE: ES modules (import/export). `server/package.json` specifies `"type": "module"`.
  </action>
  <verify>
    Run `cd server && node -e "import('./models/Project.js').then(m => console.log(m.default.modelName))"`
  </verify>
  <done>
    Models are exported correctly and ready to be used by controllers.
  </done>
</task>

<task type="auto">
  <name>Create Remaining Models</name>
  <files>
    server/models/Certification.js
    server/models/Education.js
    server/models/ContactMessage.js
  </files>
  <action>
    Define the rest of the schemas based on the SPEC.
    
    Steps:
    1. `Certification.js`: name, issuer, duration, url (optional), order.
    2. `Education.js`: degree, institution, duration, cgpa (or score), order.
    3. `ContactMessage.js`: name, email, budget, message, createdAt (Date).
  </action>
  <verify>
    Run `cd server && node -e "import('./models/ContactMessage.js').then(m => console.log(m.default.modelName))"`
  </verify>
  <done>
    Models are exported correctly.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Database connection works when MONGO_URI is valid.
- [ ] 6 Mongoose models are fully defined.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in server startup
