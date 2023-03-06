import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react'
import OverlayBackGroundFixed from './OverlayBackGroundFixed'

type T = typeof OverlayBackGroundFixed
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  component: OverlayBackGroundFixed,
  args: { open: true, children: <p>demo</p> },
} as Meta

export const Default: Story = {}
