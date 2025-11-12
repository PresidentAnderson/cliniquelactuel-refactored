# Clinique l'Actuel Setup Guide

## Quick Start

Your refactored website is ready! Here's how to get it running:

### 1. Install Dependencies

```bash
cd cliniquelactuel-refactored
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## What's Been Built

### ✅ Complete Website Structure

1. **Homepage** with:
   - Hero section with CTAs
   - Services showcase (6 medical services)
   - About section with clinic features
   - Appointment booking CTA
   - Latest articles preview

2. **Services Page** with:
   - All 6 services detailed
   - Features and descriptions
   - Individual service links ready

3. **Team Page** with:
   - 6 team members (placeholders)
   - Professional bios
   - Clinic values section

4. **Components**:
   - Responsive Header with mobile menu
   - Footer with links and contact info
   - All homepage sections as reusable components

### 🎨 Modern Design Features

- **Tailwind CSS** fully configured
- **Custom color scheme** (Primary blue, Accent purple)
- **Responsive design** (mobile-first approach)
- **Smooth transitions** and hover effects
- **Accessibility** features built-in

### ⚡ Performance Optimizations

- Next.js 15 App Router (latest)
- TypeScript for type safety
- Font optimization (Google Fonts)
- Image optimization ready
- SEO metadata configured

## Next Steps to Customize

### 1. Add Your Branding

Replace placeholder content:

```typescript
// In components/Header.tsx
"Clinique l'Actuel" → Your actual logo

// In tailwind.config.ts
// Update colors to match your brand
primary: { ... }  // Your primary color
accent: { ... }   // Your accent color
```

### 2. Add Real Images

Place your images in `public/images/` and update components:

```tsx
// Replace placeholder divs with:
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### 3. Customize Content

Edit the content in:
- `app/page.tsx` - Homepage content
- `app/services/page.tsx` - Services details
- `app/equipe/page.tsx` - Team members
- `components/Footer.tsx` - Footer links and info

### 4. Configure Contact Information

Update phone numbers and email:
- `components/Header.tsx` - Phone in header
- `components/Footer.tsx` - Contact section
- `app/layout.tsx` - Metadata

## Key Files to Know

### Configuration Files
- `package.json` - Dependencies and scripts
- `tailwind.config.ts` - Design system colors/fonts
- `tsconfig.json` - TypeScript configuration
- `next.config.mjs` - Next.js settings

### Layout & Pages
- `app/layout.tsx` - Site-wide layout and SEO
- `app/page.tsx` - Homepage
- `app/globals.css` - Global styles

### Reusable Components
- `components/Header.tsx` - Navigation
- `components/Footer.tsx` - Footer
- `components/Hero.tsx` - Hero section
- `components/Services.tsx` - Services grid
- `components/About.tsx` - About section

## Features to Add Later

### Appointment Booking System

Create `app/rendez-vous/page.tsx`:

```tsx
'use client'
// Add form with date/time picker
// Integrate with your booking system API
```

### Blog/Resources System

Create `app/ressources/[slug]/page.tsx` for dynamic blog posts:

```tsx
export async function generateStaticParams() {
  // Fetch blog posts from CMS
}
```

### Contact Form

Create `app/contact/page.tsx`:

```tsx
'use client'
// Add contact form
// Integrate with email service
```

## Deploy to Production

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy (automatic)

### Option 2: Other Hosting

```bash
npm run build  # Creates production build
npm run start  # Runs production server
```

Then deploy the `.next` folder to your hosting provider.

## Common Customizations

### Change Primary Color

In `tailwind.config.ts`:

```typescript
primary: {
  50: '#your-color-50',
  // ... through to 900
}
```

### Add New Page

1. Create `app/new-page/page.tsx`
2. Add link in `components/Header.tsx`
3. Update `navigation` array

### Modify Services

Edit the `services` array in:
- `components/Services.tsx` (homepage)
- `app/services/page.tsx` (services page)

## Troubleshooting

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors

```bash
# Check TypeScript errors
npx tsc --noEmit
```

## Getting Help

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- TypeScript Docs: https://www.typescriptlang.org/docs

## Project Status

✅ **Ready for Development**

The website foundation is complete and ready for you to:
1. Install dependencies
2. Add your content and branding
3. Customize design and features
4. Deploy to production

Good luck with your refactored website! 🚀
