import {
  DatePickerProps,
  DateValidationError,
  LocalizationProviderProps
} from '@mui/x-date-pickers'
import { DsTextFieldProps } from '../../../Components'
import { Locale } from 'date-fns'

export type TErrorMapKeys = Exclude<DateValidationError, null>
export type TValue = string | Date | undefined | null
export type TValueType = 'date' | 'formattedValue' | 'ISO' | undefined
export interface DsDatePickerProps<TDate extends Date>
  extends Omit<
      DatePickerProps<TDate>,
      | 'open'
      | 'onOpen'
      | 'onClose'
      | 'yearsPerRow'
      | 'monthsPerRow'
      | 'onChange'
      | 'onError'
      | 'value'
      | 'defaultValue'
    >,
    Pick<
      DsTextFieldProps,
      | 'required'
      | 'fullWidth'
      | 'label'
      | 'InputLabelProps'
      | 'labelSupportText'
      | 'helperText'
      | 'HelperTextProps'
      | 'FormControlProps'
      | 'success'
      | 'error'
      | 'onFocus'
      | 'onBlur'
    > {
  onChange?: (name: string, value: TValue) => void
  onError?: (
    name: string,
    error: string,
    errorCode: DateValidationError,
    value: TValue | null
  ) => void
  name: string
  value?: TValue
  defaultValue?: TValue
  valueType?: TValueType
  errorMap?: Partial<Record<TErrorMapKeys, string>>
  LocalizationProviderProps?: LocalizationProviderProps<Date, Locale>
}

export const DsDatePickerDefaultProps: DsDatePickerProps<Date> = {
  orientation: 'portrait',
  closeOnSelect: false,
  format: 'dd/MM/yyyy',
  name: '',
  valueType: 'date',
  fixedWeekNumber: 6
}
