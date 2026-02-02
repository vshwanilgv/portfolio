# High-Performance Portfolio Template

A modern, scalable portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 (using `@theme` syntax)
- **Icons:** Lucide React
- **Animations:** Framer Motion

## 📁 Project Structure

```
/public/images/{hero,projects,tech}  # Asset separation
/app
  /projects/[slug]/page.tsx          # Dynamic Project Details
  /articles/page.tsx                 # Article Feed
  layout.tsx                         # Global Navbar/Footer
  page.tsx                           # Landing Page
/components
  /ui                                # Atoms (Buttons, Badges)
  /sections                          # Organisms (Hero, StatsBar, JourneyGrid)
/config
  content.ts                         # Single source of truth for all content
```

## 🎨 Design System

- **Theme:** Dark minimalist with deep navy/charcoal background
- **Typography:** System fonts (optimized for performance)
- **Color Palette:**
  - Background: Slate-950 (#0F172A)
  - Cards: Glassmorphic slate with 50% opacity
  - Accents: Blue, Green, Yellow, Cyan for stats and highlights

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📝 Customization

All portfolio content is centralized in `/config/content.ts`. Update this file to customize:
- Personal information
- Stats and metrics
- Journey items (education, experience, awards)
- Projects and their details

## 🔧 Key Features

- ✅ Server-side rendering with RSC
- ✅ Optimized images with next/image
- ✅ Type-safe content management
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ Dynamic project detail pages
- ✅ Dark mode optimized
