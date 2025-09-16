# 今井研究室 Webページ

URL: https://www.ailab.ics.keio.ac.jp

今井研究室の公式Webサイトです。

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Code Quality**: Biome
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages

## Commands

```bash
# パッケージのインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# 本番環境用ビルド
pnpm build

# 本番環境の起動
pnpm start
```

## コード品質管理

Biomeを使用してリント・フォーマット・import整理を行っています。

```bash
# Lintチェック
pnpm lint

# Lint自動修正
pnpm lint:fix

# フォーマット
pnpm format
```

## プロジェクト構造

```
├── app/[locale]/         # 国際化対応のページ
├── components/
│   ├── shared/           # 共通コンポーネント
│   └── ui/               # UIコンポーネント
├── i18n/                 # 国際化設定
├── lib/                  # ユーティリティ関数
├── messages/             # 翻訳ファイル
└── public/res/           # 画像・動画リソース
```

## 外部データ

メンバーと論文情報は外部リポジトリから動的に取得されます。

- メンバー情報: https://github.com/imai-laboratory/members_data
- 論文情報: https://github.com/imai-laboratory/publications_data
- 活動情報: https://github.com/imai-laboratory/activities_data

## 開発ガイドライン

- TypeScriptの`type`定義を使用（`interface`は避ける）
- Tailwind CSSによるスタイリング
- Next.js `Image`コンポーネントの使用（`<img>`タグ禁止）
- Biomeルールの遵守
- コンポーネントの再利用を重視

## デプロイメント

GitHub Actionsを使用して自動的にGitHub Pagesへデプロイされます。`main`ブランチへのマージ時に自動実行されます。
