import { styled } from '../styles'
import { ComponentProps } from '../type-utils/ComponentProps'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',

  '&:not(:disabled)': {
    cursor: 'pointer',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $gray100',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$call500',

        '&:not(:disabled):hover': {
          backgroundColor: '$call300',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$call300',
        border: '2px solid $call500',

        '&:not(:disabled):hover': {
          backgroundColor: '$call500',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

Button.displayName = 'Button'

export type ButtonProps = ComponentProps<typeof Button>
