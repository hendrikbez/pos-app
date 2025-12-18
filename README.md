# 📱 HTML to Android App using GitHub Pages & PWA

## Purpose

This document explains **step by step** how to turn a **local HTML application** into a **real installable Android app** using **GitHub Pages** and **Progressive Web App (PWA)** technology.

It includes:
- The exact file structure required
- Correct configuration examples
- Common mistakes that cause installation to fail
- Real issues encountered during setup and how to avoid them

No Play Store account is required.

---

## What You Need

- A **GitHub account**
- Your **HTML app files**
- **Google Chrome on Android**
- **Two PNG icons**:
  - `192 × 192`
  - `512 × 512`

---

## Correct File List (VERY IMPORTANT)

Your GitHub repository **root folder** must contain **exactly** these files:

```
/ (root)
│── index.html
│── manifest.json
│── sw.js
│── sale_192.png
│── sale_512.png
```
## ⚠️ Common Mistake to Avoid

GitHub Pages only loads index.html (lowercase).

* ❌ Index.html
* ❌ INDEX.html
* ✅ index.html

If the filename is wrong, GitHub Pages will return a 404 error and the app will never install.
##
## index.html — Required <head> Section

Your HTML must include the manifest link inside the <head> section:

<link rel="manifest" href="manifest.json">

Rules:
* 🔴 Never place this inside <body>
* 🔴 Do not load it dynamically
##
### Service Worker Script Placement

All JavaScript must be inside proper <script> tags.

Correct example:
```
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}
</script>
```
If Service Worker code appears as text on the page, the <script> tag is broken or missing.

## 🎨 Important Icon Rule (CRITICAL)

Your app icon must NOT touch the edges of the image.
* Leave padding around the logo
* Center it inside the PNG

If the icon touches the edges:
* Chrome will refuse to install the app
* Only “Add to Home screen” will appear
* “Install app” will never show

This is one of the most common silent failures.
##
### Create the GitHub Repository

1. Create a new public repository
2. Upload all required files
3. Commit to the main branch
##
### Enable GitHub Pages
1. Go to Settings → Pages
2. Under Deploy from a branch:
   * Branch: main
   * Folder: / (root)
3. Click Save
4.Wait about 1 minute
###
### Correct URL to Use

❌ Do NOT use:
```
https://github.com/USERNAME/REPO
```
## ✅ Use the GitHub Pages URL:
```
https://USERNAME.github.io/REPO/
```
Only the GitHub Pages URL supports:
* HTTPS
* Service Workers
* App installation
###
## Android Installation Steps
1. Open the GitHub Pages URL in Chrome
2. Wait 10–15 seconds
3. Open the Chrome menu
4. Tap Install app
5. Confirm installation
   
If only “Add to Home screen” appears:
* Clear Chrome site data
* Reload the page
* Wait again
* Retry installation
##
### Updating the App
* HTML / CSS / JavaScript changes apply automatically
* If you modify sw.js, increase the cache version
* If you modify manifest.json, users must reinstall the app

### Final Notes
* No Play Store required
* Works offline
* Updates are delivered directly from GitHub Pages
* This method creates a real Android app experience





