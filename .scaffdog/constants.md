---
name: 'constants'
root: '.'
output: 'src/'
ignore: ['.']
questions:
  name:
    message: 'ファイル名を入力してください'
---

# `constants/{{inputs.name}}.ts`

```typescript
export const {{inputs.name | upper}} = {}

```
