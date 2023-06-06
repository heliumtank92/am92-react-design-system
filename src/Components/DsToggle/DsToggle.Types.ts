import { SwitchProps } from '@mui/material'

export interface DsToggleProps extends Omit<SwitchProps, 'onChange'> {
  name: string
  value: boolean
  onChange: (name: string, value: any) => void
}

export const DsToggleDefaultProps: DsToggleProps = {
  name: '',
  value: false,
  onChange: () => undefined
}
