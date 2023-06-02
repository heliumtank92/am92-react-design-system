import { ChipProps } from '@mui/material'

export interface DsChipProps extends ChipProps {
  type?: 'status' | 'nudge'
}

export const DsChipDefaultProps: DsChipProps = {
  type: 'status'
}
