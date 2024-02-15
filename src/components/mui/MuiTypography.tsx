import { FC, ReactElement } from 'react'

import { Typography, TypographyProps } from '@mui/material'

const MuiTypography: FC<TypographyProps> = ({ children, ...rest  }): ReactElement => {
  return (
    <Typography { ...rest }>
      { children }
    </Typography>
  )
}

export default MuiTypography
