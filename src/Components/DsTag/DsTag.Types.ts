import { ChipProps } from '@mui/material'

export interface DsTagProps
  extends Omit<ChipProps, 'skipFocusWhenDisabled' | 'clickable' | 'color'> {
  label: string
  value: any
  selected: boolean
}

export const DsTagDefaultProps: DsTagProps = {
  label: '',
  value: undefined,
  selected: false
}
