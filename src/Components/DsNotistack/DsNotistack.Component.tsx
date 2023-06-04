import React, { Component } from 'react'
import {
  SnackbarProvider,
  SnackbarProviderProps,
  closeSnackbar,
  enqueueSnackbar,
  useSnackbar
} from 'notistack'

import {
  DsNotistackAlertDefault,
  DsNotistackAlertSuccess,
  DsNotistackAlertError,
  DsNotistackAlertWarning,
  DsNotistackAlertInfo,
  AlertMessageProps
} from './AlertMessage.Component'

export { closeSnackbar, enqueueSnackbar, useSnackbar, buildNotificationProps }

export class DsNotistackProvider extends Component<SnackbarProviderProps> {
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

function buildNotificationProps<NotificationProps extends AlertMessageProps>(
  notificationObj: NotificationProps
) {
  const key = new Date().getTime()
  return { ...notificationObj, key }
}
