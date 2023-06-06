import { DividerProps } from '@mui/material'

export interface DsDividerProps extends DividerProps {
  'ds-size': 'M' | 'L'
}

export const DsDividerDefaultProps: DsDividerProps = {
  'ds-size': 'M'
}
