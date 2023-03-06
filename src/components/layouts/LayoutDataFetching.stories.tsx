import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import LayoutDataFetching from './LayoutDataFetching'

type T = typeof LayoutDataFetching
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: LayoutDataFetching,
  args: { fetched: false, children: <p>demo</p> },
} as Meta

export const Default: Story = {}
