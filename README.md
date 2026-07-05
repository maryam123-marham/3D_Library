# The Shelf — A 3D Library

A walkable, wooden 3D bookshelf built with React, Vite, Tailwind CSS, and
react-three-fiber (Three.js). Browse four categorized tiers of real books,
open any spine to read a preface with an animated page turn, and keep track
of what you've saved or borrowed.

## Features

- **Real 3D wooden bookshelf** — side panels, back panel, horizontal planks,
  crown molding, a plinth with brass feet, brass bookends, and top
  ornaments (potted plant, brass globe, book stack), grounded with a
  contact shadow so it stands on the floor rather than floating.
- **Four categorized tiers** — Programming, History, Fiction, and Science,
  each with an engraved brass nameplate and 5–6 titles.
- **Interactive spines** — hover or click a book to ease it forward off
  the shelf; click to open its detail panel.
- **Search & filter** — a search bar and genre pills dim every book on the
  shelf that doesn't match, live, in 3D.
- **Book reader with page-turn animation** — open any book to a title page,
  then flip through an original two-paragraph preface, a contents page, and
  a closing page using a real CSS 3D hinge animation.
- **Reading list** — save books to a dedicated list, accessible from the
  navbar, with one click to remove.
- **Borrowed list** — borrow a book from its detail panel, then see every
  currently borrowed title in a dedicated panel (also from the navbar),
  with a one-click Return.
- **Persistent state** — saved and borrowed books are stored in
  `localStorage`, so they survive a page refresh.

  **ScreenShots**
  <img width="960" height="436" alt="image" src="https://github.com/user-attachments/assets/8dcfd571-0925-45d7-ae99-0d89706e73fa" />

  <img width="284" height="429" alt="image" src="https://github.com/user-attachments/assets/64a059ce-1d42-42b8-b811-c4ef16a6d652" />

<img width="960" height="439" alt="image" src="https://github.com/user-attachments/assets/fb812434-33d3-4222-9cc5-10f7fdf2fc95" />



## Run it

```bash
npm install
npm run dev
```

**Live Preview**
Link : https://3d-library-store.netlify.app/

## Interactions

- **Drag** to orbit around the shelf.
- **Hover / click** a spine to ease it forward off the shelf.
- **Click** a spine to open its detail panel.
- In the detail panel: **📖 Read preface** opens the page-turn reader;
  **♡ Save** / **Borrow book** update the reading and borrowed lists.
- **♥ N saved** (navbar) opens the reading list.
- **⛁ N borrowed** (navbar) opens the borrowed list, with a **Return**
  button per book.
- The search bar and genre pills dim any book on the shelf that doesn't
  match your query.

## Editing the catalogue

Add or edit titles in `src/data/books.json`. Each entry needs:

- `shelf` — 1 to 4, mapping to the tiers above
- `color` / `textColor` — hex values for the spine and its title text
- `thickness` / `height` — size in meters on the shelf
- `preface` — an array of two short paragraphs shown on the reader's
  preface pages

## Tech stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 3.x
- [Three.js](https://threejs.org/) via
  [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) and
  [@react-three/drei](https://github.com/pmndrs/drei)

  ## Author
  **Maryam Nabeel**
