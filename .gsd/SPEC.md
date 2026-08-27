# Portfolio Website Specification

## Status
FINALIZED

## Overview
A full MERN stack personal portfolio website for Bhavjot Singh, a B.Tech CSE student and aspiring Software Development Engineer (AppSec & VAPT focus). This is a remix of the reference site `sawad.framer.website`, reusing its visual components but with a custom section order based on the CV.

## Requirements

### Architecture & Tech Stack
- **Frontend**: React (Vite) + Tailwind CSS + Framer Motion.
- **Backend**: Node.js / Express.
- **Database**: MongoDB (Mongoose).
- **Workspaces**: Separate `client/` and `server/` directories.

### Content & Sections (Single-page scroll in this order)
1. **Hero**: Name, title "Aspiring Software Development Engineer | AppSec & VAPT", short bio from profile summary, links to GitHub (github.com/Bhav1101), LinkedIn (linkedin.com/in/bhavjot-singh-933849336), email (Bhavjot360@gmail.com).
2. **Stats**: Honest numbers (e.g., 6 Months MERN Experience, 1 Live Production App, 9.08 Diploma CGPA).
3. **Skills**: Grouped as CV (Languages, Web Stack, Tools & Platforms).
4. **Experience**: O7 Services, MERN Stack Intern, Jan–Apr 2026, with all 4 achievement bullets (JWT auth + 4-minute seat locking, Razorpay + HMAC-SHA256 verification, Cloudinary + Google Gemini AI chatbot, end-to-end delivery).
5. **Projects**: SportsSphere as flagship card (MERN, Razorpay, Cloudinary, live at sports-sphere-nine.vercel.app, GitHub repo Bhav1101).
6. **Certifications**: MERN Stack Development (O7 Services) and Python Programming (GTB Institution, 45-day).
7. **Education**: B.Tech CSE Lateral Entry at LPU (2026–2029, Semester 3) and Diploma CSE at LPU (2026, CGPA 9.08).
8. **Contact Form**: Name, Email, Budget dropdown, Message, Submit.
9. **Footer**: Standard footer.

### Data & API
- CV Content (Experience, Skills, Projects, Certifications, Education) will be hardcoded in a frontend configuration file for better performance and simplicity.
- The Contact Form submissions will be saved to MongoDB to maintain full MERN stack integration.
- Collection: `ContactMessage`.
- REST endpoints:
  - `POST /api/contact` (saves message + sends email via Nodemailer).

### Design
- Use `ui-ux-pro-max` skill to choose a cohesive modern design system (palette, type pairing, layout rhythm) appropriate for a software engineer.
- Remix `sawad.framer.website` visual components (hero with photo, bold stat numbers, timeline-style experience list, card-based project grid, tools/skills grid, simple contact form). No blog section.
