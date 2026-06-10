# Kaliper — marketing website

Static marketing site for **Kaliper** (supply-chain AI agents for manufacturers).
Plain **HTML / CSS / JS** — no build step, no framework, no dependencies to install.
Just static files; serve the folder and it works.

## Run locally
Any static server works, e.g.:

```bash
# Python (built in on macOS/Linux)
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser (the demo form needs to be served over
http(s) to submit, but the page renders fine either way).

## Project structure
```
index.html              # the whole page (all sections, semantic HTML)
css/
  colors_and_type.css   # design-system tokens (colors, type)
  kaliper-site.css       # layout / component styles
  theme.css              # baked-in "cool" theme + responsive tweaks
js/
  app.js                 # all interactions + demo-form submission
assets/
  logo-symbol-circle.png
  hero/                  # 5 rotating hero photos (optimized, ~1600px)
  faces/                 # 9 agent avatars
```

## Deploy
It's a static site, so it works on any static host:

- **GitHub Pages** — push this folder to a repo, enable Pages on the `main`
  branch (root). A `CNAME` file can be added for the custom domain.
- **Netlify / Cloudflare Pages / Vercel** — drag-and-drop the folder or connect the repo.

### Custom domain (planned)
Target domain: **www.kalipers.com** (registered at GoDaddy).
After deploying, point GoDaddy DNS at the host (CNAME `www` → host, A/ALIAS for
the apex), and enable HTTPS on the host.

## Demo form → email
The "Book a demo" form submits via **Web3Forms** (https://web3forms.com).
The access key lives in `js/app.js`:

```js
var WEB3FORMS_ACCESS_KEY = "....";
```

Submissions are emailed to the address that key is registered to. This key is a
public, client-side key (safe to commit). To change the destination inbox,
create a new key at web3forms.com and replace it.

## Notes
- Hero photos were downsized from full camera resolution to ~1600px for fast
  loading. Originals are not included.
- No analytics or tracking is wired up yet.
