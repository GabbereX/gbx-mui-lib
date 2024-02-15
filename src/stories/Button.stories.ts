import type { Meta, StoryObj } from '@storybook/react'

import MuiButton from '@components/mui/MuiButton'

const meta = {
  title: 'MUI/Inputs/Button',
  component: MuiButton,
  parameters: {
    layout: 'centered'
  },
  // tags: [ 'autodocs' ],
  argTypes: {}
} satisfies Meta<typeof MuiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Button: Story = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
}
