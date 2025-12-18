Purpose

This document explains, step by step, how to turn a local HTML file into a real Android app using

GitHub Pages and Progressive Web App (PWA) technology. It includes all pitfalls that were

encountered and how to avoid them.


What You Need

• A GitHub account

• Your HTML app files

• Google Chrome on Android

• Two PNG icons: 192×192 and 512×512


Correct File List

Your repository must contain these files in the root:

• index.html (lowercase – very important)

• manifest.json

• sw.js

• sale_192.png

• sale_512.png

Common Mistake to Avoid


GitHub Pages only loads index.html (lowercase). Index.html with a capital I will cause a 404 error.

index.html – Required Head Section

Your head section must include the manifest link:

link rel="manifest" href="manifest.json"

This line must be inside head, never in body.

Service Worker Script Placement


means the script tag is broken or missing.

manifest.json – Correct Minimal Example

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


Important Icon Rule

Your icon image must not touch the edges. Leave padding around the logo or Chrome will refuse to

install the app and only show Add to Home screen.

Create GitHub Repository

1. Create a new public repository
2. 
3. Upload all files
4. 
5. Commit to main branch
6. 
Enable GitHub Pages

Settings → Pages → Deploy from a branch

Branch: main

Folder: / (root)

Save and wait 1 minute

Correct URL to Use

Do not use github.com URLs.

Use the GitHub Pages URL:

https://USERNAME.github.io/REPO/

Android Installation

1. Open the GitHub Pages URL in Chrome
2. 
3. Wait 10–15 seconds
4. 
5. Chrome menu → Install app
6. 
7. Confirm install
8. 
If only Add to Home screen appears, clear Chrome site data and retry.

Updating the App

HTML, CSS, and JS updates apply automatically.

If sw.js changes, increase the cache version.
If manifest.json changes, users must reinstall the app.
Final Notes
This setup does not require the Play Store. The app updates directly from GitHub Pages and works
offline.
