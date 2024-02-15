import { PaletteOptions } from '@mui/material/styles/createPalette'

export const Colors: PaletteOptions = {
  common: {
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)'
  },

  primary: {
    main: 'rgba(145, 85, 253, 1)',
    light: 'rgba(158, 105, 253, 1)',
    dark: 'rgba(110, 65, 192, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
    containedHover: 'rgba(128, 75, 223, 1)',
    outlinedHover: 'rgba(145, 85, 253, 0.08)',
    outlinedBorder: 'rgba(145, 85, 253, 0.5)'
  },

  secondary: {
    main: 'rgba(138, 141, 147, 1)',
    light: 'rgba(156, 159, 164, 1)',
    dark: 'rgba(77, 80, 86, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
    containedHover: 'rgba(119, 123, 130, 1)',
    outlinedHover: 'rgba(138, 141, 147, 0.08)',
    outlinedBorder: 'rgba(138, 141, 147, 0.5)'
  },

  info: {
    main: 'rgba(22, 177, 255, 1)',
    light: 'rgba(50, 186, 255, 1)',
    dark: 'rgba(14, 113, 163, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
    containedHover: 'rgba(19, 156, 224, 1)',
    outlinedHover: 'rgba(50, 186, 255, 0.08)',
    outlinedBorder: 'rgba(50, 186, 255, 0.5)'
  },

  success: {
    main: 'rgba(86, 202, 0, 1)',
    light: 'rgba(106, 208, 31, 1)',
    dark: 'rgba(55, 129, 0, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
    containedHover: 'rgba(76, 178, 0, 1)',
    outlinedHover: 'rgba(86, 202, 0, 0.08)',
    outlinedBorder: 'rgba(86, 202, 0, 0.5)'
  },

  warning: {
    main: 'rgba(255, 180, 0, 1)',
    light: 'rgba(255, 181, 71, 1)',
    dark: 'rgba(255, 181, 71, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
    containedHover: 'rgba(224, 158, 0, 1)',
    outlinedHover: 'rgba(255, 180, 0, 0.08)',
    outlinedBorder: 'rgba(255, 180, 0, 0.5)'
  },

  error: {
    main: 'rgba(255, 76, 81, 1)',
    light: 'rgba(255, 76, 81, 1)',
    dark: 'rgba(163, 49, 52, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
    containedHover: 'rgba(224, 67, 71, 1)',
    outlinedHover: 'rgba(255, 76, 81, 0.08)',
    outlinedBorder: 'rgba(255, 76, 81, 0.5)'
  },

  text: {
    primary: 'rgba(58, 53, 65, 0.87)',
    secondary: 'rgba(58, 53, 65, 0.68)',
    disabled: 'rgba(58, 53, 65, 0.38)'
  },

  action: {
    active: 'rgba(58, 53, 65, 0.54)',
    hover: 'rgba(58, 53, 65, 0.04)',
    focus: 'rgba(58, 53, 65, 0.12)',
    selected: 'rgba(58, 53, 65, 0.08)',
    disabled: 'rgba(58, 53, 65, 0.26)',
    disabledBackground: 'rgba(58, 53, 65, 0.12)'
  },

  other: {
    divider: 'rgba(58, 53, 65, 0.12)',
    outlinedBorder: 'rgba(58, 53, 65, 0.23)',
    inputLine: 'rgba(58, 53, 65, 0.22)',
    overlay: 'rgba(58, 53, 65, 0.5)',
    snackbarBackground: 'rgba(33, 33, 33, 1)',
    bodyBackground: 'rgba(244, 245, 250, 1)',
    paperCard: 'rgba(255, 255, 255, 1)'
  },

  gradient: {
    primary: 'linear-gradient(0deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.88) 100%), #9155FD',
    secondary: 'linear-gradient(0deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.88) 100%), #8A8D93',
    info: 'linear-gradient(0deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.88) 100%), #2196F3',
    success: 'linear-gradient(0deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.88) 100%), #4CAF50',
    warning: 'linear-gradient(0deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.88) 100%), #ED6C02',
    error: 'linear-gradient(0deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.88) 100%), #F44336',
    menuActive: 'linear-gradient(270deg, #9155FD 0%, #C6A7FE 100%)'
  }
}
