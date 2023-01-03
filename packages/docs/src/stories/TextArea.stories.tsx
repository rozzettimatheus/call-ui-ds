/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@call-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    Story => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size={'sm'}>Observations</Text>
        <Story />
      </Box>
    ),
  ], // add view
} as Meta<TextAreaProps>

export const Primary: StoryObj = {}

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
}

export const WithPlaceholder: StoryObj = {
  args: {
    placeholder: 'Enter your text',
  },
}
