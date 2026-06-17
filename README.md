# Adarsh Raj — Personal Portfolio Website

A high-fidelity, interactive, and responsive developer portfolio designed for entry-level Software Developer, Full Stack Developer, and Data Analyst roles. Built with React, Vite, TailwindCSS, and Framer Motion.

[![Built with React](https://img.shields.io/badge/React-18.x-61dafb.svg?style=flat-square&logo=react)](https://react.dev/)
[![Bundled with Vite](https://img.shields.io/badge/Vite-6.x-646cff.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Styled with TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Animated with Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-ff00c8.svg?style=flat-square&logo=framer)](https://www.framer.com/motion/)

---

## Key Features

* **Dynamic Hero Showcase**: Custom typing animation introducing roles, a pulsing "Open to Work" availability badge, and real-time count-up stats for projects and LeetCode solved problems.
* **Premium User Experience**: Subtle mouse-following cursor glow, floating blurred blobs, smooth glassmorphism containers, and interactive section transition triggers.
* **Project Breakdowns**: Screen-prominent centerpiece showcases detailing the Problem, Solution, and Technical Challenges for projects like *HappyJourney* and *Sweet Gallery*.
* **Responsive Layout**: Designed mobile-first, ensuring 100% usability across all devices (Desktop, Tablet, and Mobile views).
* **Contact Integration**: Dynamic messaging form integrated with EmailJS, featuring automated fallback redirects to local email applications.
* **Clean Data-Driven Architecture**: Easily update skills, projects, degrees, and certifications directly inside a centralized config file (`src/data/portfolio.js`).

---

## Technology Stack

* **Frontend Library**: React (Vite environment)
* **Styling**: Vanilla CSS Variables (Glows, Blurs, Layout grids) + TailwindCSS utility bases
* **Animations**: Framer Motion (Scroll reveal triggers, node entry translations)
* **Icons**: Lucide React
* **Email API Service**: EmailJS Browser Client

---

## Getting Started

Follow these instructions to set up the project locally on your machine.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ is recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/AdarshRaj-00/Portfolio.git
cd Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Locally (Development Server)
```bash
npm run dev
```
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) in your web browser.

### 5. Build for Production
To bundle the optimized static files into the `dist/` directory:
```bash
npm run build
```

---

## Contact Form Integration (EmailJS Setup)

By default, the contact form opens the user's default mail client as a fallback. To enable direct, headless email submissions using EmailJS, create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

---

## 📂 Project Structure

```text
├── public/
│   ├── assets/
│   │   ├── adarsh-profile.jpg         # Profile Headshot photo
│   │   ├── happyjourney-app.png       # HappyJourney screenshot
│   │   └── sweetgallery-app.png       # Sweet Gallery catalog screenshot
│   ├── Adarsh_Raj_Resume.pdf          # Downloadable PDF Resume
│   ├── favicon.svg                    # Custom AR lettermark logo
│   ├── robots.txt                     # SEO indexing configuration
│   └── sitemap.xml                    # Search engine XML mapping
├── src/
│   ├── components/                    # UI Components (Hero, About, Projects, etc.)
│   ├── data/
│   │   └── portfolio.js               # Centralised resume content database
│   ├── hooks/                         # Custom theme, scroll, and section hooks
│   ├── App.jsx                        # Main Application shell structure
│   ├── main.jsx                       # App entry point rendering React DOM
│   └── styles.css                     # Primary stylesheet containing animations & glow styles
└── index.html                         # Entry HTML with Open Graph & Twitter meta tags
```
