import { SliderProps } from '@mui/material'

export interface DsSliderProps extends SliderProps {
  'ds-mode'?: 'true' | 'false'
}

export const DsSliderDefaultProps: DsSliderProps = {
  'ds-mode': 'true',
  color: 'secondary'
}
