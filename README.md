# Morse Code Translator

A tiny web app that converts plain text to **Morse code** using the public Fun Translations API. Built with vanilla **HTML/CSS/JavaScript**—no frameworks required.

> Demo locally by opening `index.html` in your browser, or serve it with any static file server.

---

## ✨ Features
- Convert any text input to **Morse code**
- One‑click translate button
- Clean, minimal UI
- Works entirely in the browser

## 🧱 Tech Stack
- **HTML** for structure
- **CSS** for styling
- **JavaScript (vanilla)** for DOM + API calls
- **API:** `https://api.funtranslations.com/translate/morse.json`

## 📂 Project Structure
```
morse-code-main/
├── index.html      # App markup
├── styles.css      # Styling
├── app.js          # Logic + API integration
└── README.md
```

## 🚀 Run Locally
No build step needed.

**Quick start (double‑click):**
1. Clone or download this repo.
2. Open `index.html` in your browser.

**Serve with a static server (recommended):**
```bash
# Option 1: Python (3.x)
python -m http.server 5500
# visit http://localhost:5500

# Option 2: Node (http-server)
npx http-server -p 5500
# visit http://localhost:5500
```

## 🧪 Usage
1. Type your message into the **input** box (element id: `input-txt`).
2. Click **Translate** (button id: `button-translate`).
3. The Morse code output appears below (textarea id: `output-txt`).

## 🔌 API Notes
- The app calls: `https://api.funtranslations.com/translate/morse.json?text=...`
- The free tier of this public API is **rate‑limited**. If you see errors, wait a bit and try again or proxy the request via your own backend.

## 🐞 Troubleshooting
- **CORS / network errors:** serve the files via a local server (see above).
- **API limit reached:** the public endpoint has strict limits; consider a server proxy if needed.
- **Nothing happens on click:** check the browser console—`app.js` attaches a click handler to `#button-translate` and reads from `#input-txt`.

## 🤝 Contributing
PRs and small improvements are welcome. If you plan larger changes, please open an issue to discuss first.

## 📄 License
Add a `LICENSE` file if you want to specify terms. (MIT is a common choice for small web apps.)
