import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import IconLoadingCircle from './IconLoadingCircle'

type T = typeof IconLoadingCircle
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: IconLoadingCircle,
  args: { circleColor: '#000000' },
} as Meta

export const Default: Story = {}
