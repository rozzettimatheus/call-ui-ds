import { ReactNode } from 'react'
import { ComponentProps } from '../../type-utils/ComponentProps'
import { StackWrapper } from './styles'

export type StackProps = ComponentProps<typeof StackWrapper> & {
  children?: ReactNode
  spacing?: string | number
}

export function Stack({ spacing, children, ...props }: StackProps) {
  const stackSpacing =
    typeof spacing === 'number' ? String(spacing) + 'px' : spacing

  return (
    <StackWrapper {...props} css={{ '--stack-spacing': stackSpacing }}>
      {children}
    </StackWrapper>
  )
}
