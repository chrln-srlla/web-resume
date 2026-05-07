# ResuForge

An online resume builder built with React + TypeScript. Fill in your details in a few steps, preview the result, and print it to PDF.

## Features

- Multi-step flow: Personal Information → Skills/Experience/Projects → Account
- Live resume preview component used for printing
- Print-friendly layout (uses `window.print()` and print CSS)
- Responsive UI styled with Tailwind CSS

## Tech Stack

- React + TypeScript
- Vite (dev server + build)
- Tailwind CSS (plus PostCSS + Autoprefixer)
- React Router

## Getting Started

### Prerequisites

- Node.js (LTS recommended)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the URL shown in your terminal (typically `http://localhost:5173`).

## Printing to PDF

1. Click **Get started** and complete the steps.
2. Go to **Account**.
3. Click **Print Resume (PDF)**.
4. In the print dialog, choose **Save as PDF**.

Notes:

- The resume content is rendered in a print-only view (the form UI is hidden when printing).
- Your data currently lives in React state and resets on refresh.

## Scripts

```bash
# Start dev server
npm run dev

# Production build (TypeScript build + Vite build)
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

## Project Structure

- `src/pages/` — Route pages (Home, Personal Information, Projects, Account, About)
- `src/components/` — UI components (including `ResumePreview`)
- `src/layouts/` — App layout + route wiring
- `src/types/` — TypeScript types for resume data
- `src/index.css` — Tailwind layers + shared component classes + print CSS

