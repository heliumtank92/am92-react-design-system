import { AlertProps } from '@mui/material'

export interface DsToastProps extends AlertProps {
  forwardedRef?: React.ForwardedRef<HTMLDivElement>
}

export const DsToastDefaultProps: DsToastProps = {
  variant: 'filled',
  icon: false,
  severity: undefined,
  color: 'default'
}

declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides {
    default: true
  }
}
