import type { Meta, StoryObj } from '@storybook/react'

import MuiTypography from '@components/mui/MuiTypography'

const meta = {
  title: 'MUI/Data Display/Typography',
  component: MuiTypography,
  parameters: {
    layout: 'centered'
  },
  // tags: [ 'autodocs' ],
  argTypes: {}
} satisfies Meta<typeof MuiTypography>

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {
  args: {
    variant: 'body1',
    children: 'Example Text'
  }
}
