import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@call-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/rozzettimatheus.png',
    alt: 'Gabriel Rozzetti',
    size: 'sm',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Small: StoryObj = {}

export const Medium: StoryObj = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj = {
  args: {
    size: 'lg',
  },
}

export const WithFallback: StoryObj = {
  args: {
    src: undefined,
  },
}

export const MediumWithFallback: StoryObj = {
  args: {
    size: 'md',
    src: undefined,
  },
}
