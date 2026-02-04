# Modern Portfolio Template

A professional, feature-rich portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4. Perfect for developers, researchers, and engineers showcasing their work.

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek glassmorphic design with gradient accents
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **High Performance** - Server-side rendering with Next.js App Router
- 🎯 **Type-Safe** - Built with TypeScript for reliability
- 🎭 **Smooth Animations** - Framer Motion for polished interactions
- 📄 **Dynamic Project Pages** - Detailed project showcases with tech stacks
- 🎓 **Separate Education & Experience** - Timeline-based journey sections
- 📊 **Stats Dashboard** - Highlight your achievements and metrics
- 🖼️ **Project Screenshots** - Gallery support for project images
- 🔗 **GitHub Integration** - Direct links to project repositories
- 📥 **Resume Download** - Built-in resume download functionality
- 🏷️ **Project Categories** - Tag-based project filtering (AI, Full Stack, Research, etc.)

## 🚀 Tech Stack

- **Framework:** Next.js 16.1.6 (Turbopack, App Router, RSC)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 (using `@theme` syntax)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Image Optimization:** Next.js Image Component

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/              # About page
│   ├── education/          # Education timeline
│   ├── experience/         # Work & volunteering experience
│   ├── projects/           # Projects listing
│   │   └── [slug]/         # Dynamic project detail pages
│   ├── layout.tsx          # Global layout (Navbar & Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & Tailwind config
│   └── not-found.tsx       # 404 page
├── components/
│   ├── sections/           # Page sections
│   │   ├── About.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── JourneyGrid.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsGrid.tsx
│   │   └── StatsBar.tsx
│   └── ui/                 # Reusable UI components
│       ├── Badge.tsx
│       ├── Button.tsx
│       └── ProjectCard.tsx
├── config/
│   └── content.ts          # Single source of truth for all content
├── public/
│   ├── images/
│   │   ├── about/          # About page images
│   │   ├── gallery/        # Gallery images
│   │   ├── hero/           # Hero/profile images
│   │   └── projects/       # Project images & screenshots
│   └── resume/             # Resume PDF files
└── package.json
```

## 🎨 Design System

### Color Palette
- **Background:** Slate-950 (#0F172A)
- **Cards:** Glassmorphic slate-900 with 50% opacity
- **Text:** Slate-100 (primary), Slate-300 (secondary), Slate-400 (tertiary)
- **Accents:** 
  - Blue (#3B82F6) - Tech/AI projects
  - Green (#10B981) - Full Stack/Web projects
  - Yellow (#F59E0B) - Community/ML projects
  - Cyan (#06B6D4) - IoT/Research projects

### Typography
- **Headings:** Bold, large sizes (4xl-6xl)
- **Body:** Regular weight, comfortable line height (1.75)
- **Code/Tech:** Monospace for technical terms

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Update Personal Information

Edit `/config/content.ts` - This is the **single source of truth** for all content:

```typescript
export const PORTFOLIO_DATA: PortfolioContent = {
  profile: {
    name: 'Your Name',
    role: 'Your Role/Title',
    bio: 'Your bio description...',
    location: 'Your Location',
    email: 'your.email@example.com',
    avatar: '/images/hero/profile.jpeg',
    resume: '/resume/Your-Resume.pdf',
    socials: [
      { platform: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
      // Add more social links...
    ],
  },
  // ... more content
};
```

### 2. Update Stats

```typescript
stats: [
  {
    id: 'stat-coding',
    icon: Code2,
    label: 'Years of Experience',
    value: '5+',
    color: 'blue',
    description: 'Your description here',
  },
  // Add more stats...
],
```

### 3. Add Education & Experience

```typescript
journey: [
  // Education
  {
    id: 'edu-1',
    type: 'education',
    icon: GraduationCap,
    title: 'Your Degree',
    organization: 'University Name',
    date: '2020 - 2024',
    description: 'Description of your education...',
    color: 'blue',
    tags: ['Computer Science', 'AI', 'Software Engineering'],
  },
  // Work Experience
  {
    id: 'exp-1',
    type: 'experience',
    icon: Briefcase,
    title: 'Job Title',
    organization: 'Company Name',
    date: '2023 - Present',
    description: 'Description of your role...',
    color: 'green',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  // Volunteering
  {
    id: 'vol-1',
    type: 'volunteering',
    icon: Users,
    title: 'Volunteer Role',
    organization: 'Organization Name',
    date: '2022 - 2023',
    description: 'Description of your contribution...',
    color: 'yellow',
    tags: ['Leadership', 'Community'],
  },
],
```

### 4. Add Projects

```typescript
projects: [
  {
    id: '1',
    slug: 'project-slug',  // Used in URL: /projects/project-slug
    title: 'Project Title',
    description: 'Short description for project card',
    overview: 'Detailed project overview for project page...',
    keyFeatures: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    techStack: {
      backend: ['Node.js', 'Python', 'Java'],
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      database: ['PostgreSQL', 'MongoDB'],
      tools: ['Docker', 'Git', 'AWS'],
    },
    categories: ['Full Stack', 'Web', 'AI'],  // For filtering/badges
    githubUrl: 'https://github.com/username/repo',  // Optional
    screenshots: [  // Optional
      '/images/projects/project-slug/screenshot1.png',
      '/images/projects/project-slug/screenshot2.png',
    ],
    architectureDiagrams: {  // Optional
      system: '/images/projects/project-slug/system-architecture.png',
      deployment: '/images/projects/project-slug/deployment-architecture.png',
    },
    year: 2024,
    image: '/images/projects/project-slug.jpg',  // Main project image
    color: 'blue',  // Accent color: 'blue' | 'green' | 'yellow' | 'cyan'
  },
],
```

### 5. Add Images

Place your images in the appropriate folders:

```
public/
├── images/
│   ├── hero/
│   │   └── profile.jpeg          # Your profile photo
│   ├── about/
│   │   └── about-me.jpeg         # About page photo
│   ├── gallery/
│   │   ├── gallery-1.jpg         # Gallery images
│   │   ├── gallery-2.jpg
│   │   └── ...
│   └── projects/
│       ├── project-slug.jpg      # Main project image
│       └── project-slug/         # Project-specific folder
│           ├── screenshot1.png   # Screenshots
│           ├── screenshot2.png
│           ├── system-architecture.png
│           └── deployment-architecture.png
└── resume/
    └── Your-Resume.pdf           # Your resume PDF
```

### 6. Update Navigation (if needed)

Edit `/components/sections/Navbar.tsx`:

```typescript
const navLinks = [
  { href: '/', label: 'Home', isAnchor: false },
  { href: '/about', label: 'About', isAnchor: false },
  { href: '/education', label: 'Education', isAnchor: false },
  { href: '/experience', label: 'Experience', isAnchor: false },
  { href: '/projects', label: 'Projects', isAnchor: false },
  { href: '/#contact', label: 'Contact', isAnchor: true },
];
```

## 🎯 Available Pages

- **Home (`/`)** - Hero, Stats, Gallery, Contact sections
- **About (`/about`)** - Detailed bio and background
- **Education (`/education`)** - Academic timeline
- **Experience (`/experience`)** - Work experience and volunteering
- **Projects (`/projects`)** - All projects grid view
- **Project Detail (`/projects/[slug]`)** - Individual project pages with full details

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Self-Hosted

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## 🎨 Customization Tips

### Change Color Theme
Edit the color values in `/app/globals.css` and `/components/ui/ProjectCard.tsx`

### Add More Sections
Create new components in `/components/sections/` and import them in the desired page

### Modify Project Card Design
Edit `/components/ui/ProjectCard.tsx`

### Change Fonts
Update font imports in `/app/layout.tsx`

### Add Blog/Articles
Create a new page in `/app/blog/` and fetch content from your preferred CMS or markdown files

## 🐛 Common Issues

### Images not loading
- Ensure images are placed in the correct `/public/images/` subdirectories
- Check that file names match exactly (including case sensitivity)
- Verify image paths in `content.ts`

### Resume download not working
- Place your PDF in `/public/resume/`
- Update the `resume` path in `content.ts` profile section
- Ensure the filename matches exactly

### Navigation not scrolling to contact section
- The contact section is on the home page (`/`)
- Navigation link uses `/#contact` to navigate from other pages

## 📄 License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 💬 Support

If you have questions or need help customizing this template, feel free to open an issue.

---

**Built using Next.js, TypeScript, and Tailwind CSS**
