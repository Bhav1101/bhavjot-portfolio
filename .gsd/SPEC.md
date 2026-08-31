# Portfolio Website Specification

## Status
FINALIZED

## Overview
A full MERN stack personal portfolio website for Bhavjot Singh. This uses a "Hybrid" design: combining clean glassmorphism with specific brutalist/terminal elements.

## Requirements

### Architecture & Tech Stack
- **Frontend**: React (Vite) + Tailwind CSS + Framer Motion.
- **Backend**: Node.js / Express.
- **Database**: MongoDB (Mongoose).
- **Workspaces**: Separate `client/` and `server/` directories.

### Content & Sections (Single-page scroll in this order)
1. **Hero**: Formal greeting ("Greetings, I'm Bhavjot Singh"), title "Aspiring Software Development Engineer | AppSec & VAPT". Replace standard bio with a sleek **Terminal Window** showing: Name, Education, Role, Hobbies, and Stack (typing animation or glowing terminal). Photo included. Links to GitHub, LinkedIn, email.
2. **Stats**: Honest numbers (e.g., 6 Months MERN Experience, 1 Live Production App, 9.08 Diploma CGPA).
3. **Skills**: Infinite horizontal scrolling marquee. Includes clickable filter headings (Languages, Web Stack, Tools). Clicking a heading pauses the animation and filters/statics the view.
4. **Experience**: O7 Services, MERN Stack Intern, Jan-Apr 2026.
5. **Projects**: SportsSphere as flagship card.
6. **Certifications**: MERN Stack and Python.
7. **Education**: B.Tech CSE and Diploma CSE.
8. **Contact Form**: Name, Email, Message, Submit (No budget field).
9. **Footer**: Standard footer.

### Data & API
- CV Content hardcoded in a frontend configuration file.
- The Contact Form submissions will be saved to MongoDB.
- Collection: `ContactMessage`.
- REST endpoints:
  - `POST /api/contact` (saves message + sends email via Nodemailer).

### Design
- **Theme**: Clean, professional Glassmorphism, expanded horizontally (`max-w-7xl` or wider container for UI).
- **Dark/Light Mode**: Add a theme toggle in the navbar to switch between the dark space theme and a clean light mode.
- **Animations**: Rich Framer Motion animations. Horizontal marquee for skills.
- **Terminal Element**: The Hero bio is a dark, code-styled terminal window.
