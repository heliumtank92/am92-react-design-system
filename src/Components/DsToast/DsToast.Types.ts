import { AlertProps } from '@mui/material'

export interface DsToastProps<T> extends AlertProps {
  forwardedRef: React.ForwardedRef<T>
}

export const DsToastDefaultProps: DsToastProps<null> = {
  forwardedRef: () => null
}
