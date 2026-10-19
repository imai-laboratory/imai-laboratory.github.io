# 開発者向けガイド

## Project structure

- `src/App.vue`: 共通レイアウト、ナビゲーション、言語切り替え、フッター
- `src/pages/`: ルーティング単位の画面。`research/`、`publication/`、`activity/` のようにURL階層で分ける
- `src/components/`: ページ内で分割した表示コンポーネント
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
4. `pages` はルート単位の画面、`components` は画面内の表示単位にする。
5. 表示文言は翻訳キーを使い、日本語・英語の両方を追加する。
6. 移行方針がない限り、既存のルートパスを維持する。

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
