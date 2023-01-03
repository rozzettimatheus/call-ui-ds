/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@call-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    Story => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Story />
      </Box>
    ),
  ], // add view
} as Meta<MultiStepProps>

export const Primary: StoryObj = {}

export const Full: StoryObj = {
  args: {
    currentStep: 4,
  },
}
