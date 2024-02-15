import { CSSProperties } from 'react'

import { TypographyVariants } from '@themes/typography/typography.consts'

type CustomVariants = typeof TypographyVariants[number]

declare module '@mui/material/styles' {
  interface TypographyVariants extends Record<CustomVariants, CSSProperties> {}
  interface TypographyVariantsOptions extends Partial<Record<CustomVariants, CSSProperties>> {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends Record<CustomVariants, true> {}
}
