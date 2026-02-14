# BELSWIMSISTERS - English Channel Swim Campaign

## Overview
A bold, modern landing page for the Belswimsisters campaign — six Belarusian women attempting to cross the English Channel as a relay team. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Oswald (headlines), Inter (body)

## Project Structure
```
src/
├── App.tsx                  # Main app layout with all sections
├── index.tsx                # Entry point
├── index.css                # Tailwind imports + custom utilities
├── components/
│   ├── Navigation.tsx       # Fixed nav with DONATE button (Enthuse link TBD)
│   ├── Hero.tsx             # Hero with countdown timer (June 21, 2026)
│   ├── Mission.tsx          # Mission statement section
│   ├── Challenge.tsx        # Stats about the swim challenge
│   ├── Team.tsx             # Team member cards
│   ├── Partners.tsx         # "Why Become Our Partner" — audience icons, channels, benefit blocks
│   ├── VisibilityPlan.tsx   # Training Plan timeline (swim window June 21-30, 2026)
│   └── CallToAction.tsx     # CTA section
└── hooks/
    └── useCountdown.ts      # Countdown timer hook (target: June 21, 2026)
```

## Design System
- **Primary color**: Electric Blue (#0066FF) - `electric` in Tailwind
- **Background**: Black (#000000)
- **Text**: White (#FFFFFF)
- Custom utilities: `.text-stroke`, `.clip-diagonal`, `.clip-diagonal-reverse`

## Running
- `npm run dev` - Development server on port 5000
- `npm run build` - Production build
