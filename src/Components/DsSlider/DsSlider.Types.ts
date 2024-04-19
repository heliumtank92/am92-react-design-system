import { SliderProps } from '@mui/material'

export interface DsSliderProps extends SliderProps {
  'design-mode'?: 'true' | 'false'
}

export const DsSliderDefaultProps: DsSliderProps = {
  'design-mode': 'true',
  color: 'secondary'
}
