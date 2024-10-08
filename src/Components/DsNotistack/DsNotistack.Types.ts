import {
  OptionsObject,
  SnackbarKey,
  SnackbarMessage,
  SnackbarProviderProps
} from 'notistack'
import { DsToastProps } from '../DsToast'

export interface DsNotistackProviderProps extends SnackbarProviderProps {}

export type DsNotistackKey = SnackbarKey
export interface NotiStackMessage {
  message: SnackbarMessage
}

export interface EnqueNotistackProps
  extends OptionsObject,
    NotiStackMessage,
    Pick<DsToastProps, Exclude<keyof DsToastProps, keyof OptionsObject>> {}
