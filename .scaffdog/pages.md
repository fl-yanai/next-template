---
name: 'pages'
root: '.'
output: 'src/'
ignore: ['.']
questions:
  dir:
    message: 'ページディレクトリを入力してください(ex:about/contact/)'
    initial: 'スキップの場合はそのままEnter'
  name:
    message: 'ページ名を入力してください'
---

# `pages/{{ inputs.dir != "スキップの場合はそのままEnter" ? inputs.dir : "" }}{{ inputs.name }}/index.tsx`

```typescript
import Index from '@/components/pages/{{ inputs.dir != "スキップの場合はそのままEnter" ? inputs.dir : "" }}{{ inputs.name }}/Index'

const {{ inputs.name | pascal }} = () => {
  return <Index />
}
export default {{ inputs.name | pascal }}

```

# `components/pages/{{ inputs.dir != "スキップの場合はそのままEnter" ? inputs.dir : "" }}{{ inputs.name }}/Index.tsx`

```typescript
import { FC } from 'react'

interface Props {}

const Index: FC<Props> = ({}) => {
  return <></>
}

export default Index
```
