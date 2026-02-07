# 🚀 Deployment Guide

This guide will help you deploy your **Medical Triage Assistant** so judges can access it online.

## Option 1: Netlify Drop (Easiest & Fastest)
*Best for quick submission without complex setup.*

1.  **Locate your project**: Find the `TriageSystem` folder on your computer.
2.  **Go to Netlify Drop**: Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
3.  **Drag & Drop**: Drag the entire `TriageSystem` folder onto the page.
4.  **Wait**: Netlify will upload and deploy your site in seconds.
5.  **Copy Link**: You will get a link like `https://adjective-noun-12345.netlify.app`. This is your detailed submission link!

## Option 2: GitHub Pages
*Best if you already use GitHub.*

1.  **Create Repository**: Create a new public repository on GitHub.
2.  **Upload Files**: Upload all files from `TriageSystem` to the repository.
3.  **Settings**: Go to `Settings` > `Pages`.
4.  **Source**: Select `main` branch and `/ (root)` folder.
5.  **Save**: Your site will be live at `https://yourusername.github.io/repo-name`.

## Option 3: Vercel
*Best for performance.*

1.  **Install Vercel CLI**: Run `npm i -g vercel`.
2.  **Deploy**: Run `vercel` inside the `TriageSystem` folder.
3.  **Follow Prompts**: Accept defaults.
4.  **Done**: You'll get a production URL immediately.

## 📱 PWA Features
Your deployed app is also a **Progressive Web App**.
- **On Mobile**: Open the link in Chrome/Safari -> Tap "Share" -> "Add to Home Screen".
- **Result**: It looks and feels like a native app! Judges will be impressed by this offline capability.
