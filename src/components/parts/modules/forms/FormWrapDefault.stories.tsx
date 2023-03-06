import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import InputText from '../../elements/inputs/InputText'
import FormWrapDefault from './FormWrapDefault'

type T = typeof FormWrapDefault
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: FormWrapDefault,
  args: {
    error: false,
    label: 'ラベル',
    errorMessage: 'エラーです',
    children: <InputText value='ここにコンポーネントが入ります' changeAction={() => {}} />,
  },
} as Meta

export const Default: Story = {}
