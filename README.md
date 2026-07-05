# The Shelf — A 3D Library

A walkable, wooden 3D bookshelf built with React, Vite, Tailwind CSS, and
react-three-fiber (Three.js).

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Shelf layout

- Tier 1 (bottom): **Programming**
- Tier 2: **History**
- Tier 3: **Fiction**
- Tier 4 (top): **Science**

Each tier carries an engraved brass nameplate and brass bookends, and holds
5–6 titles with names printed on their spines. The frame sits on a plinth
with brass feet and contact shadows so it reads as standing on the floor,
not floating.

## Interactions

- Drag to orbit around the shelf.
- Hover or click a spine to ease it forward off the shelf.
- Click a spine to open its detail panel — save it or borrow it.
- Use the search bar or genre pills to dim every book that doesn't match.

## Editing the catalogue

Add or edit titles in `src/data/books.json`. Each entry needs `shelf` (1–4,
mapping to the tiers above), a hex `color`/`textColor`, and a `thickness` /
`height` in meters to control its size on the shelf.
