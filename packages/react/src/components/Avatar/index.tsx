import { ComponentProps } from 'react'
import { User } from 'phosphor-react'

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export type AvatarProps = ComponentProps<typeof AvatarImage> & {
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ size, ...props }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
