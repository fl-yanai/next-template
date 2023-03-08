---
name: 'features'
root: '.'
output: 'src/'
ignore: ['.']
questions:
  top:
    message: 'ディレクトリ名を入力してください(ex:about/contact/)'
  name:
    message: 'ファイル名を入力してください(ex:hooksの場合use**の**の部分)'
  apis:
    confirm: 'apisファイルを作成しますか？'
    initial: false
  apipatt:
    if: inputs.apis == true
    message: 'メソッドを選択してください(その他はotherを選び編集)'
    choices: ['get', 'post', 'put', 'delete', 'other']
  hooks:
    confirm: 'hooksファイルを作成しますか？'
    initial: false
  types:
    confirm: 'typesファイルを作成しますか？'
    initial: false
  constants:
    confirm: 'constantsファイルを作成しますか？'
    initial: false
  css:
    confirm: 'cssファイルを作成しますか(global.cssに上書きされます)'
    initial: false
---

# `{{inputs.apis || "!" }}features/{{inputs.top}}apis/{{inputs.apipatt}}{{inputs.name | pascal}}.ts`

```typescript
import axios from 'axios'

export const {{inputs.apipatt}}{{inputs.name | pascal}} = async () => {
  const res = {}
  return res
}

```

# `{{inputs.hooks || "!" }}features/{{inputs.top}}hooks/use{{inputs.name | pascal}}.ts`

```typescript
import { useState } from 'react'
{{if inputs.apis}}import { {{inputs.apipatt}}{{inputs.name | pascal}} } from '../apis/{{inputs.apipatt}}{{inputs.name | pascal}}'{{end}}
{{if inputs.constants}}import { CONSTANT{{inputs.name | upper}} } from '../constants/constant{{inputs.name | pascal}}'{{end}}
{{if inputs.types}}import { type{{inputs.name | pascal}} } from '../types/type{{inputs.name | pascal}}'{{end}}
export const use{{inputs.name | pascal}} = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchData = () => {
    setLoading(true)
    try{
    }catch(err){
      setErrorMessage("")
    }
    setLoading(false)
  }
  return { loading, errorMessage, fetchData}
}

```

# `{{inputs.types || "!" }}features/{{inputs.top}}types/type{{inputs.name | pascal}}.ts`

```typescript
export interface type{{inputs.name | pascal}} {}

```

# `{{inputs.constants || "!" }}features/{{inputs.top}}constants/constant{{inputs.name | pascal}}.ts`

```typescript
export const CONSTANT{{inputs.name | upper}} = {}

```

# `{{inputs.css || "!" }}features/{{inputs.top}}styles/style{{inputs.name | pascal}}.css`

```css

```

# `{{inputs.css || "!" }}{{resolve document.dir "../src/styles/globals.css"}}`

```css
{{ read output.abs }}@import '@/features/{{inputs.top}}styles/style{{inputs.name | pascal}}.css';

```
