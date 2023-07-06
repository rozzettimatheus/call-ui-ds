/* eslint-disable prettier/prettier */
import { ComponentProps, ElementRef, forwardRef } from 'react'

import { Stack } from '../Stack'
import { ErrorFeedback, Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = Omit<ComponentProps<typeof Input>, 'size'> & {
  error?: string
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, error, ...props }, ref) => {
    return (
      <Stack direction="vertical" spacing={8}>
        <TextInputContainer size={size} invalid={!!error}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <Input ref={ref} {...props} />
        </TextInputContainer>
        {!!error && <ErrorFeedback>{error}</ErrorFeedback>}
      </Stack>
    )
  }
)

TextInput.displayName = 'TextInput'
