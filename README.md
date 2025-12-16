# Nine Shine — Creative Design Studio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)

Premium portfolio website for **Nine Shine** — a creative design and technology studio specializing in animation, graphic design, and web development.

![Nine Shine Preview](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80)

## ✨ Features

- 🌐 **Bilingual** — English & Russian with seamless switching
- 🎨 **Dark Premium Theme** — Violet & coral accent gradients
- ⚡ **Smooth Animations** — Framer Motion + Lenis scroll
- 📱 **Fully Responsive** — Mobile-first design
- 🔤 **Cyrillic Fonts** — Unbounded + Manrope
- 🚀 **Fast & SEO-Ready** — Next.js 14 App Router

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| i18n | next-intl |
| Forms | React Hook Form + Zod |
| Fonts | Google Fonts (Unbounded, Manrope) |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ninezeroshine/nine-shine.git
cd nine-shine

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nine_shine/
├── messages/           # Translation files (en.json, ru.json)
├── public/             # Static assets
├── src/
│   ├── app/
│   │   ├── [locale]/   # Locale-based routing
│   │   └── globals.css # Design system & tokens
│   ├── components/
│   │   ├── layout/     # Header, Footer, LanguageSwitcher
│   │   ├── sections/   # Hero, Projects, Services, etc.
│   │   └── providers/  # SmoothScrollProvider
│   ├── i18n/           # Internationalization config
│   └── middleware.ts   # Locale detection
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Design System

### Colors
| Name | Value | Usage |
|------|-------|-------|
| bg-primary | `#0a0a0b` | Main background |
| bg-secondary | `#111113` | Section backgrounds |
| accent | `#8b5cf6` | Primary accent (violet) |
| warm | `#f97316` | Secondary accent (coral) |
| text-primary | `#fafafa` | Main text |
| text-secondary | `#a1a1aa` | Muted text |

### Typography
- **Headings**: Unbounded (400-700)
- **Body**: Manrope (300-700)
- Both fonts support Latin & Cyrillic

## 🌐 Localization

Languages: **English** (default), **Russian**

Add translations in:
- `messages/en.json`
- `messages/ru.json`

Use in components:
```tsx
import { useTranslations } from "next-intl";

function MyComponent() {
  const t = useTranslations("namespace");
  return <h1>{t("key")}</h1>;
}
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

## 🗺 Roadmap

- [x] Home page with hero, projects, services, stats
- [ ] Services page (detailed service descriptions)
- [ ] Projects page (filterable grid)
- [ ] Project detail pages
- [ ] About page
- [ ] Contacts page with form
- [ ] Sanity CMS integration
- [ ] Custom cursor effects
- [ ] Page transitions

## 📄 License

Private project. All rights reserved.

---

Made with 💜 by **Nine Shine Studio**
