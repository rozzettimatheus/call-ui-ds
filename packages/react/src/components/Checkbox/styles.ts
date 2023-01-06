import * as Checkbox from '@radix-ui/react-checkbox'

import { styled, keyframes } from '../../styles'

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset', // is a button
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0, // remove base height
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&:focus, &[data-state="checked"]': {
    borderColor: '$call300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$call300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 150ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 150ms ease-out`,
  },
})
