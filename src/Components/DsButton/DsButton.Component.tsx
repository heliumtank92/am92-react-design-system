import React, { PureComponent } from 'react'
import Button from '@mui/material/Button'
import { DsButtonProps } from './DsButton.Types'

export class DsButton extends PureComponent<DsButtonProps> {
  render() {
    const { children, ...buttonProps } = this.props
    return (
      <Button {...buttonProps}>
        <span>{children}</span>
      </Button>
    )
  }
}
