# Synthra — AI-Powered Development Intelligence Platform

A fictional software product landing page built with Vite for GitHub Pages.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Development

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📦 Deploy to GitHub Pages

### Option 1: GitHub Actions (recommended)

1. Push this repository to GitHub
2. Go to Settings > Pages > Source, select "GitHub Actions"
3. Push to `main` branch — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically

### Option 2: Manual deploy

1. Build the site: `npm run build`
2. Push the `dist/` folder to the `gh-pages` branch of your repo

## 🛠 Built With

- [Vite](https://vitejs.dev/) — Next generation frontend tooling
- [Inter Font](https://rsms.me/inter/) — Beautiful typeface

## 🏗 Project Structure

```
hcd-test/
├── index.html          # Main page
├── style.css           # Styles
├── main.js             # JavaScript
├── vite.config.js      # Vite configuration
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
└── README.md
```
