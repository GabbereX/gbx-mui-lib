import { TypographyOptions } from '@mui/material/styles/createTypography'

export const FontFamily = [
  'Inter',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(',')

export const DefaultTypography: TypographyOptions = {
  h1: {
    fontSize: '96px',
    fontWeight: 500,
    lineHeight: '112px',
    letterSpacing: '-1.5px'
  },
  h2: {
    fontSize: '60px',
    fontWeight: 500,
    lineHeight: '72px',
    letterSpacing: '-0.5px'
  },
  h3: {
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: '56px'
  },
  h4: {
    fontSize: '34px',
    fontWeight: 500,
    lineHeight: '42px',
    letterSpacing: '0.25px'
  },
  h5: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px'
  },
  h6: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '0.15px'
  },
  subtitle1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '28px',
    letterSpacing: '0.15px'
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '0.1px'
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.15px'
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.15px'
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.4px'
  },
  overline: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '32px',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  }
}

export const ComponentsTypography: TypographyOptions = {
  buttonLarge: {
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '0.46px',
    textTransform: 'uppercase'
  },
  buttonMedium: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0.4px',
    textTransform: 'uppercase'
  },
  buttonSmall: {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '0.46px',
    textTransform: 'uppercase'
  },
  inputLable: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '12px',
    letterSpacing: '0.15px'
  },
  inputText: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.15px'
  },
  helperText: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.4px'
  },
  avatarInitials: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.14px'
  },
  chip: {
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '0.16px'
  },
  tooltip: {
    fontSize: '11px',
    fontWeight: 500,
    lineHeight: '16px'
  },
  alertTitle: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0.15px'
  },
  tableHeader: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '0.17px',
    textTransform: 'uppercase'
  },
  badgeLabel: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0.14px'
  },
  toast: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '21px',
    letterSpacing: '0.14px'
  }
}

export const TypographyVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'overline',
  'buttonLarge',
  'buttonMedium',
  'buttonSmall',
  'inputLable',
  'inputText',
  'helperText',
  'avatarInitials',
  'chip',
  'tooltip',
  'alertTitle',
  'tableHeader',
  'badgeLabel',
  'toast'
] as const
