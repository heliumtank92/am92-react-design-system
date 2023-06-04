import { ToggleButtonGroupProps } from '@mui/material'

export interface DsToggleButtonGroupProps extends ToggleButtonGroupProps {
  // For Internal DsSwitch Component
  'ds-variant'?: 'switch'
}

export const DsToggleButtonGroupDefaultProps: DsToggleButtonGroupProps = {}
