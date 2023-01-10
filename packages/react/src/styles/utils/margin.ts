import type { ScaleValue } from '@stitches/react'

export const margin = {
  m: (value: ScaleValue<'space'>) => ({ margin: value }),
  mt: (value: ScaleValue<'space'>) => ({
    marginTop: value,
  }),
  mb: (value: ScaleValue<'space'>) => ({
    marginBottom: value,
  }),
  ml: (value: ScaleValue<'space'>) => ({
    marginLeft: value,
  }),
  mr: (value: ScaleValue<'space'>) => ({
    marginRight: value,
  }),
  my: (value: ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  mx: (value: ScaleValue<'space'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
} as const
