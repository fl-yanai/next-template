---
name: 'features'
root: '.'
output: 'src/'
ignore: ['.']
questions:
  top:
    message: 'ディレクトリ名を入力してください'
  apis:
    confirm: 'apisファイルを作成しますか？'
    initial: false
  apipatt:
    if: inputs.apis == true
    message: 'メソッドを選択してください(その他はotherを選び編集)'
    choices: ['get', 'post', 'update', 'delete', 'other']
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

# `{{inputs.apis || "!" }}features/{{inputs.top}}/apis/{{inputs.apipatt}}{{inputs.top | split "/" | slice -1 | pascal}}.ts`

```typescript
import axios from 'axios'

export const {{inputs.apipatt}}{{inputs.top | split "/" | slice -1 | pascal}} = async () => {
  const res = {}
  return res
}

```

# `{{inputs.hooks || "!" }}features/{{inputs.top}}/hooks/use{{inputs.top | split "/" | slice -1 | pascal}}.ts`

```typescript
import { useState } from 'react'
{{if inputs.apis}}import { {{inputs.apipatt}}{{inputs.top | split "/" | slice -1 | pascal}} } from '../apis/{{inputs.apipatt}}{{inputs.top | split "/" | slice -1 | pascal}}'{{end}}
{{if inputs.types}}import { type{{inputs.top | split "/" | slice -1 | pascal}} } from '../types/type{{inputs.top | split "/" | slice -1 | pascal}}'{{end}}
{{if inputs.constants}}import { constant{{inputs.top | split "/" | slice -1 | pascal}} } from '../constant/constant{{inputs.top | split "/" | slice -1 | pascal}}'{{end}}
export const use{{inputs.top | split "/" | slice -1 | pascal}} = () => {
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

# `{{inputs.types || "!" }}features/{{inputs.top}}/types/type{{inputs.top | split "/" | slice -1 | pascal}}.ts`

```typescript
export interface type{{inputs.top | split "/" | slice -1 | pascal}} {}

```

# `{{inputs.constants || "!" }}features/{{inputs.top}}/constants/constant{{inputs.top | split "/" | slice -1 | pascal}}.ts`

```typescript
export const CONSTANT{{inputs.top | upper}} = {}

```

# `{{inputs.css || "!" }}features/{{inputs.top}}/styles/style{{inputs.top | split "/" | slice -1 | pascal}}.css`

```css

```

# `{{inputs.css || "!" }}{{resolve document.dir "../src/styles/globals.css"}}`

```css
{{ read output.abs }}@import '@/features/{{inputs.top}}/styles/style{{inputs.top | split "/" | slice -1 | pascal}}.css';

```
