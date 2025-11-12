# ⚡ Quick Start Guide

Get your website running in 3 minutes!

## Step 1: Install Dependencies (2 minutes)

Open Terminal and run:

```bash
cd /Users/presidentanderson/cliniquelactuel-refactored
npm install
```

This will install all required packages (Next.js, React, Tailwind, etc.)

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

## Step 3: View Your Website (30 seconds)

Open your browser and go to:

**http://localhost:3000**

## 🎉 That's It!

You should now see your beautiful new website running!

---

## What You'll See

### Homepage (/)
- Hero section with appointment buttons
- 6 medical services
- About section
- Latest articles

### Other Pages
- **/services** - All medical services
- **/equipe** - Team members
- **/ressources** - Blog (structure ready)
- **/rendez-vous** - Appointments (structure ready)

---

## Next Steps

### Immediate Customizations

#### 1. Change Your Clinic Name/Logo
Edit `components/Header.tsx` (line 19):
```tsx
Clinique l'Actuel → YOUR CLINIC NAME
```

#### 2. Update Phone Number
Search and replace `514-524-1001` with your number in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/AppointmentCTA.tsx`

#### 3. Update Email
Search and replace `info@cliniquelactuel.com` with your email in:
- `components/Footer.tsx`
- `app/layout.tsx`

#### 4. Change Colors (Optional)
Edit `tailwind.config.ts` to match your brand colors.

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Check for errors
npm run lint
```

---

## Troubleshooting

### Error: Port 3000 in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Error: Module not found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Changes not showing
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

---

## File Structure Quick Reference

### Want to edit...

**Homepage content?**
→ `app/page.tsx` and components in `components/` folder

**Services page?**
→ `app/services/page.tsx`

**Team page?**
→ `app/equipe/page.tsx`

**Header/Navigation?**
→ `components/Header.tsx`

**Footer?**
→ `components/Footer.tsx`

**Colors/Design?**
→ `tailwind.config.ts`

**Site-wide settings?**
→ `app/layout.tsx`

---

## 🚀 Deploy When Ready

### Easiest Way: Vercel

1. Create account at https://vercel.com
2. Push code to GitHub
3. Import project in Vercel
4. Done! Auto-deploys on every push

### Manual Deploy

```bash
npm run build
npm start
```

---

## 📚 Documentation

For more details, check:

1. **SETUP-GUIDE.md** - Detailed setup instructions
2. **PROJECT-OVERVIEW.md** - What's been built
3. **README.md** - Complete documentation

---

## Need Help?

### Resources
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev

### Contact
If you have questions about this specific project, refer to the documentation files.

---

**Enjoy your new website! 🎊**
