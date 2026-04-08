# Brisk Credit Ltd - Premium Landing Page

![Brisk Credit](./company%20colors/briskLogo-dark.png)

A **production-ready**, **mobile-first**, **high-performance** landing page for **Brisk Credit Ltd**, a serious Kenyan digital lending company.

## ✨ Key Features

- 🎯 **Authentic Kenyan Market Focus** — Designed for mwanainchi (small business owners, farmers, artisans)
- 📱 **Mobile-First Responsive** — Optimized from 320px phones to 4K displays
- ⚡ **Blazing Fast** — 132 KB gzipped total, optimized animations
- 🎨 **Premium Brand Colors** — Bright orange (#FF6B35) and blue (#0099FF) from official logo
- ✅ **Accessibility-Ready** — WCAG AA compliant, semantic HTML, keyboard nav
- 🎬 **Smooth Animations** — GSAP ScrollTrigger with GPU acceleration
- 📝 **Heavily Documented** — Inline comments, design guide, technical notes
- 🚀 **Production-Ready** — TypeScript, Tailwind CSS, modern React patterns

---

## 📖 Documentation

**New to this project?** Start here:

1. **[BRISK_CREDIT_DESIGN_GUIDE.md](./BRISK_CREDIT_DESIGN_GUIDE.md)** — Design philosophy, section breakdown, brand guidelines
2. **[TECHNICAL_NOTES.md](./TECHNICAL_NOTES.md)** — Architecture, color system, responsive design, performance
3. **[Code Comments](./src/App.tsx)** — Inline documentation throughout the app

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
app/
├── src/
│   ├── App.tsx              # Main component (all sections + documentation)
│   ├── App.css              # Animations and hover effects
│   ├── index.css            # Tailwind setup, fonts, global styles
│   ├── main.tsx             # React DOM entry point
│   └── components/ui/       # Reusable components (shadcn/ui)
├── tailwind.config.js       # Theme with Brisk Credit colors
├── BRISK_CREDIT_DESIGN_GUIDE.md    # Design philosophy
├── TECHNICAL_NOTES.md              # Architecture details
└── README.md                # This file
```

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Orange** | `#FF6B35` | CTAs, labels, highlights |
| **Primary Blue** | `#0099FF` | Secondary buttons, icons |
| **Dark Navy** | `#0A2540` | Page background, cards |
| **Deep Navy** | `#061B2E` | Darker card backgrounds |
| **Green Accent** | `#1a6b3a` | Checkmarks, affirmation |

---

## 📱 Responsive Design

| Breakpoint | Device | Columns |
|------------|--------|---------|
| **320px–480px** | Mobile | 1 column |
| **768px** | Tablet | 2 columns |
| **1024px** | Desktop | 3 columns |
| **1280px+** | Large Desktop | 4 columns |

Mobile-first approach: styles start mobile, `lg:` adds desktop rules.

---

## 🎬 Page Sections

1. **Navigation** — Fixed header with CTA
2. **Hero** — Cinematic intro
3. **Features** — Three customer segments
4. **How It Works** — 4-step process
5. **Eligibility** — Requirements
6. **Products** — Three loan options
7. **Stats** — Impact metrics
8. **Testimonials** — Real stories
9. **Repayment** — M-Pesa focus
10. **Branches** — Nationwide coverage
11. **Partners** — Trust signals
12. **FAQ** — Q&A
13. **Contact** — Footer + CTA

See **[BRISK_CREDIT_DESIGN_GUIDE.md](./BRISK_CREDIT_DESIGN_GUIDE.md)** for details on each section.

---

## ⚡ Performance

```
CSS:    15.72 KB gzipped
JS:     116.71 KB gzipped
Total:  ~132 KB gzipped
```

Optimizations: Tailwind purging, GSAP GPU acceleration, lazy loading ready.

---

## 🔍 Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
orange: { DEFAULT: "#YOUR_COLOR", ... }
blue: { DEFAULT: "#YOUR_COLOR", ... }
```

### Update Contact Info

Search in `src/App.tsx`:
- Phone: `+254 713 329 268`
- Paybill: `4106969`
- Address: `Commodore Office Suites, Kilimani...`

### Replace Images

Update placeholders:
- `/hero_businesswoman.jpg`
- `/feature_*.jpg`
- `/product_*.jpg`
- etc. (see Design Guide)

---

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ WCAG AA contrast
- ✅ Keyboard navigation
- ✅ Touch-friendly (44px minimum)
- ✅ Focus visible states

---

## 🚀 Deployment

```bash
npm run build
```

Output: `dist/` folder (ready for Vercel, Netlify, GitHub Pages, etc.)

---

## 📚 Learn More

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **GSAP**: https://gsap.com
- **Vite**: https://vitejs.dev

---

## 📞 Support

**Brisk Credit:**
- 📱 +254 713 329 268
- 🏢 Commodore Office Suites, Kilimani, Nairobi
- 💳 M-Pesa Paybill: 4106969

---

**Version**: 1.0.0 | **Status**: ✅ Production-Ready | **Updated**: April 8, 2026

