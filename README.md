## Carcallas

#### Framework: Vite + Vue 3

#### Module: PWA Conversion

#### Installation

To replicate and run this project follow the following steps using Windows Powershell:

```bash
winget install OpenJS.NodeJS.LTS
nvm install lts
nvm use lts
git clone https://github.com/SL4DEEE/firstattempt2026_carcallas
cd vite-project
npm install
npm run dev
```

### AI Tools:
1. Claude (Agent Mode) using Haiku 4.5

### Prompt 1:
```
Create a master prompt for this project based on the following instructions:
(1) Generating a valid manifest.json (with University Branding).
(2) Registering a Service Worker.
(3) Implementing Caching Strategies so the app loads instantly and works offline.
(4) Managing the App Icons (using the assets provided in the Branding Kit).
```
### Prompt 2:

```
You are an expert frontend developer. I have a Vite + Vue 3 project using
JavaScript and the Composition API (<script setup>). Your job is to fully
convert this project into an installable Progressive Web App (PWA) by
completing all tasks below autonomously. Do not ask me questions — make
all decisions and implement everything yourself.

--- TASK 1: Install the dependency ---
Run the following command to install the required package:
npm install -D vite-plugin-pwa

--- TASK 2: Create the manifest.json ---
Create the file public/manifest.json with the following university branding:
- App name: ADDU Alumni Connect
- Short name: ADDU App
- Theme color: #003087
- Background color: #ffffff
- Display mode: standalone
- Start URL: /
- Icons at /icons/icon-192x192.png and /icons/icon-512x512.png

--- TASK 3: Update vite.config.js ---
Open vite.config.js and add the VitePWA plugin from vite-plugin-pwa.
Configure it with registerType: 'autoUpdate', link it to the manifest
above, and set up a Workbox runtime caching strategy:
- CacheFirst for all images (png, jpg, svg, webp)
- StaleWhileRevalidate for all JS and CSS files

--- TASK 4: Update index.html ---
Open index.html and add the following inside the <head>:
- <link rel="manifest" href="/manifest.json" />
- <meta name="theme-color" content="#003087" />
- <meta name="apple-mobile-web-app-capable" content="yes" />
- <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

--- TASK 5: Create placeholder icons ---
Inside the public/icons/ folder, confirm or create the two required icon
files: icon-192x192.png and icon-512x512.png. If they don't exist, create
simple placeholder PNG files at the correct sizes so the manifest does not
throw errors.

--- TASK 6: Rewrite README.md ---
Overwrite the entire README.md file using exactly this structure and format:

#### Screenshots

**Home Page**
![Home Page](./images/Screenshot%202026-04-24%20024317.png)

**Alumni Network Dashboard**
![Alumni Network Dashboard](./images/Screenshot%202026-04-24%20024325.png)

**Donation Hub**
![Donation Hub Page](./images/Screenshot%202026-04-24%20024331.png)

**Career Opportunities**
![Career Opportunities Dashboard](./images/Screenshot%202026-04-24%20024336.png)

**Academic Records**
![Academic Records and Documents](./images/Screenshot%202026-04-24%20024342.png)


### PWA Conversion Log:

Files created or modified:
- `public/manifest.json` (created)
- `vite.config.js` (modified)
- `index.html` (modified)
- `public/icons/icon-192x192.png` (created)
- `public/icons/icon-512x512.png` (created)
- `create_icons.py` (created - temporary helper script)
- `README.md` (modified)

Hallucinations / Manual Fixes:
- No hallucinations - All tasks completed successfully
- vite-plugin-pwa installation required `--legacy-peer-deps` flag due to Vite 8.x compatibility
- Python script approach used for icon generation due to cross-platform compatibility

#### Build & Verification

To build and verify the PWA implementation:

```bash
npm run build
npm run preview
```


