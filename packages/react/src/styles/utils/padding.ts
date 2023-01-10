import type { ScaleValue } from '@stitches/react'

export const padding = {
  p: (value: ScaleValue<'space'>) => ({
    padding: value,
  }),
  pt: (value: ScaleValue<'space'>) => ({
    paddingTop: value,
  }),
  pb: (value: ScaleValue<'space'>) => ({
    paddingBottom: value,
  }),
  pl: (value: ScaleValue<'space'>) => ({
    paddingLeft: value,
  }),
  pr: (value: ScaleValue<'space'>) => ({
    paddingRight: value,
  }),
  px: (value: ScaleValue<'space'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
} as const
