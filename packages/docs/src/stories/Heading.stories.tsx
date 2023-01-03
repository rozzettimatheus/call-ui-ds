import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@call-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj = {}
export const CustomTag: StoryObj = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, heading will always be an `h2` element, but it can be changed with the property `as` ',
      },
    },
  },
}
