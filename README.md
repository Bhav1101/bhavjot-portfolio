# Portfolio Website

## Prerequisites
- Node.js (v18+)
- MongoDB

## Setup

### Server
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in the required values:
   ```bash
   cp .env.example .env
   ```
4. Start the server:
   ```bash
   npm start
   ```
   Or for development mode:
   ```bash
   npm run dev
   ```

### Client
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in the required values:
   ```bash
   cp .env.example .env
   ```
4. Start the client:
   ```bash
   npm run dev
   ```

## Deployment
1. Build the client:
   ```bash
   cd client
   npm run build
   ```
2. The `dist` directory will contain the built client files.
