import { FC, ReactElement } from 'react'

import { Box, CssBaseline, ThemeProvider } from '@mui/material'

import { lightTheme } from '@themes/lightTheme'

interface Props {
  children: ReactElement
}

const DocContainer: FC<Props> = ({ children }): ReactElement => {
  return (
    <>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline />
        <Box
          className='sb-unstyled'
          sx={ { '& p': { m: 0 } } }
        >
          { children }
        </Box>
      </ThemeProvider>
    </>
  )
}

export default DocContainer
