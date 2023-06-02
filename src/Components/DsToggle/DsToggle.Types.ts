import { SwitchProps } from '@mui/material'

export interface DsToggleProps extends SwitchProps {
  name: string
  value: boolean
}

export const DsToggleDefaultProps: DsToggleProps = {
  name: '',
  value: false
}
