import { ButtonProps } from '@mui/material'

export interface DsButtonProps extends ButtonProps {}

export const DsButtonDefaultProps: DsButtonProps = {
  variant: 'contained',
  size: 'small',
  color: 'primary',
  disableElevation: true
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    flushed: true
  }
}
