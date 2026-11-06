# Atelier Koka website

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/RAYMAN720/atelier-koka-site)

Vintage editorial tattoo/art website adapted for **AKASTEVE / Atelier Koka**, Fribourg, Switzerland.

## Current real details
- Artist: AKASTEVE
- Instagram: https://www.instagram.com/atelier_koka.fribourg/
- City: Fribourg, Switzerland
- Logo: `assets/instagram/atelier-koka-mark.jpg`

## Run locally
```bash
python3 -m http.server 8080
```
Then open http://localhost:8080

## Portfolio and booking
- Original flash sheets, tattoo photos and branding are stored in `assets/instagram/`.
- `assets/instagram/sources.json` records the original Instagram sources.
- Portfolio images link to their original posts. Confirm flash availability with the artist.
- Booking links open the artist's Instagram profile; there is no message submission backend.
- English and French are available through the language switcher.

## Deployment
The site is static HTML, CSS and JavaScript, with no build step or dependencies.
The included `render.yaml` configures a Render static site. A connected Render
service may automatically deploy when changes are pushed to GitHub.
