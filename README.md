# Clipboard Playground

**https://clipboard.elliat.nl/**

A single-file playground for mucking about with the browser Clipboard API:

- **Paste** into the box to dump every MIME type on the clipboard, with its content (images get previews)
- **Read** the clipboard via `navigator.clipboard.read()` / `readText()` (needs the clipboard permission and a focused tab)
- **Write** arbitrary MIME types — `text/html`, `web text/html`, `application/vnd.fontoxml`, `application/xml`, … Text is written as a Blob of that type; a `data:` URL is written as binary (e.g. `image/png`)
- Every pasted/read item has a "queue in writer" button, so the loop is: paste → inspect → edit → write back

Gotcha baked into the UI: Chrome only accepts `text/plain`, `text/html`, `image/png` and `web …`-prefixed custom formats, so vendor types like `application/vnd.fontoxml` need the `web ` prefix there. The Clipboard API requires a secure context — the deployed HTTPS site, or `http://localhost` in dev.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Deploy

GitHub Pages, built and deployed by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

Custom domain `clipboard.elliat.nl` is configured in Settings → Pages (the `CNAME` file in this repo). DNS: `clipboard.elliat.nl` → `drrataplan.github.io.` (CNAME record; DNS-only if proxied through Cloudflare).
