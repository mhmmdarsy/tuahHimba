React + Express setup (Tuah Himba)

Overview
- client: React (Vite) SPA rendering Navbar, Hero, Sejarah, Koleksi (Swiper), Lokasi, Footer.
- server: Express API connected to MySQL, exposes GET /api/koleksi.

Prerequisites
- Node.js 18+
- MySQL access (fill .env in server)

Setup
1) Backend API
   - cd server
   - copy .env.example to .env and set DB_HOST/DB_USER/DB_PASSWORD/DB_NAME
   - npm install
   - npm run dev  (or npm start)

   API endpoints:
   - GET http://localhost:5174/api/health
   - GET http://localhost:5174/api/koleksi  -> returns [{ id, judul, gambar }]

2) Frontend SPA
   - cd client
   - npm install
   - npm run dev
   - Vite will print a local URL (default http://localhost:5173)

Assets (images/icons)
- Copy the existing repo folder `assets` into `client/public/` so it becomes `client/public/assets`.
  This allows the app to reference images at /assets/... while running under Vite.

Environment variable (frontend)
- To point the app to a non-default API base, create `client/.env` and set:
  VITE_API_BASE=http://localhost:5174

Notes
- Direct DB access from the browser is not possible; the backend mediates MySQL access.
- Swiper is loaded from CDN globally and initialized by the Koleksi component.