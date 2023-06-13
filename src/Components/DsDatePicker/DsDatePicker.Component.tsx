import React, { PureComponent } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { DateOrTimeView, MobileDatePicker } from '@mui/x-date-pickers'
import { DefaultActionBar } from './DefaultActionBar'
import { DefaultToolbar } from './DefaultToolbar'
import { DatePickerTextField } from './DatePickerTextField'
import {
  DsDatePickerDefaultProps,
  DsDatePickerProps
} from './DsDatePicker.Types'

class DsDatePicker extends PureComponent<DsDatePickerProps<DateOrTimeView>> {
  static defaultProps = DsDatePickerDefaultProps

  render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          slots={{
            actionBar: DefaultActionBar,
            toolbar: DefaultToolbar,
            textField: DatePickerTextField
          }}
          {...this.props}
        />
      </LocalizationProvider>
    )
  }
}

export default DsDatePicker
