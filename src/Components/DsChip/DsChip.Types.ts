import { ChipProps } from '@mui/material'

export interface DsChipProps extends Omit<ChipProps, 'color'> {
  type?: 'status' | 'nudge'
  color?: Extract<
    ChipProps['color'],
    'default' | 'info' | 'success' | 'warning' | 'error'
  >
}

export const DsChipDefaultProps: DsChipProps = {
  type: 'status'
}
