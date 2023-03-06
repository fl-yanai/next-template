import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import SelectOneValue from './SelectOneValue'

type T = typeof SelectOneValue
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: SelectOneValue,
  args: {
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
  },
} as Meta

export const Default: Story = {}
