# ⚡ Portfolio v2 – Cyberpunk Developer Portfolio

A **futuristic developer portfolio** built with **Next.js 13, Tailwind CSS, and TypeScript**, wrapped in a **cyberpunk/hacker aesthetic**.  
Includes **matrix rain, holographic cards, particle systems, interactive terminals, glitch overlays, and ASCII effects** for a truly immersive developer showcase.

This project is fully **Dockerized** with support for **Nginx reverse proxy** and **multi-stage builds** for production.

---

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Screenshots & Preview](#-screenshots--preview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Local Development](#-local-development)
- [Docker Setup](#-docker-setup)
- [Production Deployment](#-production-deployment)
- [Configuration](#-configuration)
- [Usage Guide](#-usage-guide)
- [Terminal Commands](#-terminal-commands)
- [Troubleshooting](#-troubleshooting)
- [Contributors](#-contributors)
- [License](#-license)

---

## 📌 Introduction

This isn’t just a portfolio — it’s an **experience**.  
Designed to impress recruiters, employers, and tech enthusiasts, this portfolio combines **cutting-edge frontend development** with **immersive visuals**.

Highlights:
- Built with **Next.js App Router** for modern React patterns.
- Designed with **Tailwind CSS** for rapid, utility-first styling.
- Powered by **Docker + Nginx** for simple deployment anywhere.
- Packed with **easter eggs** like the Konami Code.

---

## 📸 Screenshots & Preview

> You can go to this [link](m4hd1-portfolio.vercel.app) and see it for yourself.
---

## ✨ Features

- 🎨 **Cyberpunk UI** – glitch overlays, holographic cards, neon glowing effects.
- 💻 **Interactive Hacker Terminal** – run commands like `help`, `projects`, `skills`, `about`.
- 🌌 **Matrix Rain + Binary Effects** – animated hacker-style backgrounds.
- 📊 **Skills & Achievements Sections** – animated orbs, holographic skill cards.
- 🔧 **Reusable React Components** – modular design for easy extension.
- 🐳 **Docker Support** – production-ready, with `nginx` as a reverse proxy.
- 📱 **Responsive Design** – works seamlessly on mobile and desktop.
- 🎭 **Theme Provider** – switch themes dynamically (light, dark, cyberpunk).
- 🕹 **Easter Eggs** – hidden Konami Code triggers special animations.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Package Manager**: pnpm (recommended) / npm / yarn
- **Deployment**: Docker, Docker Compose, Nginx


---

## 📂 Project Structure

```

portfolio\_v2/
│── app/                  # Next.js App Router pages
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── terminal/
│       └── page.tsx
│
│── components/           # UI components (glitch, holographic, particles, etc.)
│   ├── theme-provider.tsx
│   ├── hacker-terminal.tsx
│   ├── matrix-rain.tsx
│   ├── holographic-card.tsx
│   ├── glitch-overlay.tsx
│   ├── particle-field.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   ├── experience-section.tsx
│   ├── achievements-section.tsx
│   └── ...
│
│── Dockerfile            # Multi-stage build for Next.js
│── docker-compose.yml    # Orchestration (app + nginx)
│── nginx.conf            # Reverse proxy + caching + headers
│── package.json
│── tailwind.config.ts
│── tsconfig.json
│── postcss.config.mjs
│── .dockerignore
│── .gitignore
│── README.md

````

---

## 🔧 Installation

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/portfolio_v2.git
cd portfolio_v2/portfolio_v2
````

### 2. Install Dependencies

```bash
pnpm install
```

(Or use `npm install` / `yarn install`)

---

## 💻 Local Development

### Run Development Server

```bash
pnpm dev
```

* App runs on: [http://localhost:3000](http://localhost:3000)
* Hot reload enabled.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🐳 Docker Setup

### Prerequisites

* [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) installed
* `pnpm` installed locally (optional, only if you want to build outside Docker)

### Quick Start with Docker Compose

```bash
docker-compose up --build
```

Run detached mode:

```bash
docker-compose up -d --build
```

Logs:

```bash
docker-compose logs -f nextjs-app
```

### Direct Docker Commands

```bash
docker build -t portfolio_v2 .
docker run -p 3000:3000 portfolio_v2
```

---

## 🚀 Production Deployment

### With Nginx (Recommended)

```bash
docker-compose --profile production up -d --build
```

This will:

* Run Next.js app on port 3000 (internal)
* Serve via Nginx on ports 80/443
* Apply caching, headers, and rate limiting

### Environment Variables

Create a `.env` in project root:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Add custom environment variables here
```

---

## ⚙️ Configuration

* **`tailwind.config.ts`** → Customize animations, themes, color palette
* **`nginx.conf`** → Control caching, headers, reverse proxy settings
* **`tsconfig.json`** → TypeScript compiler options
* **`.env`** → Deployment-specific variables (API keys, analytics, etc.)

---

## 📖 Usage Guide

The portfolio includes several interactive sections:

* **Landing Page** – animated introduction, holographic cards
* **Projects Section** – clickable demos and code snippets
* **Skills Section** – glowing orbs with interactive animations
* **Achievements** – holographic achievements cards
* **Experience** – styled timeline of job history
* **Terminal Mode** – run commands (`help`, `about`, `skills`, etc.)
* **Konami Code** – discover hidden Easter eggs

---

## ⌨️ Terminal Commands

Inside `/terminal` page:

* `help` → Shows available commands
* `about` → Info about you
* `skills` → Displays skills as ASCII/animated orbs
* `projects` → Lists portfolio projects
* `contact` → Shows contact information
* `clear` → Clears terminal output

---

## 🐞 Troubleshooting

* **App doesn’t start in Docker?**
  Ensure `next.config.mjs` has standalone mode enabled.

* **Nginx not serving files?**
  Verify `nginx.conf` points to `.next/standalone`.

* **Styles not applied?**
  Check Tailwind config paths in `tailwind.config.ts`.

* **Konami code doesn’t work?**
  Ensure `konami-provider.tsx` is properly wrapped in layout.

---