import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@call-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/rozzettimatheus.png',
    alt: 'Gabriel Rozzetti',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj = {}
export const WithFallback: StoryObj = {
  args: {
    src: undefined,
  },
}
