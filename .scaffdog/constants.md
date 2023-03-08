---
name: 'constants'
root: '.'
output: 'src/'
ignore: ['.']
questions:
  dir:
    message: 'ディレクトリ名を入力してください(ex:about/contact/)'
    initial: 'スキップの場合はそのままEnter'
  name:
    message: 'ファイル名を入力してください'
---

# `constants/{{ inputs.dir != "スキップの場合はそのままEnter" ? inputs.dir : "" }}{{inputs.name}}.ts`

```typescript
export const {{inputs.name | upper}} = {}

```
