import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  aspectRatio: '1 / 1',
  overflow: 'hidden',

  variants: {
    size: {
      sm: {
        width: '$16',
        height: '$16',
      },
      md: {
        width: '$20',
        height: '$20',
      },
      lg: {
        width: '$40',
        height: '$40',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    display: 'inline-block',
    width: '40%',
    height: '40%',
  },
})
