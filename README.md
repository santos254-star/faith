# Pishori Rice — Website

Simple responsive static site to showcase and sell Pishori rice. Open `index.html` in a browser to view locally.

Setup

- Replace the placeholder WhatsApp number in `script.js` (`PHONE_NUMBER`) with your number in international format (no `+` or dashes). Example: `15551234567` for +1 555 123 4567.
- Open `index.html` in any browser or serve using a static server.

Quick local preview (recommended)

```powershell
python -m http.server 8000

# then open http://localhost:8000 in your browser
```

Deploy

- You can deploy this static site to GitHub Pages, Netlify, or Vercel. For GitHub Pages, push this folder to a repo and enable Pages on the `main` branch.

Notes

- Images used are hotlinked from Unsplash for demo purposes; consider replacing them with your own product photos in the `images/` folder and updating the `src` attributes.
- The WhatsApp integration opens the WhatsApp web/mobile chat. Ensure `PHONE_NUMBER` is set correctly.
