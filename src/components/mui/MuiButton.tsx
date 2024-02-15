import { FC, ReactElement } from 'react'

import { Button, ButtonProps } from '@mui/material'

const MuiButton: FC<ButtonProps> = ({ children, ...rest }): ReactElement => {
  return (
    <Button { ...rest }>{ children }</Button>
  )
}

export default MuiButton
