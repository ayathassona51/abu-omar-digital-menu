# مشاوي أبو عمر — Digital TV Menu

An automatic, RTL restaurant menu board built with React, Vite, and Tailwind CSS. It is designed for a 1920×1080 landscape display, has no navigation or customer interaction, and loops through the welcome, category, and menu screens automatically.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Change the menu

All business data is in `src/data/menuData.js`:

- Change restaurant text in `restaurant`.
- Change the slideshow timing in `screenDurations` (milliseconds).
- Add, remove, reorder, or update categories in `categories`.
- Update every product's `name`, `description`, `price`, and `image` there.

The slideshow automatically turns a category with more than six products into further 8-second pages.

## Images

The board uses the supplied restaurant logo unchanged in `public/brand/abu-omar-logo-original.jpeg`, displayed through a circular viewport. The food photography currently uses high-resolution online images from Unsplash. Replace the supplied `image` URLs in `src/data/menuData.js` with your own licensed restaurant photography when ready.

## Deploy

Run `npm run build`, then deploy the generated `dist` folder to any standard static host. Vercel and Netlify can build directly using `npm run build` and publish `dist`.
