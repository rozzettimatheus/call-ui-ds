import type { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'
import { Button, ButtonProps } from '@call-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj = {
  args: {
    size: 'sm',
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
