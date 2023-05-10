import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { closeSnackbar } from 'notistack'

import DsToast from './DsToast'

class AlertMessage extends Component {
  static propTypes = {
    forwardedRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any })
    ]).isRequired,
    enqueueSnackbar: PropTypes.func.isRequired,
    messageOptions: PropTypes.shape({
      message: PropTypes.string,
      onClose: PropTypes.func
    })
  }

  static defaultProps = {
    variant: 'info',
    message: '',
    onClose: undefined
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

const DsNotistackAlert = React.forwardRef((props, ref) => {
  return <AlertMessage forwardedRef={ref} messageOptions={props.options} />
})

export default DsNotistackAlert

export function buildEnqueueSnackbarProps (options = {}) {
  const key = new Date().getTime()
  const notification = { ...options, key }
  const notificationOptions = { key }

  return [notification, notificationOptions]
}
