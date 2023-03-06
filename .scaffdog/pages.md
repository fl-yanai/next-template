---
name: 'pages'
root: '.'
output: 'src/'
ignore: ['.']
questions:
  name:
    message: 'ページ名を入力してください(ex:about/contact)'
---

# `pages/{{ inputs.name }}/index.tsx`

```typescript
import Index from '@/components/pages/{{ inputs.name }}/Index'

const {{ inputs.name | split "/" | slice -1 | pascal }} = () => {
  return <Index />
}
export default {{ inputs.name | split "/" | slice -1 | pascal }}

```

# `components/pages/{{ inputs.name }}/Index.tsx`

```typescript
import { FC } from 'react'

interface Props {}

const Index: FC<Props> = ({}) => {
  return <></>
}

export default Index
```
