import {
  SharedProps,
  SnackbarKey,
  SnackbarMessage,
  SnackbarProviderProps
} from 'notistack'
import { DsToastProps } from '../DsToast'

export interface DsNotistackProviderProps extends SnackbarProviderProps {}

export type DsNotistackKey = SnackbarKey
export interface EnqueNotistackProps extends SharedProps {
  message: SnackbarMessage
  key?: DsNotistackKey
  toastVariant?: Omit<DsToastProps['variant'], 'standard'>
  icon?: DsToastProps['icon']
}

export const DsNotistackDefaultProps: DsNotistackProviderProps = {}
