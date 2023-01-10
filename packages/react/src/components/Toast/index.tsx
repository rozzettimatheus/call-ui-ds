import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ToastProvider } from '@radix-ui/react-toast'

import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export type ToastSubject = 'error' | 'success' | 'info' | 'warning'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  subject?: ToastSubject
  title: string
  description?: string
}

export function Toast({
  title,
  description,
  subject = 'info',
  ...props
}: ToastProps) {
  return (
    <ToastProvider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {!!description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
