import React, { Component } from 'react'
import { VariantType, closeSnackbar } from 'notistack'

import { DsToast, DsToastProps } from '../DsToast'

export interface AlertMessageProps
  extends Omit<DsToastProps, 'variant' | 'color' | 'ref'> {
  ref?: React.Ref<any>
  message: string
  toastVariant: DsToastProps['variant']
  onClose: (props: object) => void
  variant?: VariantType & DsToastProps['color']
  sx?: object
}

const AlertMessageDefaultProps: AlertMessageProps = {
  toastVariant: 'filled',
  message: '',
  onClose: props => undefined
}

class AlertMessage extends Component<AlertMessageProps> {
  static defaultProps = AlertMessageDefaultProps

  handleClose = () => {
    const { id, onClose } = this.props
    if (onClose && typeof onClose === 'function') {
      onClose(this.props)
    }

    closeSnackbar(id)
  }

  render() {
    const { ref, message, toastVariant, variant, sx } = this.props

    return (
      <DsToast
        ref={ref}
        variant={toastVariant}
        color={variant}
        sx={sx}
        onClose={this.handleClose}
      >
        {message}
      </DsToast>
    )
  }
}

export const DsNotistackAlertDefault = React.forwardRef<
  DsToast,
  AlertMessageProps
>((props, ref) => {
  return <AlertMessage ref={ref} {...props} />
})

export const DsNotistackAlertSuccess = React.forwardRef<
  DsToast,
  AlertMessageProps
>((props, ref) => {
  return <AlertMessage ref={ref} {...props} variant="success" />
})

export const DsNotistackAlertError = React.forwardRef<
  DsToast,
  AlertMessageProps
>((props, ref) => {
  return <AlertMessage ref={ref} {...props} variant="error" />
})

export const DsNotistackAlertWarning = React.forwardRef<
  DsToast,
  AlertMessageProps
>((props, ref) => {
  return <AlertMessage ref={ref} {...props} variant="warning" />
})

export const DsNotistackAlertInfo = React.forwardRef<
  DsToast,
  AlertMessageProps
>((props, ref) => {
  return <AlertMessage ref={ref} {...props} variant="info" />
})
