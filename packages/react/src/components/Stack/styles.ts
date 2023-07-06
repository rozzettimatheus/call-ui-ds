import { styled } from '../../styles'

export const StackWrapper = styled('div', {
  display: 'flex',
  gap: 'var(--stack-spacing)',

  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },

  defaultVariants: {
    direction: 'horizontal',
  },
})
