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

export { closeNotistack, useNotistack, enqueueNotistack }

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

function enqueueNotistack(notistackOptions: EnqueNotistackProps): void {
  const key: DsNotistackKey = new Date().getTime()
  const notificationObj = { ...notistackOptions, key }
  enqueueSnackbar(notificationObj)
}

function closeNotistack(key?: DsNotistackKey | undefined): void {
  closeSnackbar(key)
}
