import { SelectProps } from '@mui/material'
import { DsFormControlProps } from '../DsFormControl'
import { DsInputLabelProps } from '../DsInputLabel'
import { DsHelperTextProps } from '../DsHelperText'

interface OptionProp {
  label: string
  value: any
}

export interface DsSelectProps extends Omit<SelectProps, 'ref'> {
  ref?: React.Ref<any>
  FormControlProps?: Omit<
    DsFormControlProps,
    'fullWidth' | 'color' | 'error' | 'disabled'
  >
  InputLabelProps?: Omit<
    DsInputLabelProps,
    'ref' | 'error' | 'success' | 'htmlFor' | 'disabled'
  >
  FormHelperTextProps?: Omit<
    DsHelperTextProps,
    'ref' | 'color' | 'success' | 'error'
  >
  label?: string
  labelSupportText?: string
  helperText?: string
  success?: boolean
  options: OptionProp[]
  value?: string | string[]
}

export const DsSelectDefaultProps: DsSelectProps = {
  options: [],
  variant: 'filled',
  defaultValue: '',
  MenuProps: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    }
  }
}
