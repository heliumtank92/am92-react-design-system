import { DsInputBaseDefaultProps, DsInputBaseProps } from '../DsInputBase'
import { DsFormControlProps } from '../DsFormControl'
import { DsInputLabelProps } from '../DsInputLabel'
import { DsHelperTextProps } from '../DsHelperText'

export interface DsTextFieldProps extends DsInputBaseProps {
  ref?: React.Ref<any>
  FormControlProps?: Omit<
    DsFormControlProps,
    'fullWidth' | 'color' | 'error' | 'disabled'
  >
  InputLabelProps?: Omit<
    DsInputLabelProps,
    'ref' | 'error' | 'success' | 'htmlFor' | 'disabled'
  >
  HelperTextProps?: Omit<
    DsHelperTextProps,
    'ref' | 'color' | 'success' | 'error'
  >
  label?: string
  labelSupportText?: string
  helperText?: string
  success?: boolean
}

export const DsTextFieldDefaultProps: DsTextFieldProps = DsInputBaseDefaultProps
