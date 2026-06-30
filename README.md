# Greativo — Virtuális Asszisztencia weboldal

Egyoldalas React + Tailwind weboldal, Vite-tal felépítve. Build tesztelve, működik.

## Indítás Claude Code-ban

```bash
npm install
npm run dev
```

Ez elindít egy helyi szervert (alapértelmezetten `http://localhost:5173`), ahol élőben látod és szerkesztheted az oldalt.

## Build éles verzióhoz

```bash
npm run build
```

A kész, statikus fájlok a `dist/` mappába kerülnek — ezt tudod feltölteni bármilyen tárhelyre (Netlify, Vercel, Cloudflare Pages, stb.).

## Struktúra

- `src/App.jsx` — a teljes egyoldalas tartalom (Hero, Szolgáltatások, Referenciák, Csomagok, Kapcsolat)
- `src/index.css` — Tailwind belépő fájl
- `public/images/` — a 6 referencia-screenshot (folders.png, gmail.png, szamlak.png, naptar.png, utazas.png, riport.png)
- `tailwind.config.js` — színpaletta (navy `#1F2A44`, forest `#3B6E5E`, cream `#FAFAF8`)

## Amit érdemes lehet még Claude Code-ban finomítani

- Saját logó/favicon hozzáadása (jelenleg csak szöveges "GREATIVO" felirat van)
- A `images/utazas.png` elég széles screenshot — érdemes lehet kivágni/élesebb verzióra cserélni mobil nézethez
- Ha saját domain lesz, az `index.html` meta tagjeit (title, description) érdemes frissíteni
