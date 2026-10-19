# Contributor guide

## Project structure

- `src/App.vue`: shared layout, navigation behavior, language switcher, and footer
- `src/pages/`: route-level UI (`HomePage.vue`, `ContentPage.vue`)
- `src/data/`: editable site data and remote data access; do not put markup here
- `src/composables/`: stateful loading and page behavior shared by views
- `src/types/`: TypeScript models for data exchanged between modules
- `src/utils/`: pure helper functions such as localization
- `src/texts_general.js`: Japanese and English translation strings
- `src/styles.css`: global visual styles and responsive rules
- `public/res/`: static images and other public assets

## Change guidelines

1. Keep content and URLs in `src/data/` instead of embedding them in templates.
2. Add or update a type in `src/types/` before using a new external JSON field.
3. Keep fetch/cache/error handling in `src/data/remoteContent.ts` and `src/composables/`.
4. Keep page files focused on rendering and route-specific UI.
5. Use translation keys for user-facing text; add both Japanese and English strings.
6. Preserve the existing route paths unless a migration plan explicitly changes them.

## Checks

Run these before opening a Pull Request:

```sh
vp check
vp build
```

Lefthook runs type checking and the production build at commit time. Dependencies are installed with `vp install` or `pnpm install --frozen-lockfile` in CI.
