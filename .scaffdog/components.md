---
name: 'components'
root: '.'
output: 'src/components/'
ignore: ['.']
questions:
  top:
    message: 'ディレクトリを指定してください'
    choices: ['layouts', 'pages', 'parts']
  layouts:
    if: contains(inputs.top, 'layouts')
    message: 'ファイル名を入力してください(layouts/)'
  pages:
    if: contains(inputs.top, 'pages')
    message: 'ファイル名を入力してください(pages/)'
  parts:
    if: contains(inputs.top, 'parts')
    message: 'ディレクトリを指定してください(parts/**)'
    choices: ['elements', 'modules']
  dir:
    if: contains(inputs.top, 'parts')
    message: 'ディレクトリ名を入力してください(parts/**)'
  name:
    if: contains(inputs.top, 'parts')
    message: 'ファイル名を入力してください(parts/**)'
---

# `{{ inputs.top }}/{{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.parts != "" ? inputs.parts : "" }}{{ inputs.parts != "" ? "/" : "" }}{{ inputs.dir != "" ? inputs.dir : "" }}{{ inputs.parts != "" ? "/" : "" }}{{ inputs.name != "" ? inputs.name : "" | pascal }}.tsx`

```typescript
import { FC } from 'react'

interface Props {}

const {{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.name != "" ? inputs.name : "" | pascal }}: FC<Props> = ({}) => {
  return <></>
}

export default {{ inputs.layouts != "" ? inputs.layouts : "" | pascal }}{{ inputs.pages != "" ? inputs.pages : "" | pascal }}{{ inputs.name != "" ? inputs.name : "" | pascal }}

```
