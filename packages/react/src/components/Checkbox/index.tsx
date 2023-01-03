import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxIndicator, CheckboxRoot } from './styles'

export type CheckboxProps = ComponentProps<typeof CheckboxRoot>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}

Checkbox.displayName = 'Checkbox'
