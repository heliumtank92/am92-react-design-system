import { AlertProps } from '@mui/material'

export interface DsToastProps extends AlertProps {}

export const DsToastDefaultProps: DsToastProps = {
  variant: 'standard',
  icon: false,
  severity: undefined
}
