import { DsInputBaseDefaultProps, DsInputBaseProps } from '../DsInputBase'
import { DsFormControlProps } from '../DsFormControl'
import { DsInputLabelProps } from '../DsInputLabel'
import { DsHelperTextProps } from '../DsHelperText'

export interface DsTextFieldProps extends DsInputBaseProps {
  ref?: React.Ref<any>
  FormControlProps?: DsFormControlProps
  InputLabelProps?: Omit<DsInputLabelProps, 'ref'>
  FormHelperTextProps?: Omit<DsHelperTextProps, 'ref'>
  label?: string
  labelSupportText?: string
  helperText?: string
  success?: boolean
}

export const DsTextFieldDefaultProps: DsTextFieldProps = DsInputBaseDefaultProps
