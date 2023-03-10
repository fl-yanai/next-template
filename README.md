## このフォルダを使うとき

#### クローン

```bash
git clone https://github.com/fl-yanai/next-template.git projectName
or
git clone git@github.com:fl-yanai/next-template.git projectName
```

#### .git フォルダを削除

## ローカルで開発を始めるとき

#### パッケージのインストールなど

```bash
yarn install
```

#### サーバーを立ち上げる

```bash
yarn dev
```

#### 新しいファイルを作るとき(.scaffdog)

components、pages、features、constants ファイルを新規作成する場合は以下コマンドを使用

```bash
yarn scaffdog generate
```

## ディレクトリ構成

構成は次の記事を参考にしている

[React のディレクトリ構造パターン例](https://www.nitaking.dev/react-directory-structure-2021)

## ディレクトリ構成

### /src/components

アプリケーションで利用する汎用的なコンポーネントを保存

components 配下のディレクトリに関する説明は、ディレクトリ内の README を参照

### /src/features

特定の api へのアクセサや定数、types、hooks、conmopents、styles などを保存

### /src/libs

ライブラリの設定や設定済みインスタンスを export するファイルなどを保存

### /src/pages

Next のページコンポーネントを保存

### /src/styles

プロジェクト全体で使うスタイルを保存(tailwindcss 使用)

### /src/types

プロジェクト全体で使う型情報を保存

### /src/constants

アプリで使う定数を保存

### /src/utils

汎用的なユーティリティ関数を保存

## その他

### .storybook

scaffdog で各コンポーネントごと自動で作られる

コマンド

```bash
yarn storybook
```

### .vscode

eslint,prettier の自動フォーマットを行う

### tailwind.config.js

- clamp-\*\*-[minSize,maxSize,minDisplayWidth,maxDisplyaWidth]で clamp を設定してくれる

### package.json

パッケージは随時アップデート

```bash
yarn package:upgrade
```
