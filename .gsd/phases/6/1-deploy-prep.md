---
wave: 1
depends_on: []
---
# Phase 6: Deploy Prep

## Task 1: Environment configurations and scripts
- Update `client/src/components/sections/Contact.jsx` to use `import.meta.env.VITE_API_URL` instead of the hardcoded `http://localhost:3000` string.
- Create `client/.env.example` with `VITE_API_URL=http://localhost:5000`.
- Update `server/index.js` to configure CORS to use `process.env.CLIENT_URL` if it exists.
- Create `server/.env.example` documenting `PORT`, `MONGO_URI`, `EMAIL_USER`, `EMAIL_PASS`, and `CLIENT_URL`.
- Create a root `README.md` with instructions on how to build and start the client and server.

<verify>
cd "client" && grep -q "import.meta.env.VITE_API_URL" src/components/sections/Contact.jsx && cd ../server && cat .env.example | grep "CLIENT_URL"
</verify>

## Task 2: Final Verification
- Run `npm run build` in the `client` directory to verify the production build succeeds.
- Start the server on a test port (e.g., 5001) and verify the `/api/health` endpoint returns 200 OK.

<verify>
cd "client" && npm run build && [ -d "dist" ]
</verify>
