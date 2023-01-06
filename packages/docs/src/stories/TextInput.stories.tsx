/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@call-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    Story => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size={'sm'}>Enter your input</Text>
        <Story />
      </Box>
    ),
  ], // add view
} as Meta<TextInputProps>

export const Primary: StoryObj = {}

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
}

export const WithPlaceholder: StoryObj = {
  args: {
    placeholder: 'Username',
  },
}

export const WithPrefix: StoryObj = {
  args: {
    prefix: 'call.com/',
    placeholder: 'your-username',
  },
}
