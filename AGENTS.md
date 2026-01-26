## Project Summary
This project is a landing page for Dr. Willmer Obregón, focused on promoting "Monitoreo MAPA 24 Horas" (Ambulatory Blood Pressure Monitoring) services. The goal is to drive appointments and provide information about the benefits of this medical diagnostic tool.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS
- Components: Shadcn UI, Lucide React
- Fonts: Sans-serif (Default)

## Architecture
- `src/app`: Page routes and layout
- `src/components/sections`: Main sections of the landing page (Hero, Benefits, Services, etc.)
- `src/components/ui`: Reusable UI components

## User Preferences
- **SEO First**: Always generate complete on-page SEO before UI.
- **H1 Pattern**: `<h1>{{primary_keyword}} en {{city}} - {{brand}}</h1>`. Max 1 H1 per page, keyword at the start.
- **Hierarchy**: Strict H2/H3 hierarchy for crawlability. No skipped levels.
- **Meta Title**: `<title>{{primary_keyword}} | {{brand}} {{city}}</title>`. 50-60 chars, keyword on the left.
- **Meta Description**: 150 chars summary with CTA and local keywords. Include an icon/emoji.
- **Meta Robots**: `index, follow` for public landings.
- **Image ALT**: Every image must have `alt="{{descriptive + local keyword}}"`.
- **Responsive UX**: Mobile-first, avoid white spaces >20% viewport.
- **Visuals**: Use Unsplash for images.
- **Favicon**: Use the provided project favicon.

## Project Guidelines
- production-ready with schema.org where applicable.
- Avoid large vertical gaps or blocks without useful content.
- Every screen must show visible titles, text, or CTAs.

## Common Patterns
- Tailwind for responsive design (flex/grid).
- Lucide React for icons.
