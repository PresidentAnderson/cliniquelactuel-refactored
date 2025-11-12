# Clinique l'Actuel - Refactored Website

A modern, high-performance website for Clinique l'Actuel built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** with App Router for optimal performance
- 🎨 **Tailwind CSS** for modern, responsive design
- 📱 **Mobile-First** responsive design
- ♿ **Accessible** components following WCAG guidelines
- 🚀 **SEO Optimized** with metadata and structured data
- 🎯 **TypeScript** for type safety
- 🎭 **Framer Motion** for smooth animations

## Project Structure

```
cliniquelactuel-refactored/
├── app/                    # Next.js App Router pages
│   ├── services/          # Services pages
│   ├── equipe/            # Team page
│   ├── ressources/        # Resources/Blog
│   ├── rendez-vous/       # Appointment booking
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # About section
│   ├── AppointmentCTA.tsx # Appointment call-to-action
│   └── LatestArticles.tsx # Blog articles preview
├── lib/                   # Utility functions and helpers
├── public/                # Static assets
│   └── images/           # Image assets
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.mjs        # Next.js configuration
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

### Implemented Pages

- **Homepage** (`/`) - Hero section, services overview, about, latest articles
- **Services** (`/services`) - Complete list of medical services
- **Team** (`/equipe`) - Meet the medical professionals
- **Resources** (`/ressources`) - Health articles and resources (structure ready)
- **Appointment** (`/rendez-vous`) - Book an appointment (structure ready)
- **Contact** (`/contact`) - Contact information (structure ready)

### To Implement

- Individual service detail pages
- Blog/Resources with dynamic routing
- Appointment booking system integration
- Contact form with backend integration
- Patient portal integration (if needed)

## Design System

### Colors

- **Primary**: Blue (#0ea5e9) - Medical, trustworthy
- **Accent**: Purple (#d946ef) - Modern, energetic
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Headings**: Poppins (font-heading)
- **Body**: Inter (font-sans)

### Components

All components are built with:
- Responsive design (mobile-first)
- Hover states and transitions
- Accessible markup (ARIA labels, semantic HTML)
- Tailwind utility classes

## Customization

### Adding Brand Assets

1. Add your clinic logo to `public/images/logo.png`
2. Replace placeholder images in components with actual photos
3. Update colors in `tailwind.config.ts` to match your brand

### Content Management

Currently using static content. To integrate a CMS:

1. Install your CMS SDK (Contentful, Sanity, etc.)
2. Create data fetching functions in `lib/`
3. Update components to use dynamic data
4. Implement ISR or SSG for optimal performance

### SEO Optimization

- Update metadata in each page's `metadata` export
- Add your Google verification code in `app/layout.tsx`
- Implement structured data (JSON-LD) for rich snippets
- Create `sitemap.xml` and `robots.txt`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
npx vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
npm run start
```

## Performance Optimizations

- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Static generation where possible
- Edge caching with proper headers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2025 Clinique l'Actuel. All rights reserved.

## Support

For questions or support, contact: info@cliniquelactuel.com
