import { useThemeProps } from '@mui/system'
import { DateFieldProps } from '@mui/x-date-pickers'
import React, { FunctionComponent } from 'react'
import { DsTextField, DsTextFieldProps } from '../../../Components'

export interface IDatePickerTextFieldProps
  extends Omit<
    DsTextFieldProps,
    'margin' | 'onInvalid' | 'onKeyDown' | 'onBlur' | 'onKeyUp' | 'ref'
  > {
  setOpen?: (open: boolean) => void
  InputProps?: DateFieldProps<Date>['InputProps']
  ref?: DateFieldProps<Date>['ref']
  focused?: boolean
  ownerState?: any
}

const DatePickerTextField: FunctionComponent<IDatePickerTextFieldProps> = (
  props: IDatePickerTextFieldProps
) => {
  const mergedProps = useThemeProps({
    props: props,
    name: 'MuiPickersInput'
  })

  const { setOpen, ref, InputProps, focused, ownerState, ...other } =
    mergedProps
  const { readOnly } = InputProps || {}
  return <DsTextField readOnly={readOnly} {...other} />
}

export default DatePickerTextField
