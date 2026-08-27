---
phase: 2
plan: 3
wave: 2
depends_on: [2.1]
gap_closure: false
---

# Plan 2.3: Contact Form Integration

## Objective
Set up an endpoint to receive contact messages, save them to the database, and send an email notification using Nodemailer.

## Context
Load these files for context:
- .gsd/SPEC.md
- server/index.js
- server/package.json
- server/models/ContactMessage.js

## Tasks

<task type="auto">
  <name>Install Nodemailer and Configure Service</name>
  <files>
    server/package.json
    server/services/emailService.js
    server/.env.example
  </files>
  <action>
    Add Nodemailer and create a reusable email sending utility.
    
    Steps:
    1. Run `npm install nodemailer` in the `server` directory.
    2. Create `server/services/emailService.js` that exports an async function `sendContactEmail(messageData)`.
    3. In `emailService.js`, configure a transport using `process.env.EMAIL_USER` and `process.env.EMAIL_PASS`.
    4. Add `EMAIL_USER=` and `EMAIL_PASS=` placeholders to `server/.env.example`.
  </action>
  <verify>
    Check that nodemailer is in package.json dependencies. Run `cd server && node -e "import('./services/emailService.js').then(() => console.log('ok'))"`
  </verify>
  <done>
    Nodemailer is installed and email service utility is created.
  </done>
</task>

<task type="auto">
  <name>Create Contact Endpoint</name>
  <files>
    server/controllers/contactController.js
    server/routes/contactRoutes.js
    server/index.js
  </files>
  <action>
    Implement the `/api/contact` POST endpoint.
    
    Steps:
    1. Create `contactController.js`. In the `submitContact` async function, receive `name`, `email`, `budget`, and `message` from `req.body`.
    2. Save the message to the DB using the `ContactMessage` model.
    3. Call `sendContactEmail` to send the notification email (wrapped in try/catch to ensure DB save succeeds even if email fails).
    4. Return a success response (201 status).
    5. Create `contactRoutes.js` and define `POST /` mapped to the controller.
    6. Mount `contactRoutes` at `/api/contact` in `server/index.js`.
  </action>
  <verify>
    Ensure `server/index.js` still parses correctly: `cd server && node -c index.js`
  </verify>
  <done>
    The contact endpoint is available and integrated into the server.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] `POST /api/contact` endpoint is available.
- [ ] Nodemailer logic is implemented.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in existing routes
