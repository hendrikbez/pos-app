📱 Sales & POS System PWA
A lightweight, offline-capable Point of Sale system built as a Progressive Web App (PWA). This app transforms a simple HTML interface into a fully installable Android application using GitHub Pages without requiring the Play Store or complex development tools.

https://img.shields.io/badge/PWA-optimized-blue
https://img.shields.io/badge/GitHub%2520Pages-deployed-brightgreen
https://img.shields.io/badge/Offline-Capable-orange

✨ Features
📦 Zero-Install Deployment - Deploy directly from GitHub Pages

📱 Native App Experience - Install on Android as a standalone app

⚡ Offline Functionality - Works without internet connection

🔄 Auto-Updates - Updates automatically when files change on GitHub

🔧 Simple Setup - No build tools or complex configuration needed

🔒 No App Store Required - Bypass Play Store restrictions entirely

🚀 Quick Start
Prerequisites
GitHub account

POS app HTML/CSS/JS files

Google Chrome on Android

Two PNG icons (192×192 and 512×512)

Deployment Steps
Create Repository

bash
# Clone or create your repository
git clone https://github.com/yourusername/pos-app
Add Required Files to repository root:

index.html (lowercase - very important)

manifest.json

sw.js (service worker)

sale_192.png (192×192 icon)

sale_512.png (512×512 icon)

Enable GitHub Pages

Go to Settings → Pages

Select "Deploy from a branch"

Branch: main, Folder: / (root)

Save and wait ~1 minute

Install on Android

Open https://yourusername.github.io/pos-app/ in Chrome

Wait 10-15 seconds

Chrome menu → "Install app"

Confirm installation

📁 File Structure
text
pos-app/
├── index.html              # Main application (must be lowercase!)
├── manifest.json           # PWA configuration
├── sw.js                  # Service worker for offline functionality
├── sale_192.png           # Small app icon (192×192)
└── sale_512.png           # Large app icon (512×512)
⚙️ Configuration
manifest.json - Essential Configuration
json
{
  "name": "Sales & POS System",
  "short_name": "POS",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#2a7b9b",
  "theme_color": "#2a7b9b",
  "icons": [
    {
      "src": "sale_192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "sale_512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
index.html - Required Head Section
Make sure your HTML includes:

html
<head>
  <!-- Other meta tags and links -->
  <link rel="manifest" href="manifest.json">
  <!-- This line must be inside <head>, never in <body> -->
</head>
🛠️ Troubleshooting
Common Issues & Solutions
Issue	Solution
404 error when accessing GitHub Pages	Ensure your main file is named index.html (lowercase, not Index.html)
"Add to Home screen" appears instead of "Install app"	Clear Chrome site data and retry. Also ensure icons have padding (don't touch edges)
App doesn't work offline	Check sw.js service worker implementation and cache version
Manifest changes not reflected	Users must reinstall the app after manifest.json updates
Icons not showing in installation	Verify icon paths in manifest and ensure proper PNG formatting
Icon Design Rule
Important: Your icon image must not touch the edges. Leave padding around the logo or Chrome will refuse to install the app and only show "Add to Home screen".

🔄 Updating Your App
HTML/CSS/JS updates: Apply automatically to installed apps

Service worker updates: Increase cache version in sw.js

Manifest changes: Require users to reinstall the app

Content updates: Simply push changes to GitHub - they'll propagate automatically

🌐 Accessing Your App
Do NOT use github.com URLs for installation!

Use the GitHub Pages URL:

text
https://yourusername.github.io/pos-app/
💡 Technical Details
Technology: Progressive Web App (PWA)

Languages: HTML (99.4%), JavaScript (0.6%)

Hosting: GitHub Pages

Offline Strategy: Service Worker with versioned cache

Update Mechanism: Network-first strategy with cache fallback

📝 Notes
This setup completely bypasses traditional app stores

The app updates automatically when you push changes to GitHub

Works on any Android device with Chrome

No development certificates or signing required

Perfect for internal business tools or simple POS systems

🤝 Contributing
Feel free to fork this repository and adapt it for your specific POS needs. The simple structure makes it easy to customize for various business requirements.

📄 License
This project is open source and available for modification and distribution.

✨ Pro Tip: For best results, test the installation on your target Android devices before deploying to production. The PWA technology ensures a native-like experience with minimal maintenance overhead.

Last updated: December 2025
