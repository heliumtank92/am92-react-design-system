import { format as formatDate, isValid, parse } from 'date-fns'
import {
  DsDatePickerDefaultProps,
  DsDatePickerProps,
  TValue,
  TValueType
} from './DsDatePicker.Types'
import { DateValidationError } from '@mui/x-date-pickers'

export const getDateFromValue = (
  value: TValue,
  valueType: TValueType,
  format: DsDatePickerProps<Date>['format'] = DsDatePickerDefaultProps.format
): Date | undefined | null => {
  if (value === undefined) {
    return
  }

  if (!value) {
    return null
  }

  switch (valueType) {
    case 'date': {
      if (isValid(value)) {
        return value as Date
      } else {
        console.warn(
          `Expected the value to be of Date type but recived ${value}. Please check the value passed in your integration.`
        )
        return null
      }
    }
    case 'formattedValue': {
      const parsedValue = parse(value as string, format as string, new Date())

      if (isValid(parsedValue)) {
        return parsedValue
      } else {
        console.warn(
          `Expected the value to be of ${format} type but recived ${value}. Please check the value passed in your integration.`
        )
        return null
      }
    }
  }
}

export const getValueTypeFromValue = (
  value: Date | null,
  valueType: TValueType,
  format: DsDatePickerProps<Date>['format'] = DsDatePickerDefaultProps.format
): TValue => {
  if (value === undefined) {
    return
  }

  if (!value) {
    return null
  }

  switch (valueType) {
    case 'date': {
      return value
    }
    case 'formattedValue': {
      const formattedDate = formatDate(value, format as string)
      return formattedDate
    }
  }
}

export const getErrorFromErrorMap = (
  errorMap: DsDatePickerProps<Date>['errorMap'],
  error: DateValidationError,
  value: TValue | null
) => {
  if (!errorMap) {
    return error || 'Unkown Error'
  }

  if (!error) {
    return 'Unkown Error'
  }

  const selectedDate = `${value}` || ''
  const errorMessage = (errorMap[error] || error).replace(
    '${selectedDate}',
    selectedDate
  )

  return errorMessage
}
