---
name: 'features'
root: '.'
output: 'src/'
ignore: ['.']
questions:
  top:
    message: 'ディレクトリ名を入力してください'
  apis:
    confirm: 'apisディレクトリを作成しますか？'
    initial: false
  apipatt:
    if: inputs.apis == true
    message: 'メソッドを選択してください(その他はotherを選び編集)'
    choices: ['get', 'post', 'update', 'delete', 'other']
  hooks:
    confirm: 'hooksディレクトリを作成しますか？'
    initial: true
  types:
    confirm: 'typesディレクトリを作成しますか？'
    initial: false
  constants:
    confirm: 'constantsディレクトリを作成しますか？'
    initial: false
---

# `{{inputs.apis || "!" }}features/{{inputs.top}}/apis/{{inputs.apipatt}}{{inputs.top | pascal}}.ts`

```typescript
import axios from 'axios'

export const {{inputs.apipatt}}{{inputs.top | pascal}} = async () => {
  const res = {}
  return res
}

```

# `{{inputs.hooks || "!" }}features/{{inputs.top}}/hooks/use{{inputs.top | pascal}}.ts`

```typescript
import { useState } from 'react'

export const use{{inputs.top | pascal}} = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchData = () => {
    setLoading(true)
    try{
    }catch(err){
      setErrorMessage(err)
    }
    setLoading(false)
  }
  return { loading, errorMessage, fetchData}
}

```

# `{{inputs.types || "!" }}features/{{inputs.top}}/types/type{{inputs.top | pascal}}.ts`

```typescript
export interface type{{inputs.top | pascal}} {}

```

# `{{inputs.constants || "!" }}features/{{inputs.top}}/constants/constant{{inputs.top | pascal}}.ts`

```typescript
export const constant{{inputs.top | pascal}} = {}

```
