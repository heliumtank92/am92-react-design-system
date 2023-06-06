import { DsInputBaseDefaultProps, DsInputBaseProps } from '../DsInputBase'
import { DsFormControlProps } from '../DsFormControl'
import { DsInputLabelProps } from '../DsInputLabel'
import { DsHelperTextProps } from '../DsHelperText'
import { TextFieldProps } from '@mui/material'

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
  label?: TextFieldProps['label']
  labelSupportText?: string
  helperText?: TextFieldProps['helperText']
  success?: boolean
}

export const DsTextFieldDefaultProps: DsTextFieldProps = DsInputBaseDefaultProps
