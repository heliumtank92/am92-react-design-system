import { InputBaseProps } from '@mui/material'

export interface DsInputBaseProps extends InputBaseProps {
  'ds-variant'?: 'otp' | 'search'
}

export const DsInputBaseDefaultProps: DsInputBaseProps = {
  size: 'medium',
  autoComplete: 'off',
  type: 'text'
}
