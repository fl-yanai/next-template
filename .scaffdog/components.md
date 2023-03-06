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
    message: 'ファイル名を入力してください(layouts/)'
  pagesdir:
    if: contains(inputs.top, 'pages')
    confirm: 'page以下にディレクトリを作成しますか'
    initial: false
  pagedirname:
    if: inputs.pagesdir == true
    message: 'page以下のディレクトリ名を入力してください(pages/)'
  pages:
    if: contains(inputs.top, 'pages')
    message: 'ファイル名を入力してください(pages/)'
  parts:
    if: contains(inputs.top, 'parts')
    message: 'ディレクトリを指定してください(parts/)'
    choices: ['elements', 'modules']
  dir:
    if: contains(inputs.top, 'parts')
    message: 'ディレクトリ名を入力してください(parts/**)'
  name:
    if: contains(inputs.top, 'parts')
    message: 'ファイル名を入力してください(parts/**)'
---

# `{{ inputs.top }}/{{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pagesdir == true ? "/" : "" }}{{ inputs.pagedirname != "" ? inputs.pagedirname : "" }}{{ inputs.pagesdir == true ? "/" : "" }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.parts != "" ? inputs.parts : "" }}{{ inputs.parts != "" ? "/" : "" }}{{ inputs.dir != "" ? inputs.dir : "" }}{{ inputs.parts != "" ? "/" : "" }}{{ inputs.name != "" ? inputs.name : "" | pascal }}.tsx`

```typescript
import { FC } from 'react'

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

# `{{ inputs.parts != "" || "!" }}{{ inputs.top }}/{{ inputs.parts }}/{{ inputs.dir }}/{{ inputs.name | pascal }}.stories.tsx`

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
