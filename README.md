# Imai Laboratory Website

Imai Laboratory のWebサイトです。

公開サイト: [www.ailab.ics.keio.ac.jp](https://www.ailab.ics.keio.ac.jp/)

## 外部ソース

ページ表示時に、次のリポジトリからデータを読み込みます。

- [メンバーデータ](https://github.com/imai-laboratory/members_data)
- [論文データ](https://github.com/imai-laboratory/publications_data)
- [活動データ](https://github.com/imai-laboratory/activities_data)

研究紹介動画の一部は[B3向け情報サイト](https://www.ailab.ics.keio.ac.jp/welcome-junior/)の素材を参照しています。

## システム構成

```mermaid
flowchart LR
    visitor[閲覧者]

    subgraph runtime[実行時]
        pages[GitHub Pages<br/>www.ailab.ics.keio.ac.jp]
        app[Vue 3 + Vue Router]
        sources[外部JSON<br/>members / publications / activities]
        assets[静的アセット<br/>画像・動画・CNAME]
        pages --> app
        app --> sources
        app --> assets
    end

    subgraph delivery[CI / CD]
        ci[CI<br/>typecheck + build]
        cd[CD<br/>GitHub Pagesへdeploy]
        ci --> cd
    end

    visitor --> pages
    cd --> pages

    classDef runtimeStyle fill:#e9f7ff,stroke:#2b9dcc,color:#17354a
    classDef deliveryStyle fill:#fff3df,stroke:#d99027,color:#5a3a0b
    class runtime,pages,app,sources,assets runtimeStyle
    class delivery,ci,cd deliveryStyle
```

外部ソースのURLと取得処理は `src/data/` に集約しています。

## Requirements

- Node.js 26.12.1（mise で固定）
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

## 開発手順

変更は、`feature/` で始まる作業ブランチを作成し、Pull Request を経由する運用を推奨します。小さな修正など、状況に応じて直接pushすることもできます。

```sh
git switch -c feature/your-change
vp dev
vp check
vp build
git push -u origin feature/your-change
```

コミット時には Lefthook が型チェックと本番ビルドを自動実行します。チェックを通過しないコミットは作成されません。依存関係を更新した後など、hook を再登録する場合は次を実行します。

```sh
pnpm lefthook install
```

本番ビルド・チェック:

```sh
vp build
vp check
pnpm format:check
```

## デプロイ

1. メンバー、論文、活動情報は、実行時に元の `imai-laboratory/*_data` リポジトリから読み込みます。
2. GitHub Pagesは `main` へのpushでデプロイされます。Pagesの公開元が **GitHub Actions** になっていることを確認してください。
3. 独自ドメイン設定の `CNAME` は `public/CNAME` に配置しています。
4. 本番反映前に、既存ルート、メディアURL、外部JSONエンドポイントを確認してください。
5. マージ前に `vp install` とロックファイルの更新を行い、リポジトリ環境で `vp build` と `vp check` を実行してください。
