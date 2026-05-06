<div align="center">

# 🚀 Ritesh Pandey — Portfolio

### A modern, animated personal portfolio built with Next.js 15, Tailwind CSS & Framer Motion

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-riteshpandeyportfolio.vercel.app-black?style=for-the-badge)](https://riteshpandeyportfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>


---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Sections Breakdown](#-sections-breakdown)
- [Contact](#-contact)

---

## 🔎 Overview

A sleek, single-page portfolio website showcasing **Ritesh Pandey's** skills, services, projects, and contact information. The site features smooth scroll-triggered animations, a fully functional dark/light theme toggle with local-storage persistence, a responsive mobile sidebar menu, and a working contact form powered by **Web3Forms**.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Dark / Light Mode** | Toggleable theme with `localStorage` persistence and system-preference detection |
| **Scroll Animations** | Entrance animations on every section via Framer Motion's `whileInView` |
| **Responsive Layout** | Fully responsive design with a slide-in mobile navigation menu |
| **Contact Form** | Working contact form integrated with [Web3Forms](https://web3forms.com/) API |
| **Resume Download** | One-click PDF resume download directly from the header |
| **Hover Micro-interactions** | Scale, translate and shadow effects on cards, buttons, and tool icons |
| **Turbopack Dev Server** | Lightning-fast development experience with Next.js Turbopack |
| **SEO Optimized** | Custom metadata, semantic HTML structure, and optimized fonts |

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) with custom design tokens |
| **Animations** | [Motion (Framer Motion)](https://motion.dev/) v12 |
| **Fonts** | [Outfit](https://fonts.google.com/specimen/Outfit) & [Ovo](https://fonts.google.com/specimen/Ovo) via `next/font` |
| **Form Backend** | [Web3Forms](https://web3forms.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Linting** | ESLint 9 with `eslint-config-next` |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navbar with dark mode toggle & mobile menu
│   │   ├── Header.jsx        # Hero section with profile, CTA & resume download
│   │   ├── About.jsx         # Bio, skills, education & tools showcase
│   │   ├── Service.jsx       # Service cards (Web, Mobile, UI/UX, Graphics)
│   │   ├── Work.jsx          # Project portfolio grid with image cards
│   │   ├── Contact.jsx       # Contact form with Web3Forms integration
│   │   └── Footer.jsx        # Social links, email & copyright
│   ├── globals.css           # Tailwind directives & global font
│   ├── layout.js             # Root layout with Google Fonts & dark mode class
│   ├── page.js               # Main page composing all sections
│   └── favicon.ico
├── assets/
│   ├── assets.js             # Centralized asset imports & data arrays
│   └── *.png / *.svg         # Icons, profile images & backgrounds
├── public/
│   ├── RR.pdf     # Downloadable resume
│   ├── work-*.png            # Project showcase images
│   └── footer-bg-color.png   # Contact section background
├── tailwind.config.mjs       # Custom colors, fonts, shadows & grid
├── next.config.mjs           # Next.js configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm / bun)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/riteshpandey2024-cyber/MyPortfolio.git
cd MyPortfolio

# 2. Install dependencies
npm install

# 3. Start the development server (Turbopack enabled)
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** to view the site.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint checks |

---

## ⚙ Configuration

### Tailwind Design Tokens

Custom tokens are defined in `tailwind.config.mjs`:

| Token | Value | Purpose |
|---|---|---|
| `lightHover` | `#fcf4ff` | Hover background in light mode |
| `darkHover` | `#2a004a` | Hover background in dark mode |
| `darkTheme` | `#11001F` | Dark mode body background |
| `font-Outfit` | `Outfit, sans-serif` | Primary font family |
| `font-Ovo` | `Ovo, sans-serif` | Secondary / accent font |

### Contact Form

The contact form uses **Web3Forms** for email delivery. To use your own access key:

1. Sign up at [web3forms.com](https://web3forms.com/)
2. Get your access key
3. Replace the key in `app/components/Contact.jsx`:

```js
formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
```

---

## 🌐 Deployment

The site is deployed on **Vercel** with zero configuration:

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com/)
3. Vercel auto-detects Next.js and deploys

**Live URL →** [riteshpandeyportfolio.vercel.app](https://riteshpandeyportfolio.vercel.app/)

---

## 📖 Sections Breakdown

### 1. Navbar
- Fixed-position navigation with smooth scroll links
- Dark/light mode toggle (sun/moon icons)
- Responsive hamburger menu with animated slide-in sidebar
- Background blur effect on scroll

### 2. Header (Hero)
- Animated profile image with spring physics
- Staggered text entrance animations
- "Contact Me" and "My Resume" CTA buttons

### 3. About Me
- Profile image with rounded styling
- Info cards: **Languages**, **Education**, **Projects**
- Tools showcase: VS Code, Firebase, MongoDB, Figma, Git

### 4. Services
- Four service cards: Web Design, Mobile App, UI/UX Design, Graphics Design
- Hover scale effects with shadow transitions
- Read-more links to external resources

### 5. My Work
- Project grid with background-image cards
- Overlay labels showing title and category
- Hover lift animation with send icon

### 6. Contact
- Name, email, and message form fields
- Web3Forms API integration for real-time email delivery
- Decorative background gradient in light mode
- Submit confirmation feedback

### 7. Footer
- Logo and email display
- Social links: LinkedIn, Portfolio, GitHub
- Copyright notice

---

## 📬 Contact

**Ritesh Pandey**

- 📧 Email: [pandeyriteshp2003@gmail.com](mailto:pandeyriteshp2003@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/ritesh-pandey2024](https://www.linkedin.com/in/ritesh-pandey2024/)
- 🐙 GitHub: [github.com/riteshpandey2024-cyber](https://github.com/riteshpandey2024-cyber)


---

<div align="center">

Made with ❤️ by **Ritesh Pandey**

</div>
