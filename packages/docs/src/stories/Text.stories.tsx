import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@call-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'This is an text element',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj = {}
export const CustomTag: StoryObj = {
  args: {
    children: 'This is a strong text',
    as: 'strong',
  },
}
