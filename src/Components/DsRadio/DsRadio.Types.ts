import { RadioProps } from '@mui/material'
import { DsFormControlLabelProps } from '../DsFormControlLabel'

export interface DsRadioProps extends Omit<DsFormControlLabelProps, 'control'> {
  RadioProps?: Omit<RadioProps, 'icon' | 'checkedIcon' | 'color' | 'disabled'>
}

export const DsRadioDefaultProps: DsRadioProps = {
  label: '',
  labelPlacement: 'end'
}
