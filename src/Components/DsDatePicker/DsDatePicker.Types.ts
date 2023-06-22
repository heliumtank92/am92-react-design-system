import { DateOrTimeView, DatePickerProps } from '@mui/x-date-pickers'

export interface DsDatePickerProps<TDate>
  extends Omit<
    DatePickerProps<TDate>,
    | 'open'
    | 'onOpen'
    | 'onClose'
    | 'yearsPerRow'
    | 'onChange'
    | 'onError'
    | 'value'
    | 'defaultValue'
  > {
  onChange?: (name: string, value: string) => void
  onError?: (name: string, error: string) => void
  name: string
  value?: string
  defaultValue?: string
}

export const DsDatePickerDefaultProps: DsDatePickerProps<Date> = {
  orientation: 'portrait',
  closeOnSelect: false,
  format: 'dd/MM/yyyy',
  name: ''
}
export interface DsDatePickerState {
  open: boolean
}

export const DsDatePickerDefaultState: DsDatePickerState = {
  open: false
}
