# Imai Laboratory Website (Vue migration)

React 16 / Webpack 3 から Vue 3 + Vue Router + Vite+ へ移行するための作業ブランチ用プロジェクトです。ページの内容と外部データソースは維持しつつ、Liquid Glass の視覚表現を追加しています。

## Requirements

- Node.js 26.10.0 (2026-10-19 時点の最新 Current、mise で固定)
- Vite+ (`vp`) と pnpm

Vite+ が未導入なら、macOS/Linux で以下を実行します。

```sh
curl -fsSL https://vite.plus | bash
```

プロジェクトルートで依存関係をインストールして起動します。依存関係のバージョンは、実行時依存を固定し、開発用依存は同一メジャーバージョン内で更新できるようにしています。

```sh
mise install
vp install
vp dev
```

## Development workflow

日常の変更は `main` に直接 push せず、作業ブランチから Pull Request を作成します。

```sh
git switch -c codex/your-change
vp dev
vp check
vp build
git push -u origin codex/your-change
```

コミット時には Lefthook が型チェックと本番ビルドを自動実行します。チェックを通過しないコミットは作成されません。依存関係を更新した後など、hook を再登録する場合は次を実行します。

```sh
pnpm lefthook install
```

本番ビルド・チェック:

```sh
vp build
vp check
```

## Architecture

- `src/App.vue`: navigation, language switcher, shared layout
- `src/pages/HomePage.vue`: home page
- `src/pages/ContentPage.vue`: existing routes, member/publication/activity JSON loading
- `src/texts_general.js`: existing Japanese/English copy retained from the original site
- `public/res/`: original image and video assets
- `panda.config.ts`: Panda CSS v2 configuration
- `mise.toml`: Node.js / pnpm tool versions
- `lefthook.yml`: pre-commit type checking and production build
- `.github/workflows/ci.yml`: CI for every branch push and Pull Request to `main`
- `.github/workflows/deploy.yml`: GitHub Pages Actions deployment workflow

## Notes before production deployment

1. The members, publications, and activities are still loaded from the original `imai-laboratory/*_data` repositories at runtime.
2. The Pages workflow deploys on pushes to `main`. Confirm the repository's Pages source is set to **GitHub Actions**.
3. The original custom-domain `CNAME` is carried into `public/CNAME`.
4. Verify every legacy route, media URL, and externally hosted JSON endpoint before replacing the live site. In particular, the five legacy research category routes remain supported but should be reviewed against the current production content.
5. Run `vp install` and commit the generated lockfile before merging, then validate `vp build` and `vp check` in the repository environment.

## Design

The page layout and existing content hierarchy are kept familiar. Liquid Glass styling is applied through translucent surfaces, restrained backdrop blur, hairline borders, layered shadows, soft blue gradients, and responsive navigation. Reduced-motion preferences are respected.
