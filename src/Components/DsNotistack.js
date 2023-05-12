import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SnackbarProvider, closeSnackbar, enqueueSnackbar, useSnackbar } from 'notistack'

import DsToast from './DsToast'

export {
  closeSnackbar,
  enqueueSnackbar,
  useSnackbar,
  buildEnqueueSnackbarProps
}

export class DsNotistackProvider extends Component {
  static defaultProps = {
    hideIconVariant: true
  }

  render () {
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
    messageOptions: PropTypes.shape({
      variant: PropTypes.string,
      severity: PropTypes.string,
      message: PropTypes.string,
      onClose: PropTypes.func
    })
  }

  static defaultProps = {
    messageOptions: {
      variant: 'filled',
      severity: 'info',
      message: '',
      onClose: undefined
    }
  }

  handleClose = async () => {
    const { messageOptions } = this.props
    const { key, onClose } = messageOptions
    if (typeof onClose === 'function') {
      await onClose(this.props)
    }
    closeSnackbar(key)
  }

  render () {
    const { forwardedRef, messageOptions } = this.props
    const { variant, severity, message, sx } = messageOptions

    return (
      <DsToast
        forwardedRef={forwardedRef}
        variant={variant}
        color={severity}
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
    <AlertMessage
      forwardedRef={ref}
      messageOptions={{ ...props.options, severity: 'default' }}
    />
  )
})

const DsNotistackAlertSuccess = React.forwardRef((props, ref) => {
  return (
    <AlertMessage
      forwardedRef={ref}
      messageOptions={{ ...props.options, severity: 'success' }}
    />
  )
})

const DsNotistackAlertError = React.forwardRef((props, ref) => {
  return (
    <AlertMessage
      forwardedRef={ref}
      messageOptions={{ ...props.options, severity: 'error' }}
    />
  )
})

const DsNotistackAlertWarning = React.forwardRef((props, ref) => {
  return (
    <AlertMessage
      forwardedRef={ref}
      messageOptions={{ ...props.options, severity: 'warning' }}
    />
  )
})

const DsNotistackAlertInfo = React.forwardRef((props, ref) => {
  return (
    <AlertMessage
      forwardedRef={ref}
      messageOptions={{ ...props.options, severity: 'info' }}
    />
  )
})

function buildEnqueueSnackbarProps (options = {}) {
  const key = new Date().getTime()
  return { ...options, key }
}
