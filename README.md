# chaeri.net

Chaeri Jung's personal blog & portfolio site, built with [Astro](https://astro.build).

## Where this came from

- The skeleton (structure, content collections, page routing) is based on the [Dante](https://github.com/JustGoodUI/dante-astro-theme) theme.
- The design (colors, fonts, card styles, home hero, etc.) was reworked based on the visual style of the [astro-wanderer](https://github.com/igagansingh/astro-wanderer) theme.
- All content (posts, projects, papers, etc.) is original.

## Running it

```sh
npm install
npm run dev       # localhost:4321
npm run build     # builds to ./dist
npm run preview   # preview the production build
```

With Docker:

```sh
docker compose up
```

## Key files

- `src/data/site-config.ts` — name, bio, social links, home hero copy
- `src/content/` — blog posts, projects, papers, datasets, patents
- `src/styles/global.css` — design tokens (colors, fonts, etc.)
