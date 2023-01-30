# clone したとき

.git フォルダを削除して新しいプロジェクト名に変更

# ローカルで開発を始めるとき

## パッケージのインストールなど

```bash
yarn install
```

## サーバーを立ち上げる

```bash
yarn dev
```

# ディレクトリ構成

## /src/components

アプリケーションで利用するコンポーネントを保存
components 配下のディレクトリに関する説明は、ディレクトリ内の README を参照

## /src/features

ある特定の機能、ドメインでしか使わない api へのアクセサや定数、型、hooks などを保存

## /src/libs

ライブラリの設定や設定済みインスタンスを export するファイルを保存

## /src/pages

Next のページコンポーネントを保存

## /src/styles

スタイルを保存(tailwindcss 使用)

## /src/types

型情報を保存

# その他

## .vscode

eslint,prettier の自動フォーマットを行う
