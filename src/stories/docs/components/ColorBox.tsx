import { FC, ReactElement } from 'react'

import { Box, Typography } from '@mui/material'

import { GradientPaletteColor } from '@themes/palette/palette.types'

interface Props {
  color: string
  colorText?: string
  isGradiend?: boolean
}

const ColorBox: FC<Props> = ({ color, colorText = 'primary.contrastText', isGradiend = false }): ReactElement => {
  return (
    <Box
      sx={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        width: 150,
        height: 80,
        borderRadius: 4,
        userSelect: 'none',
        cursor: 'pointer',
        ...(isGradiend
          ? { background: (theme) =>
            theme.palette.gradient[
              color.split('.')[1] as keyof GradientPaletteColor
            ] }
          : { bgcolor: color })
      } }
      onClick={ () => {
        const textToCopy = isGradiend
          ? `(theme) => theme.palette.gradient.${color.split('.')[1]}`
          : color
        navigator.clipboard.writeText(textToCopy).then(() => true)
          .catch(() => false)
      } }
    >
      <Typography
        fontWeight={ 500 }
        fontSize={ 12 }
        color={ colorText }
      >
        { color.split('.')[1] }
      </Typography>
    </Box>
  )
}

export default ColorBox
