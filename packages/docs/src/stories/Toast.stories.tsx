import { useEffect, useRef } from 'react'
import { useArgs } from '@storybook/client-api'
import type { Story, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@call-ui/react'

export default {
  title: 'Interactions/Toast',
  component: Toast,
  args: {
    title: 'Book succeed',
    description: 'Wednesday, 23 October',
    open: false,
  },
} as Meta<ToastProps>

export const Template: Story<ToastProps> = (args) => {
  const [, updateArgs] = useArgs()
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function openToast() {
    updateArgs({ open: true })
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      updateArgs({ open: false })
    }, 3500)
  }

  return (
    <>
      <Button onClick={openToast}>Book now</Button>
      <Toast {...args} onOpenChange={(open) => updateArgs({ open })} />
    </>
  )
}
