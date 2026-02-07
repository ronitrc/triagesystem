# Medical Triage System (v3.0)

## Overview
A Smart Triage Application designed for rural healthcare, featuring:
-   **Multi-Language Support**: Automatically generates reports in English, Hindi, and the native language of the selected Indian State (covering all major states/UTs).
## Key Features
-   **Modern Clinical UI**: A responsive, accessible interface designed for ease of use.
-   **Localization**: Supports multiple Indian languages based on selected state.

## 📱 Mobile & PWA Features
This application is a **Progressive Web App (PWA)**.
- **Installable**: Can be installed on Android/iOS as a standalone app.
- **Offline Capable**: Works without internet access after the first load (cached via Service Worker).
- **Responsive**: Optimised for all screen sizes.

## 🚀 Deployment & Submission
To submit or deploy this project:
1. **Compress**: Zip the entire `TriageSystem` folder.
2. **Deploy**:
   - **Netlify**: Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop).
   - **GitHub Pages**: Push to a repository and enable Pages in settings.
   - **Vercel**: Import the repository or use Vercel CLI.

## 📁 File Structure
- `index.html`: Main entry point.
- `css/`: Stylesheets.
- `js/`: Application logic (`triage.js`, `l10n.js`, `app.js`).
- `manifest.json`: PWA metadata.
- `sw.js`: Service Worker for offline support.
- `icon.svg`: App icon.

## 🧪 Testing
1. Open on mobile via local network (e.g., `http://192.168.x.x:8080`).
2. Use Chrome DevTools "Application" tab to verify Service Worker and Manifest.
3. Test "Add to Home Screen" functionality.

## Project Structure
-   `index.html`: The main application file.
-   `css/style.css`: Modern visual styling and responsiveness.
-   `js/triage.js`: Core logic for urgency calculation and report generation.
-   `js/l10n.js`: Localization database (State-to-Language mapping & translation dictionaries).


## How to Run
1.  Open the `index.html` file in any modern web browser (Chrome, Edge, Firefox).
2.  No installation or server is required.


## Features to Test
1.  **Optional Location**: Generate a report without location to see English/Hindi default.
3.  **Regional Support**: Select a state (e.g., "Odisha", "Assam", "Punjab") to see the specific regional translation.

## Technology Stack
-   HTML5, CSS3, Vanilla JavaScript

-   No external libraries or dependencies required.
