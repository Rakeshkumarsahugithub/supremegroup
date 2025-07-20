# Supreme Group Web App

## Project Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/Rakeshkumarsahugithub/supremegroup.git>
  
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
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Component Architecture Overview

- **Header:** Shows the Supreme Group logo, sticky at the top, hides on scroll down and shows on scroll up.
- **Hero:** Main landing section with a background video and headline text.
- **VehicleShowcase:** Interactive section for Passenger and Commercial vehicles, with video sliders and dot navigation (mobile and desktop layouts).
- **Contact:** Contact form with accessible labels, clickable phone/email, and a responsive layout.
- **Footer:** Four-column layout with links, logo, and copyright.
- **404 Page:** Custom error page with large 404, message, and a button to return home.

---

## Responsive Design Strategy

- **Mobile-first:** All components are styled for mobile by default, with `md:` and `lg:` classes for desktop.
- **Tailwind CSS:** Used for all responsive breakpoints and utility classes.
- **Conditional rendering:** Mobile and desktop layouts are separated using `md:hidden` and `hidden md:flex`.
- **Flexible containers:** Use of `w-full`, `max-w-xs`, `min-h-screen`, and responsive paddings/margins.

---

## Performance Optimization Techniques Employed

| Technique                | Description                                                      | Status   |
|--------------------------|------------------------------------------------------------------|----------|
| Code Splitting           | Only load JS for the current page/component                      | ✅ Next.js automatic |
| Lazy Loading (Images)    | Defer loading of images until needed                             | ✅ Next.js `<Image />` (if used) |
| Image Optimization       | Serve responsive, compressed images in modern formats            | ✅ Next.js `<Image />` (if used) |
| Font Optimization        | Only load needed font weights/styles                             | ✅ Roboto/Inter, limited weights |
| Prefetching              | Preload linked pages for instant navigation                     | ✅ Next.js `<Link />` |
| SSR/SSG                  | Server-side rendering or static generation for fast initial load | ✅ Next.js per page |
| Critical CSS             | Only load CSS needed for above-the-fold content                 | ✅ Tailwind purges unused CSS |
| Accessibility            | Semantic HTML, labels, ARIA, keyboard nav                       | ✅ Labels, roles, headings |
| Explicit Sizes           | Prevent layout shift by setting width/height                    | ✅ Images/videos have sizes |
| Keyboard Navigation      | All interactive elements are keyboard accessible                 | ✅ All buttons/links focusable |
| Color Contrast           | Ensure text/background contrast meets WCAG                      | ✅ Checked and adjusted |

---

## Accessibility Considerations

- All form inputs have accessible `<label>` elements (using `sr-only` for visual cleanliness).
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<nav>`, and headings are used appropriately.
- All interactive elements (buttons, links) are keyboard accessible and have visible focus states.
- Sufficient color contrast for text and backgrounds.
- Clickable phone and email links use `tel:` and `mailto:`.
- 404 page and error messages are clear and accessible.

---

## Explanation of Third-Party Libraries Used

- **Next.js:** React framework for SSR, SSG, routing, and performance.
- **React:** UI library for building components.
- **Tailwind CSS:** Utility-first CSS framework for rapid, responsive design.
- **Framer Motion:** For smooth, performant animations and transitions.
- **Vercel (deployment):** For fast, global hosting and analytics.

---

## Assumptions Made & Decisions Taken

- Used Next.js for automatic code splitting, SSR/SSG, and routing.
- Used Tailwind for all styling to ensure consistency and responsiveness.
- Used Framer Motion for all animations for best performance and flexibility.
- Used accessible labels (even if visually hidden) for all form fields.
- Footer links to demo 404 pages for non-existent routes.
- Used Roboto/Inter as the main font for a modern, geometric look.
- All images and videos are assumed to be in the `/public` directory and optimized.

---

## Challenges Faced & Potential Solutions

| Challenge                                 | Solution/Approach                                      |
|-------------------------------------------|--------------------------------------------------------|
| Video autoplay errors on mobile           | Used refs and safe `.play()` calls with `.catch()`      |
| Video height not respecting Tailwind      | Used wrapper divs with fixed height and `object-cover`  |
| Accessibility for forms                   | Added `sr-only` labels for all inputs                   |
| Header hiding/showing on scroll           | Used scroll event, state, and Tailwind transitions      |
| 404 page full-screen with sticky footer   | Used `min-h-[90vh]` and flex layout                    |
| Consistent color/contrast for all text    | Used Tailwind color utilities and checked contrast      |

---

## Suggested Upcoming Features & Improvements

- Add real pages for all footer links (currently demo 404s)
- Add form validation and error messages for the contact form
- Add loading spinners or skeletons for video/image loads
- Add dark mode toggle for accessibility and modern look
- Add analytics and performance monitoring (Web Vitals, Vercel Analytics)
- Add skip links and ARIA live regions for even better accessibility
- Add more animations or micro-interactions for engagement
- Optimize images further with Next.js `<Image />` everywhere
- Add SEO meta tags and Open Graph tags for better sharing

---

**If you have any questions or want to focus on a specific area, just ask!**
