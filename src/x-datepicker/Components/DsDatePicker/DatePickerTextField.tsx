import React from 'react'
import { DateFieldProps } from '@mui/x-date-pickers'
import { useThemeProps } from '@mui/material'
import { DsTextFieldProps, DsTextField } from '../../../Components'

export interface DatePickerTextFieldProps
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

export const DatePickerTextField = React.forwardRef(
  (
    inProps: DatePickerTextFieldProps,
    inputRef: React.Ref<any>
  ): React.ReactNode => {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiPickersInput'
    })

    const { setOpen, ref, InputProps, focused, ownerState, ...other } = props
    const { readOnly } = InputProps || {}
    return <DsTextField readOnly={readOnly} {...other} />
  }
)
