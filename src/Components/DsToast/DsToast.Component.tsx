import React, { PureComponent } from 'react'
import Alert from '@mui/material/Alert'
import { DsToastProps } from './DsToast.Types'
import { DsRemixIcon } from '../DsRemixIcon'

const CloseIcon = (props: object) => (
  <DsRemixIcon {...props} fontSize="mild" className="ri-close-line" />
)

export class DsToast extends PureComponent<DsToastProps> {
  render() {
    const { forwardedRef, ...restProps } = this.props
    return (
      <Alert
        ref={forwardedRef}
        {...restProps}
        components={{
          ...this.props.components,
          CloseIcon
        }}
      />
    )
  }
}
