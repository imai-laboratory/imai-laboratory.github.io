# 今井研究室　Webページ

URL: http://www.ailab.ics.keio.ac.jp or https://imai-laboratory.github.io/webpage

`src`ディレクトリ内の[ReactJS](https://facebook.github.io/react/)で書かれたJSXファイルや、`res`ディレクトリ内の画像・動画ファイルを[Webpack](https://webpack.github.io/)によりまとめ`dist`ディレクトリへ出力、`gh-pages`ブランチへアップロードすることでWebページが公開されます。

## Commands
```
# Install essential packages
npm install

# Build for development
npm run develop
# Build for production
npm run production

# Run server for development (dynamic update)
npm run server

# Publish to Github-Pages (`master branch`)
npm run publish
```

## Lint
LinterとしてESLintを使用します。
設定ファイルは`.eslintrc.json`です。
編集後には必ずチェックを行ってください。
```
# Install (as global)
npm install -g eslint eslint-plugin-react eslint-plugin-promise eslint-plugin-import \
                      eslint-plugin-node eslint-plugin-standard

# Check
eslint src/*.js
```

## 外部データ
メンバと論文情報は外部リポジトリから動的に取得されます。
* メンバ情報　https://github.com/imai-laboratory/members_data
* 論文情報　https://github.com/imai-laboratory/publications_data

## その他
ReactJSと共に用いるUI Componentとして[Rebass](https://rebassjs.org/)を使用しています。

英語・日本語対応のためテキスト情報は`src/texts_general.js`へ記載し、各コンテンツ内でReactJSのプロパティとして参照します。
すなわち言語切り替えボタンを押すと動的にテキストが更新されます。

## TODO
- [ ] Citation in research pages.
- [x] Responsive design for menu bar.
- [ ] Multiple modes of webpack for uglify-js and source map.
- [x] URL routing for contents.
- [ ] URL routing for language switching.
- [ ] Language switching in publication pages.
- [ ] Improve responsive design in the member page.
- [x] Create a link page.
- [x] Create a link for B3 page.
