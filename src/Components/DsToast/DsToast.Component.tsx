import React, { PureComponent } from 'react'
import Alert from '@mui/material/Alert'
import { DsToastProps } from './DsToast.Types'
import { DsRemixIcon } from '../DsRemixIcon'

const CloseIcon = (props: any) => {
  const { ownerState, ...restProps } = props
  return (
    <DsRemixIcon fontSize="mild" className="ri-close-line" {...restProps} />
  )
}

export class DsToast extends PureComponent<DsToastProps> {
  render() {
    const { forwardedRef, ...restProps } = this.props
    return (
      <Alert
        ref={forwardedRef}
        {...restProps}
        slots={{ closeIcon: CloseIcon, ...restProps?.slots }}
      />
    )
  }
}
