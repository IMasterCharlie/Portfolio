# Portfolio

This is a [Next.js](https://nextjs.org) portfolio project, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It features a modern tech stack, 3D portfolio integration, and a clean, responsive UI.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [3D Portfolio](#3d-portfolio)
- [Learn More](#learn-more)
- [License](#license)

## Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS and custom themes
- 🧩 Modular components and hooks
- 📝 Form validation with `react-hook-form` and `zod`
- 🖼️ Animations with `framer-motion`
- 🗄️ MongoDB integration via Mongoose (for backend/API)
- 🚀 Ready to deploy on Vercel

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend/API:** Express, Mongoose, MongoDB
- **3D Graphics:** Three.js
- **Utilities:** Zod, React Hook Form, Tailwind Merge, Next Themes

## Getting Started

First, install dependencies:

```sh
npm install
```

Then, run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

You can start editing the main page by modifying [`app/page.tsx`](app/page.tsx).

## Project Structure

```
.
├── app/                # App directory (Next.js App Router)
│   ├── components/     # App-specific components
│   ├── fonts/          # Custom fonts
│   ├── privacypolicy/  # Privacy policy page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/         # Shared UI components
│   └── ui/
├── hooks/              # Custom React hooks
│   └── use-toast.ts
├── lib/                # Utility libraries
│   └── utils.ts
├── pages/              # API routes (Next.js)
│   └── api/
├── portfolio-3d/       # 3D portfolio (React + Vite + Three.js)
├── public/             # Static assets
├── server.js           # Custom Express server (if used)
├── tailwind.config.ts  # Tailwind CSS config
├── .env                # Environment variables
└── ...
```

## Scripts

- `dev` – Start the development server
- `build` – Build the app for production
- `start` – Start the production server
- `lint` – Run ESLint

See all scripts in [`package.json`](package.json).

## Environment Variables

Create a `.env` file in the root directory for environment-specific settings (e.g., database URIs, API keys).

Example:

```
MONGODB_URI=your-mongodb-uri
NEXT_PUBLIC_API_URL=https://your-api-url
```

## 3D Portfolio

The [`portfolio-3d`](portfolio-3d/) directory contains a separate React + Vite project for 3D portfolio features, using Three.js. See its [README](portfolio-3d/README.md) for setup and usage.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Three.js Documentation](https://threejs.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)

## License

This project is open source and available 