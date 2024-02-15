import { Color } from '@mui/material'

interface OtherPaletteColor {
  divider: string
  outlinedBorder: string
  inputLine: string
  overlay: string
  snackbarBackground: string
  bodyBackground: string
  paperCard: string
}

export interface GradientPaletteColor {
  primary: string
  secondary: string
  info: string
  success: string
  warning: string
  error: string
  menuActive: string
}

interface ExtraPaletteColor {
  containedHover?: string
  outlinedHover?: string
  outlinedBorder?: string
}

interface ExtraPalette {
  other: OtherPaletteColor
  gradient: GradientPaletteColor
}


declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions extends ExtraPaletteColor {}
  interface PaletteColor extends ExtraPaletteColor {}

  type PaletteColorOptions = SimplePaletteColorOptions | Partial<Color>

  interface Palette extends ExtraPalette {}
  interface PaletteOptions  extends ExtraPalette {}
}
