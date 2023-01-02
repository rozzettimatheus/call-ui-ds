import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@call-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}
export const Big: StoryObj = {
  args: {
    size: 'big',
  },
}
