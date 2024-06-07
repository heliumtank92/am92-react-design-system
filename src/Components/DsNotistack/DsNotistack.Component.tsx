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
  DsNotistackAlertInfo
} from './AlertMessage.Component'
import { DsNotistackKey, EnqueNotistackProps } from './DsNotistack.Types'

const useNotistack = useSnackbar

export { closeNotistack, useNotistack, enqueueNotistack, generateKeyNotistack }

export class DsNotistackProvider extends Component<SnackbarProviderProps> {
  static defaultProps = {
    hideIconVariant: true
  }

  render() {
    return (
      <SnackbarProvider
        preventDuplicate
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
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

function generateKeyNotistack(message?: string): string {
  const key: DsNotistackKey = `${message || ''}-${new Date().getTime()}`
  return key
}

function enqueueNotistack(notistackOptions: EnqueNotistackProps): void {
  const key: DsNotistackKey = `${
    notistackOptions.message
  }-${new Date().getTime()}`

  // Handle if key has been passed
  const notificationObj = { key, ...notistackOptions }
  enqueueSnackbar(notificationObj)
}

function closeNotistack(key?: DsNotistackKey | undefined): void {
  closeSnackbar(key)
}
