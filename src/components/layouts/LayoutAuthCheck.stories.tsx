import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import LayoutAuthCheck from './LayoutAuthCheck'

type T = typeof LayoutAuthCheck
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: LayoutAuthCheck,
  args: { children: <p>a</p> },
} as Meta

export const Default: Story = {}
