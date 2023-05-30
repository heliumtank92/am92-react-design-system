import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  SnackbarProvider,
  closeSnackbar,
  enqueueSnackbar,
  useSnackbar
} from 'notistack'

import DsToast from './DsToast'

export {
  closeSnackbar,
  enqueueSnackbar,
  useSnackbar,
  buildNotificationProps
}

export class DsNotistackProvider extends Component {
  static defaultProps = {
    hideIconVariant: true
  }

  render() {
    return (
      <SnackbarProvider
        {...this.props}
        Components={{
          default: DsNotistackAlertDefault,
          success: DsNotistackAlertSuccess,
          error: DsNotistackAlertError,
          warning: DsNotistackAlertWarning,
          info: DsNotistackAlertInfo,
          ...this.props.Components
        }}
      />
    )
  }
}

class AlertMessage extends Component {
  static propTypes = {
    forwardedRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any })
    ]).isRequired,
    message: PropTypes.string.isRequired,
    toastVariant: PropTypes.oneOf(['outlined', 'filled']),
    variant: PropTypes.oneOf([
      'default',
      'info',
      'success',
      'error',
      'warning'
    ]),
    sx: PropTypes.object
  }

  static defaultProps = {
    toastVariant: 'filled',
    variant: 'default'
  }

  handleClose = () => {
    const { id, onClose } = this.props
    if (onClose && typeof onClose === 'function') {
      onClose(this.props)
    }

    closeSnackbar(id)
  }

  render() {
    const { forwardedRef, message, toastVariant, variant, sx } =
      this.props

    return (
      <DsToast
        forwardedRef={forwardedRef}
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

const DsNotistackAlertDefault = React.forwardRef((props, ref) => {
  return (
    <AlertMessage forwardedRef={ref} {...props} variant="default" />
  )
})

const DsNotistackAlertSuccess = React.forwardRef((props, ref) => {
  return (
    <AlertMessage forwardedRef={ref} {...props} variant="success" />
  )
})

const DsNotistackAlertError = React.forwardRef((props, ref) => {
  return (
    <AlertMessage forwardedRef={ref} {...props} variant="error" />
  )
})

const DsNotistackAlertWarning = React.forwardRef((props, ref) => {
  return (
    <AlertMessage forwardedRef={ref} {...props} variant="warning" />
  )
})

const DsNotistackAlertInfo = React.forwardRef((props, ref) => {
  return <AlertMessage forwardedRef={ref} {...props} variant="info" />
})

function buildNotificationProps(notificationObj) {
  const key = new Date().getTime()
  return { ...notificationObj, key }
}
