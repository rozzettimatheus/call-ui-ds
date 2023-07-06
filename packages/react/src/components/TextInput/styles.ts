import { styled } from '../../styles'
import { Text } from '../Text'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
    invalid: {
      true: {
        borderColor: '$error300',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$call300',
  },
  '&:focus-within': {
    borderColor: '$call300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
    invalid: false,
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  all: 'unset',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  width: '100%',

  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$gray500',
  },
})

export const ErrorFeedback = styled(Text, {
  color: '$error300',
})
