import { FC, ReactElement } from 'react'

import { Box, Divider, Typography, TypographyProps } from '@mui/material'

const TypographyBox: FC<TypographyProps> = ({ children, ...rest }): ReactElement => {
  return (
    <Box sx={ { mb: '16px'} }>
      <Divider />
      <Box sx={ { py: '12px'} }>
        <Typography { ...rest }>
          { children }
        </Typography>
      </Box>
      <Divider />
    </Box>
  )
}

export default TypographyBox
