## 階層

```
├── components
│   ├── README.md
│   ├── layouts
│   ├── pages
│   └── parts
│       ├── elements
│       └── modules
```

## pages について

特定のページのみに使われるコンポーネントを格納

## parts ディレクトリ構成

基本的にここで定義したコンポーネントを参照しページを構成する

### コンポーネント化しないもの

- 見出し、テキストそのもの
  - 共通の CSS にスタイルを記述してクラスで見た目を制御する
    - styles/global.css に記載

### elements

- 単一の UI コンポーネントを格納
- 基本的にすべての UI は parts の中に定義される
- 基本的に parts 同士での参照はしない
- 種別やタグごとにフォルダ分けする(buttons,inputs,select タグ,button タグ など)
- 細かな見た目の違いは props で管理し、コンポーネントをむやみに増やさない

### modules

- 大きな UI の塊で構成される
- pages 内で複数使われているものを格納する
- 種別ごとにフォルダ分けする(buttons,inputs など)
- modules の各要素を分解すると elements の群になる

## コンポーネント作成のルール

- コンポーネント名は 2 単語以上推奨
- コンポーネント名はアッパーキャメルケースで統一
- コンポーネント名は単数形に統一
- export default で定義する
