# Supreme Group Web App

A modern, responsive web application for Supreme Group, built with Next.js, React, and Tailwind CSS.

**[🚀 View Live Demo](https://supremegroup-three.vercel.app/)**

---

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rakeshkumarsahugithub/supremegroup.git
   cd supremegroup
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

| Path / File                              | Purpose / Description                                      |
|------------------------------------------|-----------------------------------------------------------|
| `/public/`                              | Static files (images, videos, favicon, etc.)               |
| └── `/Supreme Group assets/`             | Product images, videos, and logo                           |
| `/src/app/`                             | Next.js app directory (routing, layout, global styles)     |
| ├── `page.js`                           | Home page component                                       |
| ├── `layout.js`                         | Global HTML structure, metadata, favicon                   |
| ├── `not-found.js`                      | Custom 404 error page                                     |
| └── `globals.css`                       | Global CSS (Tailwind, custom styles)                       |
| `/src/components/`                      | All React UI components                                   |
| ├── `Header.js`                         | Sticky header with logo and scroll behavior                |
| ├── `Hero.js`                           | Hero section with background video and headline            |
| ├── `PerformanceHero.js`                | Additional hero section with video                         |
| ├── `VehicleShowcase.js`                | Interactive vehicle video slider (mobile & desktop)        |
| ├── `Contact.js`                        | Contact form and info section                              |
| └── `Footer.js`                         | Footer with links, logo, and company info                  |
| `package.json`                          | Project dependencies and scripts                           |
| `next.config.mjs`                       | Next.js configuration                                      |
| `postcss.config.mjs`                    | PostCSS config for Tailwind                                |
| `jsconfig.json`                         | JS/TS path aliases and config                              |
| `.gitignore`                            | Files and folders to ignore in git                         |

---

## 🧩 Main Features & Architecture

- **Next.js App Router (SSG):** Fast, SEO-friendly pages, statically generated by default for optimal performance.
- **Reusable React Components:** All UI is built from modular components in `/src/components/`.
- **Responsive Design:** Mobile-first, fully responsive layouts using Tailwind CSS.
- **Interactive Vehicle Showcase:** Video slider for Passenger and Commercial vehicles, with swipe and dot navigation (mobile & desktop).
- **Contact Form:** Accessible, responsive form with semantic markup.
- **Sticky Header & Footer:** Consistent navigation and branding.
- **Custom 404 Page:** User-friendly error handling.

---

## ⚡️ Performance & Optimization

| Optimization                 | How It's Used in This Project                                      |
|------------------------------|-------------------------------------------------------------------|
| Static Site Generation (SSG) | All pages are pre-built for instant delivery from the CDN.         |
| Code Splitting               | Automatic via Next.js                                             |
| Image Optimization           | Next.js `<Image />` for responsive, compressed images              |
| Video Compression            |All videos need to be compressed using HandBrake or FFmpeg before being added to /public/ to ensure optimal performance.|
| Video Lazy Loading           | All `<video>` tags use `loading="lazy"` for deferred loading      |
| Font Optimization            | Google Fonts, only needed weights loaded                           |
| Critical CSS                 | Tailwind purges unused CSS                                         |
| Accessibility                | Semantic HTML, labels, ARIA, keyboard nav                          |
| Explicit Sizes               | All images/videos have width/height to prevent layout shift        |

---

## 🛠️ Libraries & Tools Used

- **Next.js** — React framework for SSR, SSG, routing, and performance
- **React** — UI library for building components
- **Tailwind CSS** — Utility-first CSS framework for rapid, responsive design
- **Framer Motion** — For smooth, performant animations and transitions

---

## ♿ Accessibility
| Feature Area         | Implementation Details                                                                |
|----------------------|---------------------------------------------------------------------------------------|
| **Semantic HTML**    | Uses proper HTML5 elements like `<header>`, `<main>`, `<footer>`, and headings for structure. |
| **Keyboard Navigation**| All interactive elements (buttons, links) are fully accessible via keyboard.          |
| **Forms**            | All form inputs have associated `<label>`s (using `sr-only` for clean design).        |
| **Focus Management** | Visible focus states on all interactive elements.                                     |
| **Color Contrast**   | Text and background colors are chosen to meet WCAG AA contrast standards.               |
| **Links & Buttons**  | Clickable phone/email links use `tel:` and `mailto:`. All buttons have clear labels.     |
| **Error Handling**   | The custom 404 page provides clear messaging and a "Go to Homepage" button for easy navigation. |

---
