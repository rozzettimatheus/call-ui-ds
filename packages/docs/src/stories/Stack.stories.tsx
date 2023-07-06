import type { StoryObj, Meta } from '@storybook/react'
import { Stack, StackProps, Text } from '@call-ui/react'

export default {
  title: 'Surfaces/Stack',
  component: Stack,
  args: {
    spacing: 12,
    direction: 'vertical',
    children: (
      <>
        <Text>Element 1</Text>
        <Text>Element 2</Text>
        <Text>Element 3</Text>
      </>
    ),
  },
} as Meta<StackProps>

export const Primary: StoryObj = {}
