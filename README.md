# Ascent Pinnacle Capital - v2

Upgraded website for [AscentPinnacle.com](https://ascentpinnacle.com), deployed on Vercel.

## What's New in v2

| Area | Change |
|---|---|
| **Performance** | Tailwind CSS via proper Vite PostCSS (was CDN) - CSS drops from ~350KB to <20KB |
| **SEO** | Full OG meta tags, Twitter Card, JSON-LD schema, sitemap.xml, robots.txt |
| **Dynamic OG** | Each insight article has its own OG title/description/image for LinkedIn sharing |
| **Analytics** | Google Analytics 4 integrated (configure Measurement ID in `index.html`) |
| **Contact Form** | 7-field mandate enquiry form - emails team + auto-acknowledges enquirer via Resend |
| **Newsletter** | Actually sends emails now via Resend (was a console.log stub) |
| **WhatsApp** | Floating WhatsApp button with pre-filled message |
| **Mandate CTA** | Category-aware CTA at bottom of every insight article |
| **Insights** | Category filter tabs, related articles, author bylines with LinkedIn links |
| **Blog posts** | Share on LinkedIn button, author byline, related articles |
| **Hero** | Insight posts now pulled from the same `data.ts` source (no more stale hardcoded list) |
| **LP Portal** | Removed fake modal - replaced with "Discuss a Mandate" nav CTA |
| **Structure** | All source files in `src/`, config at root - cleaner organisation |
| **Calendly** | "Book 30-min Discovery Call" button on contact page |

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Copy team photos
See `public/images/team/README.md` for instructions on copying and optimising the 3 team photos.

### 3. Configure environment variables

Set these in **Vercel -> Project Settings -> Environment Variables**:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | From [resend.com](https://resend.com) - free tier covers 3,000 emails/month |

### 4. Update placeholders in code

| File | What to update |
|---|---|
| `index.html` | Replace `G-XXXXXXXXXX` with your GA4 Measurement ID |
| `src/components/WhatsAppButton.tsx` | Replace `919999999999` with your actual WhatsApp number |
| `src/App.tsx` (ContactPage) | Replace `https://calendly.com/ascentpinnacle` with your Calendly link |
| `api/newsletter.js` | Update `FROM_EMAIL` after verifying your domain in Resend |
| `api/contact.js` | Update `FROM_EMAIL` after verifying your domain in Resend |
| `public/sitemap.xml` | Already configured for `ascentpinnacle.com` |

### 5. Add OG image
Create a `public/og-image.jpg` (1200x630px) - dark background, logo, tagline.
This is the image shown when your URL is shared on LinkedIn, WhatsApp, etc.

---

## Development
```bash
npm run dev
```

## Production build
```bash
npm run build
```

---

## Deployment (Vercel)

The `vercel.json` rewrites all routes to `/index.html` for SPA routing.
Vercel auto-detects the Vite build. No additional configuration needed.

The `api/` folder is automatically deployed as Vercel serverless functions.
