# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bachmas is a Next.js 14 website celebrating Johann Sebastian Bach's birthday (March 21st) with a countdown timer, jubilee year calculator, and educational content about Bach's life and works. The site features "Bachsprache" - a communication system using BWV (Bach-Werke-Verzeichnis) catalog numbers to represent emotions and ideas.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build static site (outputs to `/out` directory)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The site is deployed as a static export to FTP hosting:
- Run `./deploy.sh` to build and deploy (requires `lftp` installed)
- Build configuration in `next.config.js` uses `output: 'export'` for static HTML export
- Images are unoptimized for static hosting compatibility

## Architecture

### Static Export Configuration

This is a **statically exported Next.js site** (not server-rendered). Key implications:
- All pages are pre-rendered at build time to static HTML
- No server-side rendering or API routes
- Client-side interactivity via React hydration
- Middleware (`src/middleware.ts`) sets no-cache headers for all routes

### Page Structure

The site uses Next.js App Router with the following pages:
- `/` - Home page with countdown timer and jubilee years calculator (src/app/page.tsx)
- `/life` - Bach's biography
- `/works` - Bach's musical works
- `/traditions` - Bachmas traditions
- `/bachsprache` - BWV-based communication system

All pages are client components (`'use client'`) due to interactive features.

### Component Architecture

- **Navigation** (`src/components/Navigation.tsx`) - Fixed header with mobile hamburger menu, used across all pages
- **YouTube** (`src/components/YouTube.tsx`) - YouTube embed component
- Client-side state management via React hooks (no global state library)
- Dynamic imports for heavy libraries (e.g., `react-confetti` loaded with `next/dynamic`)

### Styling System

Custom color palette defined in `tailwind.config.ts`:
- `bach-parchment` (#F5E6D3) - Main background
- `bach-ink` (#2C1810) - Text color
- `bach-brown` (#4A3728) - Accent color
- `bach-gold` (#B8860B) - Highlights
- `bach-red` (#8B0000) - Emphasis

Typography uses Google Fonts:
- Crimson Text - Body text (`--font-crimson`)
- Playfair Display - Display/headers (`--font-playfair`)

### Key Features

**Countdown Timer** (src/app/page.tsx:21-60):
- Uses `date-fns` for date calculations
- Updates every second
- Displays confetti animation on March 21st
- Timer logic: if before March 21 this year, countdown to this year; if after, countdown to next year

**Jubilee Years Calculator** (src/app/page.tsx:70-97):
- Calculates 50-year anniversaries of Bach's birth (1685) and death (1750)
- Shows upcoming jubilee years from current year forward
- Combines birth and death anniversaries in chronological order

**Bachsprache System** (src/app/bachsprache/page.tsx):
- Static array of BWV numbers mapped to emotions/meanings
- Rendered in a responsive table
- Each BWV entry has: catalog number, work title, and associated emotion/idea

## Important Notes

- The site enforces March 21 (Julian calendar) as Bach's birthday, not March 31 (Gregorian conversion)
- All interactive features are client-side only (static export constraint)
- Mobile-first responsive design with careful attention to navigation UX