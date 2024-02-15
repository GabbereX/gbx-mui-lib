import { createTheme } from '@mui/material/styles'

import { Colors } from '@themes/palette/palette.consts'
import { ComponentsTypography, DefaultTypography, FontFamily } from '@themes/typography/typography.consts'

export const lightTheme = createTheme({
  typography: {
    fontFamily: FontFamily,
    ...DefaultTypography,
    ...ComponentsTypography
  },
  palette: { ...Colors },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            '&:hover': {
              backgroundColor: 'blue'
            }
          }
        }
      ]
    }

    // MuiCssBaseline: {
    //   styleOverrides: () => ({
    //     root: ({ theme }) => ({
    //       color: theme.palette.text.primary
    //     })
    //   })
    // }
    // MuiTypography: {
    //   styleOverrides: {
    //     root: ({ theme }) => ({
    //       color: theme.palette.text.primary
    //     })
    //   }
    // }
  }
})
