import React, { useState, useRef } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {
  DatePicker,
  DateValidationError,
  DateView,
  LocalizationProvider
} from '@mui/x-date-pickers'
import { DefaultActionBar } from './DefaultActionBar'
import { DefaultToolbar } from './DefaultToolbar'
import {
  DsDatePickerDefaultProps,
  DsDatePickerProps
} from './DsDatePicker.Types'
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/models'
import { DateCalenderHeader } from './DateCalenderHeader'
import {
  getDateFromValue,
  getErrorFromErrorMap,
  getValueTypeFromValue
} from './utils'
import {
  DsInputAdornment,
  DsIconButton,
  DsRemixIcon
} from '../../../Components'
import { useThemeProps } from '@mui/system'
import DatePickerTextField, {
  IDatePickerTextFieldProps
} from './DatePickerTextField'

export const DsDatePicker: React.FC<DsDatePickerProps<Date>> = inProps => {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiDatePicker'
  })

  const [open, setOpen] = useState<boolean>(false)
  const [views, setViews] = useState<readonly DateView[]>(['day'])

  const ref = useRef<HTMLInputElement>(null)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  const handleChange = (
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
    } = props

    if (!views) setViews(['day'])

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

  const handleError = (error: DateValidationError, value: Date | null) => {
    const { onError, errorMap, name } = props
    if (error && typeof onError === 'function') {
      const errorMsg = getErrorFromErrorMap(errorMap, error, value)
      onError(name, errorMsg, error, value)
    }
  }

  const handleViewChange = (value: DateView) => {
    setViews([value, 'day'])
  }

  const {
    onChange,
    onError,
    defaultValue,
    value,
    valueType,
    format,
    views: propViews,
    disabled,
    readOnly = false,
    required,
    fullWidth,
    onBlur,
    onFocus,
    label,
    InputLabelProps,
    labelSupportText,
    helperText,
    HelperTextProps,
    FormControlProps,
    success,
    error,
    LocalizationProviderProps: inLocalizationProviderProps,
    ...restProps
  } = props

  const LocalizationProviderProps = useThemeProps({
    props: inLocalizationProviderProps,
    name: 'MuiLocalizationProvider'
  })

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      {...LocalizationProviderProps}
    >
      <DatePicker
        {...restProps}
        slots={{
          actionBar: DefaultActionBar,
          toolbar: DefaultToolbar,
          textField: DatePickerTextField,
          calendarHeader: DateCalenderHeader,
          ...props.slots
        }}
        slotProps={{
          ...props.slotProps,
          day: {
            // commented to show current day border highlight
            // disableHighlightToday: true,
            ...props.slotProps?.day
          },
          textField: {
            required,
            fullWidth,
            onBlur,
            onFocus,
            label,
            InputLabelProps,
            labelSupportText,
            helperText,
            HelperTextProps,
            FormControlProps,
            success,
            error,
            readOnly,
            ...props.slotProps?.textField,
            endAdornment: (
              <DsInputAdornment position="end" disablePointerEvents={disabled}>
                <DsIconButton disabled={disabled} onClick={onOpen}>
                  <DsRemixIcon
                    className="ri-calendar-line"
                    fontSize="bitterCold"
                  />
                </DsIconButton>
              </DsInputAdornment>
            )
          } as IDatePickerTextFieldProps,
          actionBar: ownerState => ({
            actions: ownerState.view === 'day' ? ['clear', 'accept'] : [],
            ...props.slotProps?.actionBar
          }),
          popper: {
            anchorEl: ref.current,
            // style to unset fixed width
            sx: {
              '.MuiMonthCalendar-root': {
                width: '100%'
              }
            },
            ...props.slotProps?.popper
          }
        }}
        readOnly={readOnly}
        disabled={disabled}
        format={format}
        open={open}
        reduceAnimations
        onOpen={onOpen}
        onClose={onClose}
        onChange={handleChange}
        onViewChange={handleViewChange}
        onError={handleError}
        views={propViews || views}
        value={getDateFromValue(value, valueType, format)}
        defaultValue={getDateFromValue(defaultValue, valueType, format)}
        inputRef={ref}
      />
    </LocalizationProvider>
  )
}

DsDatePicker.defaultProps = DsDatePickerDefaultProps
