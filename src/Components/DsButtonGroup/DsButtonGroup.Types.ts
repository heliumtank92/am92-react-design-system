import { ButtonGroupProps } from '@mui/material'
import { DsStackProps } from '../DsStack'

export interface DsButtonGroupProps extends DsStackProps {
  fullWidth?: boolean
  noPadding?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const DsButtonGroupDefaultProps: DsButtonGroupProps = {
  fullWidth: false,
  noPadding: false,
  size: 'medium'
}
