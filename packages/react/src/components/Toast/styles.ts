import * as Toast from '@radix-ui/react-toast'

import { styled, keyframes } from '../../styles'

const VIEWPORT_THRESHOLD = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_THRESHOLD}px))` },
  to: { transform: 'translateX(0)' },
})

const slideUp = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
})

const slideDown = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(100%)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_THRESHOLD}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: `'title close' 'description close'`,
  gridTemplateColumns: 'auto max-content',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },

    '@phone': {
      '&[data-state="open"]': {
        animation: `${slideUp} 150ms ease-out`,
      },
      '&[data-state="closed"]': {
        animation: `${slideDown} 150ms ease-in`,
      },
    },
  },

  '@phone': {
    borderRadius: 0,
    border: 0,
    borderTop: '1px solid $gray600',
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  fontFamily: '$default',
  fontSize: '$lg',
  fontWeight: '$bold',
  lineHeight: '$tall',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  gridArea: 'close',
  all: 'unset',
  width: '$3',
  height: '$3',
  cursor: 'pointer',
  color: '$gray200',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_THRESHOLD,
  gap: '10px',
  width: '360px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',

  '@phone': {
    width: '100%',
    padding: 0,
  },
})
