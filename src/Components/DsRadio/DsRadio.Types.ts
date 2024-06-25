import { RadioProps } from '@mui/material'
import { DsFormControlLabelProps } from '../DsFormControlLabel'

export interface DsRadioProps extends Omit<DsFormControlLabelProps, 'control'> {
  RadioProps?: Omit<RadioProps, 'disabled'>
}

export const DsRadioDefaultProps: DsRadioProps = {
  label: '',
  labelPlacement: 'end'
}
