import { ToggleButtonGroupProps as DsToggleButtonGroupProps } from '@mui/material'

export { DsToggleButtonGroupProps }

export const DsToggleButtonGroupDefaultProps: DsToggleButtonGroupProps = {}

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupProps {
    'ds-variant'?: 'switch'
  }
}
