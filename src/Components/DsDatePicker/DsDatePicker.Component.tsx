import React, { PureComponent } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { DatePicker, DateValidationError, DateView } from '@mui/x-date-pickers'
import { DefaultActionBar } from './DefaultActionBar'
import { DefaultToolbar } from './DefaultToolbar'
import {
  DsDatePickerDefaultProps,
  DsDatePickerDefaultState,
  DsDatePickerProps,
  DsDatePickerState
} from './DsDatePicker.Types'
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/models'
import { DateCalenderHeader } from './DateCalenderHeader'
import { DsIconButton } from '../DsIconButton'
import { DsInputAdornment } from '../DsInputAdornment'
import { DsRemixIcon } from '../DsRemixIcon'
import {
  DatePickerTextField,
  DatePickerTextFieldProps
} from './DatePickerTextField'
import {
  getDateFromValue,
  getErrorFromErrorMap,
  getValueTypeFromValue
} from './utils'

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
    const {
      onChange,
      onError,
      errorMap,
      name,
      valueType,
      format: formatType,
      views
    } = this.props

    if (!views) this.setState({ views: ['day'] })

    if (context.validationError && typeof onError === 'function') {
      const error = getErrorFromErrorMap(
        errorMap,
        context.validationError,
        value
      )
      onError(
        name,
        error,
        context.validationError,
        getValueTypeFromValue(value, valueType, formatType)
      )
      return
    }

    if (typeof onChange === 'function' && formatType) {
      onChange(name, getValueTypeFromValue(value, valueType, formatType))
    }
  }

  handleError = (error: DateValidationError, value: Date | null) => {
    const { onError, errorMap, name } = this.props
    if (error && typeof onError === 'function') {
      const errorMsg = getErrorFromErrorMap(errorMap, error, value)
      onError(name, errorMsg, error, value)
    }
  }

  handleViewChange = (value: DateView) => {
    this.setState({ views: [value, 'day'] })
  }

  render() {
    const {
      onChange,
      onError,
      defaultValue,
      value,
      valueType,
      format,
      onViewChange,
      views: propViews,
      disabled,
      ...restProps
    } = this.props
    const { open, views } = this.state
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...restProps}
          slots={{
            actionBar: DefaultActionBar,
            toolbar: DefaultToolbar,
            textField: DatePickerTextField,
            calendarHeader: DateCalenderHeader,
            ...this.props.slots
          }}
          slotProps={{
            ...this.props.slotProps,
            day: {
              //commented to show current day border highlight
              // disableHighlightToday: true,
              ...this.props.slotProps?.day
            },
            textField: {
              ...this.props.slotProps?.textField,
              endAdornment: (
                <DsInputAdornment
                  position="end"
                  disablePointerEvents={disabled}
                >
                  <DsIconButton disabled={disabled} onClick={this.onOpen}>
                    <DsRemixIcon
                      className="ri-calendar-line"
                      fontSize="bitterCold"
                    />
                  </DsIconButton>
                </DsInputAdornment>
              )
            } as DatePickerTextFieldProps,
            actionBar: ownerState => ({
              actions: ownerState.view === 'day' ? ['clear', 'accept'] : [],
              ...this.props.slotProps?.actionBar
            }),
            popper: {
              anchorEl: this.ref.current,
              //style to unset fixed width
              sx: {
                '.MuiMonthCalendar-root': {
                  width: '100%'
                }
              },
              ...this.props.slotProps?.popper
            }
          }}
          disabled={disabled}
          format={format}
          open={open}
          reduceAnimations
          onOpen={this.onOpen}
          onClose={this.onClose}
          onChange={this.handleChange}
          onViewChange={this.handleViewChange}
          onError={this.handleError}
          views={propViews || views}
          value={getDateFromValue(value, valueType, format)}
          defaultValue={getDateFromValue(defaultValue, valueType, format)}
          inputRef={this.ref}
        />
      </LocalizationProvider>
    )
  }
}
