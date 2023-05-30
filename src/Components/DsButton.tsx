import React, { PureComponent } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

export interface DsButtonProps extends ButtonProps {}

export default class DsButton extends PureComponent<DsButtonProps> {
  render() {
    const { children, ...buttonProps } = this.props
    return (
      <Button {...buttonProps}>
        <span>{children}</span>
      </Button>
    )
  }
}
