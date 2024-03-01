import React, { PureComponent } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import {
  DateOrTimeView,
  DatePicker,
  DateValidationError
} from '@mui/x-date-pickers'
import { DefaultActionBar } from './DefaultActionBar'
import { DefaultToolbar } from './DefaultToolbar'
import { DatePickerTextField } from './DatePickerTextField'
import {
  DsDatePickerDefaultProps,
  DsDatePickerDefaultState,
  DsDatePickerProps,
  DsDatePickerState
} from './DsDatePicker.Types'
import { DateCalenderLeftArrowIcon } from './DateCalenderLeftArrowIcon'
import { DateCalenderRightArrowIcon } from './DateCalenderRightArrowIcon'
import { parseISO } from 'date-fns/esm'
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/models'
import { format } from 'date-fns'

export class DsDatePicker extends PureComponent<
  DsDatePickerProps<Date>,
  DsDatePickerState
> {
  static defaultProps = DsDatePickerDefaultProps

  state = DsDatePickerDefaultState
  ref = React.createRef<HTMLInputElement>()

  setOpen = (open: boolean) => this.setState({ open })
  onOpen = () => this.setOpen(true)
  onClose = () => this.setOpen(false)
  handleChange = (
    value: Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const { onChange, onError, name, format: formatType } = this.props
    if (context.validationError && typeof onError === 'function') {
      onError(name, context.validationError)
      return
    }

    if (typeof onChange === 'function' && value && formatType) {
      onChange(name, format(value, formatType))
    }
  }

  handleError = (error: DateValidationError, value: Date | null) => {
    const { onError, name } = this.props
    if (error && typeof onError === 'function') {
      onError(name, error)
    }
  }

  render() {
    const { onChange, onError, defaultValue, value, ...restProps } = this.props
    const { open } = this.state
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...restProps}
          slots={{
            actionBar: DefaultActionBar,
            toolbar: DefaultToolbar,
            textField: DatePickerTextField,
            leftArrowIcon: DateCalenderLeftArrowIcon,
            rightArrowIcon: DateCalenderRightArrowIcon,
            ...this.props.slots
          }}
          slotProps={{
            ...this.props.slotProps,
            day: {
              disableHighlightToday: true,
              ...this.props.slotProps?.day
            },
            textField: {
              ...this.props.slotProps?.textField,
              setOpen: this.setOpen
            } as any,
            actionBar: {
              actions: ['accept', 'cancel'],
              ...this.props.slotProps?.actionBar
            },
            popper: {
              anchorEl: this.ref.current,
              ...this.props.slotProps?.popper
            }
          }}
          open={open}
          onOpen={this.onOpen}
          onClose={this.onClose}
          onChange={this.handleChange}
          onError={this.handleError}
          value={parseISO(value || '')}
          defaultValue={(defaultValue && parseISO(defaultValue)) || undefined}
          inputRef={this.ref}
        />
      </LocalizationProvider>
    )
  }
}
