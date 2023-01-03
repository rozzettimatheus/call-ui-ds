/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@call-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    Story => (
      <Box
        as="label"
        css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
      >
        <Story />
        <Text size={'sm'}>Accept terms of use</Text>
      </Box>
    ),
  ], // add view
} as Meta<CheckboxProps>

export const Primary: StoryObj = {}
