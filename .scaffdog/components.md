---
name: 'components'
root: '.'
output: 'src/components/'
ignore: ['.']
questions:
  top:
    message: 'components/以下のディレクトリを指定してください'
    choices: ['layouts/', 'pages/', 'parts/']
  parts:
    if: contains(inputs.top, 'parts')
    message: 'parts/以下のディレクトリを指定してください(parts/)'
    choices: ['elements/', 'modules/']
  dirName:
    message: '**/以下のディレクトリ名を入力してください(ex:about/contact/)'
    initial: 'スキップの場合はそのままEnter'
  fileName:
    message: 'ファイル名を入力してください'
  css:
    confirm: 'cssファイルを作成しますか'
    initial: false
---

# `{{ inputs.top }}{{ inputs.parts != "" ? inputs.parts : "" }}{{ inputs.dirName != "スキップの場合はそのままEnter" ? inputs.dirName : "" }}{{ inputs.fileName | pascal }}.tsx`

```typescript
import { FC } from 'react'
{{if inputs.css }}import styles from './{{ inputs.fileName | pascal }}.module.css'{{end}}

interface Props {}

const {{ inputs.fileName | pascal }}: FC<Props> = ({}) => {
  return <></>
}

export default {{ inputs.fileName | pascal }}

```

# `{{ inputs.top }}{{ inputs.parts != "" ? inputs.parts : "" }}{{ inputs.dirName != "スキップの場合はそのままEnter" ? inputs.dirName : "" }}{{ inputs.fileName | pascal }}.stories.tsx`

```typescript
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import {{ inputs.fileName | pascal }} from './{{ inputs.fileName | pascal }}'

type T = typeof {{ inputs.fileName | pascal }}
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: {{ inputs.fileName | pascal }},
  args: {},
} as Meta

export const Default: Story = {}

```

# `{{ inputs.top }}{{ inputs.parts != "" ? inputs.parts : "" }}{{ inputs.dirName != "スキップの場合はそのままEnter" ? inputs.dirName : "" }}{{ inputs.fileName | pascal }}.module.css`

```css

```
