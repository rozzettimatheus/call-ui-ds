var p=Object.defineProperty;var n=(t,e)=>p(t,"name",{value:e,configurable:!0});import{r}from"./index-34e51894.js";import{d as a,a as u}from"./index-4e6cec1b.js";import{a as m,F as l,j as s}from"./jsx-runtime-da4cfb3b.js";import{l as f}from"./iframe-b7281b7d.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-75cd1920.js";import"./web.url.constructor-51423315.js";import"./es.number.is-integer-39d06ee6.js";const x={parameters:{storySource:{source:`import { useEffect, useRef } from 'react'
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
`,locationsMap:{template:{startLoc:{col:43,line:16},endLoc:{col:1,line:38},startBody:{col:43,line:16},endBody:{col:1,line:38}}}}},title:"Interactions/Toast",component:a,args:{title:"Book succeed",description:"Wednesday, 23 October",open:!1}},E=n(t=>{const[,e]=f(),o=r.useRef(0);r.useEffect(()=>()=>clearTimeout(o.current),[]);function c(){e({open:!0}),window.clearTimeout(o.current),o.current=window.setTimeout(()=>{e({open:!1})},3500)}return n(c,"openToast"),m(l,{children:[s(u,{onClick:c,children:"Book now"}),s(a,{...t,onOpenChange:i=>e({open:i})})]})},"Template"),O=["Template"];export{E as Template,O as __namedExportsOrder,x as default};
//# sourceMappingURL=Toast.stories-6674eb33.js.map
