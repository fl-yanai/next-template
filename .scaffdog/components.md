---
name: 'components'
root: '.'
output: 'src/components/'
ignore: ['.']
questions:
  top:
    message: 'components以下のディレクトリを指定してください'
    choices: ['layouts', 'pages', 'parts']
  layouts:
    if: contains(inputs.top, 'layouts')
    message: 'ファイル名を入力してください'
  pagesdir:
    if: contains(inputs.top, 'pages')
    confirm: 'page以下にディレクトリを作成しますか'
    initial: false
  pagedirname:
    if: inputs.pagesdir == true
    message: 'page以下のディレクトリ名を入力してください(ex:about/contacts/)'
  pages:
    if: contains(inputs.top, 'pages')
    message: 'ファイル名を入力してください'
  parts:
    if: contains(inputs.top, 'parts')
    message: 'ディレクトリを指定してください(parts/)'
    choices: ['elements', 'modules']
  dir:
    if: contains(inputs.top, 'parts')
    message: 'ディレクトリ名を入力してください(ex:about/contacts/)'
  name:
    if: contains(inputs.top, 'parts')
    message: 'ファイル名を入力してください'
  css:
    confirm: 'cssファイルを作成しますか'
    initial: false
---

# `{{ inputs.top }}/{{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pagesdir == true ? "/" : "" }}{{ inputs.pagedirname != "" ? inputs.pagedirname : "" }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.parts != "" ? inputs.parts : "" }}{{ inputs.parts != "" ? "/" : "" }}{{ inputs.dir != "" ? inputs.dir : "" }}{{ inputs.name != "" ? inputs.name : "" | pascal }}.tsx`

```typescript
import { FC } from 'react'
{{if inputs.css}}import styles from './{{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.name != "" ? inputs.name : "" | pascal }}.module.css'{{end}}

interface Props {}

const {{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.name != "" ? inputs.name : "" | pascal }}: FC<Props> = ({}) => {
  return <></>
}

export default {{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.name != "" ? inputs.name : "" | pascal }}

```

# `{{ inputs.layouts != "" || "!" }}{{ inputs.top }}/{{ inputs.layouts | pascal }}.stories.tsx`

```typescript
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import {{ inputs.layouts | pascal }} from './{{ inputs.layouts | pascal }}'

type T = typeof {{ inputs.layouts | pascal }}
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: {{ inputs.layouts | pascal }},
  args: {},
} as Meta

export const Default: Story = {}

```

# `{{ inputs.parts != "" || "!" }}{{ inputs.top }}/{{ inputs.parts }}/{{ inputs.dir }}{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import {{ inputs.name | pascal }} from './{{ inputs.name | pascal }}'

type T = typeof {{ inputs.name | pascal }}
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: {{ inputs.name | pascal }},
  args: {},
} as Meta

export const Default: Story = {}

```

# `{{inputs.css || "!"}}{{ inputs.top }}/{{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pagesdir == true ? "/" : "" }}{{ inputs.pagedirname != "" ? inputs.pagedirname : "" }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.parts != "" ? inputs.parts : "" }}{{ inputs.parts != "" ? "/" : "" }}{{ inputs.dir != "" ? inputs.dir : "" }}{{ inputs.name != "" ? inputs.name : "" | pascal }}.module.css`

```css

```
