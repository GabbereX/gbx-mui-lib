import 'unfonts.css'

import '@styles/main.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  Button, CssBaseline, ThemeProvider, Typography
} from '@mui/material'

import { lightTheme } from '@themes/lightTheme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      <Typography variant='chip'>
        Typography
      </Typography>

      <Button>
        Button
      </Button>
    </ThemeProvider>
  </StrictMode>
)
