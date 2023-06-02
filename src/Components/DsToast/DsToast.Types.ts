import { AlertProps } from '@mui/material'

export interface DsToastProps extends AlertProps {
  forwardedRef: React.ForwardedRef<any>
}

export const DsToastDefaultProps: DsToastProps = {
  forwardedRef: () => null
}
