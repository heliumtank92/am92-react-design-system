import React, { PureComponent } from 'react'
import Button from '@mui/material/Button'

export default class DsButton extends PureComponent {
  render () {
    const { children, ...buttonProps } = this.props
    return (
      <Button {...buttonProps}>
        <span>{children}</span>
      </Button>
    )
  }
}
