# Adarsh Raj Portfolio

Clean React portfolio for Software Developer, Full Stack Developer, Java Developer, and entry-level Data Analytics roles.

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

## Contact form

The form works with a mail app fallback by default. To enable EmailJS, create a `.env` file:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Important files

- `src/data/portfolio.js` - profile, skills, project, certification, and contact content
- `public/Adarsh_Raj_Resume.pdf` - downloadable resume
- `public/assets/happyjourney-app.png` - featured project screenshot
