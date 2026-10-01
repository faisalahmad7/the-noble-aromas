# The Noble Aromas (frontend demo)

React + Vite, plain JavaScript. No backend: bag, wishlist and login are stored in the browser only, and checkout is a demo (no payments, no orders).

## Run in VS Code
1. Open this folder in VS Code (File > Open Folder).
2. Open a terminal (Ctrl+`) and run: `npm install`
3. Start the dev server: `npm run dev`, then open the printed local URL.
4. Production build: `npm run build` (output in `dist/`).

## Structure
- `src/data/` 24 products, 3 combos, scent notes, sizes, constants
- Routes are hash-based: `#/` home, `#shop` shop page, `#/product/ID` product page
- `src/components/` one file per section or overlay
- `src/styles/` CSS split by section (imported in `src/main.jsx`)
- `src/assets/logo.webp` circular TNA logo

Prices are placeholders, and the shipping, returns and COD strip is placeholder text. Confirm the real policies before launch.
