# 開発者向けガイド

## Project structure

- `src/App.vue`: 共通レイアウト、ナビゲーション、言語切り替え、フッター
- `src/pages/`: ルーティング単位の画面。`research/`、`publication/`、`activity/` のようにURL階層で分ける
- `src/components/ui/`: ページ見出しや読み込みスケルトンなど、ドメインに依存しないUI部品
- `src/features/research/components/`: 研究ページ専用の表示コンポーネント
- `src/features/members/components/`: メンバーページ専用の表示コンポーネント
- `src/features/publications/components/`: 論文ページ専用の表示コンポーネント
- `src/features/activities/components/`: アクティビティページ専用の表示コンポーネント
- `src/data/`: 編集するサイトデータと外部データ取得。マークアップは置かない
- `src/composables/`: 外部データの読み込みなど、状態を持つ処理
- `src/types/`: モジュール間で使うデータの型
- `src/utils/`: 翻訳や整形などの純粋な補助関数
- `src/texts_general.js`: 日本語・英語の翻訳文
- `src/styles.css`: 全体の見た目とレスポンシブ設定
- `public/res/`: 画像などの静的アセット

## 変更ルール

1. コンテンツやURLはテンプレートに直書きせず、`src/data/` に置く。
2. 外部JSONの項目を追加するときは、先に `src/types/` の型を更新する。
3. fetch・キャッシュ・エラー処理は `src/data/remoteContent.ts` と `src/composables/` に置く。
4. `pages` はルート単位の画面、`components/ui` は汎用UI、`features/*` はドメイン単位の表示・処理にする。
5. 表示文言は翻訳キーを使い、日本語・英語の両方を追加する。
6. 移行方針がない限り、既存のルートパスを維持する。

### 関数の書き方

- TypeScript/Vueの関数はアロー関数を基本とする。
- `map`、`computed`、watcherなどのコールバックもアロー関数にする。
- `function` 宣言は、外部ライブラリの規約や既存のレガシーコードを維持する必要がある場合だけ使う。

## ブランチ

- `main` を統合・デプロイ用のブランチとする。
- 作業ブランチには `feature/` 接頭辞を付ける（例: `feature/update-home`）。
- 作業ブランチからのPull Requestを推奨する。小さく低リスクな変更は状況に応じて `main` へ直接pushしてよい。

## チェック

Pull Requestの前に次を実行する:

```sh
vp check
vp build
```

Lefthookはコミット時に型チェックと本番ビルドを実行する。CIでは `vp install` または `pnpm install --frozen-lockfile` で依存関係をインストールする。
