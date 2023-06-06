import { MobileDatePickerProps } from '@mui/x-date-pickers'
import { DateOrTimeView } from '@mui/x-date-pickers/internals'

export interface DsDatePickerProps<TDate>
  extends MobileDatePickerProps<TDate> {}

export const DsDatePickerDefaultProps: DsDatePickerProps<DateOrTimeView> = {}
