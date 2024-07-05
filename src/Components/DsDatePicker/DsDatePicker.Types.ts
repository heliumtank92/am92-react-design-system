import {
  DatePickerProps,
  DateValidationError,
  DateView
} from '@mui/x-date-pickers'

export type TErrorMapKeys = Exclude<DateValidationError, null>
export type TValue = string | Date | undefined | null
export type TValueType = 'date' | 'formattedValue' | undefined
export interface DsDatePickerProps<TDate>
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
}

export const DsDatePickerDefaultProps: DsDatePickerProps<Date> = {
  orientation: 'portrait',
  closeOnSelect: false,
  format: 'dd/MM/yyyy',
  name: '',
  valueType: 'date'
}

export interface DsDatePickerState {
  open: boolean
  views: readonly DateView[]
}
export const DsDatePickerDefaultState: DsDatePickerState = {
  open: false,
  views: ['day']
}
