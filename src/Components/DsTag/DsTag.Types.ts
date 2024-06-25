import { ChipProps } from '@mui/material'

export interface DsTagProps
  extends Omit<ChipProps, 'skipFocusWhenDisabled' | 'clickable' | 'color'> {
  value: any
  selected: boolean
}

export const DsTagDefaultProps: DsTagProps = {
  value: undefined,
  selected: false
}
