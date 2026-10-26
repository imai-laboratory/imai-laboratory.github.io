# 開発者向けガイド

## Project structure

- `src/App.vue`: 共通レイアウト、ナビゲーション、言語切り替え、フッター
- `src/pages/`: ルーティング単位の画面。`research/`、`publication/`、`activity/` のようにURL階層で分ける
- `src/pages/*Styles.ts`: ページ直下に置くPandaスタイル。featureに属さないページ固有の見た目を置く
- `src/components/ui/`: ページ見出しや読み込みスケルトンなど、ドメインに依存しないUI部品
- `src/design-system/`: Panda CSSで定義する共通UIスタイルとデザイントークンの利用箇所
- `src/styles/global.ts`: Panda CSSのグローバル・ページレイアウト・レスポンシブ定義
- `src/features/research/`: 研究ページ専用の表示コンポーネントとPandaスタイル
- `src/features/members/`: メンバーページ専用の表示コンポーネントとPandaスタイル
- `src/features/publications/`: 論文ページ専用の表示コンポーネントとPandaスタイル
- `src/features/activities/`: アクティビティページ専用の表示コンポーネントとPandaスタイル
- `src/data/`: 編集するサイトデータと外部データ取得。マークアップは置かない
- `src/composables/`: 外部データの読み込みなど、状態を持つ処理
- `src/types/`: モジュール間で使うデータの型
- `src/utils/`: 翻訳や整形などの純粋な補助関数
- `src/texts_general.js`: 日本語・英語の翻訳文
- `src/styles.css`: Panda CSSの生成レイヤーを読み込むためのエントリポイント
- `public/res/`: 画像などの静的アセット

## 変更ルール

1. コンテンツやURLはテンプレートに直書きせず、`src/data/` に置く。
2. 外部JSONの項目を追加するときは、先に `src/types/` の型を更新する。
3. fetch・キャッシュ・エラー処理は `src/data/remoteContent.ts` と `src/composables/` に置く。
4. `pages` はルート単位の画面、`components/ui` は汎用UI、`features/*` はドメイン単位の表示・処理にする。
5. 表示文言は翻訳キーを使い、日本語・英語の両方を追加する。
6. 移行方針がない限り、既存のルートパスを維持する。
7. `vite.config.ts`の`cached-build`や`vp run`の実行方法を変更するときは、キャッシュの入力・出力追跡を確認する。

### スタイル

- デザイントークンと共通UI、ページ固有の見た目はPanda CSSで管理する。
- `src/styles/global.ts` にグローバル・レイアウト・レスポンシブ指定を置く。
- `src/styles.css` にはPandaのレイヤー宣言以外を書かない。
- 共通UIに新しい色・余白・角丸・影を追加するときは、まず `panda.config.ts` のtokenを検討する。

### 関数の書き方

- TypeScript/Vueの関数はアロー関数を基本とする。
- `map`、`computed`、watcherなどのコールバックもアロー関数にする。
- `function` 宣言は、外部ライブラリの規約や既存のレガシーコードを維持する必要がある場合だけ使う。

## ブランチ

- `main` を統合・デプロイ用のブランチとする。
- 作業ブランチには `feature/` 接頭辞を付ける（例: `feature/update-home`）。
- `main` へは直接pushせず、作業ブランチからPull Requestを作成する。

## チェック

Pull Requestの前に次を実行する:

```sh
vp check
vp run typecheck
vp run cached-build
pnpm format:check
```

Lefthookはコミット時に型チェックと本番ビルドを実行する。`vp run`経由の型チェックとビルドは、入力が変わっていない場合にVite+のタスクキャッシュを利用する。キャッシュを明示的に削除する場合は `vp cache clean` を実行する。CIでは `pnpm install --frozen-lockfile` で依存関係をインストールする。

### デプロイ確認

- 本番のGitHub Pages設定は、移行確認中は現在の公開元を変更しない。
- Pull RequestではCIが型チェック・フォーマット・ビルドを実行する。
- GitHub Pagesはリポジトリごとに公開先が1つで、`main`へのpush時に`deploy.yml`が本番へデプロイする。
- 本番のGitHub Pages設定は、Pagesの公開元をGitHub Actionsにした状態で維持する。
