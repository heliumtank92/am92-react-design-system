import React, { PureComponent } from 'react'
import { DateFieldProps, DateOrTimeView } from '@mui/x-date-pickers'
import { DsTextFieldProps, DsTextField } from '../DsTextField'
import { TextFieldProps } from '@mui/material'

export interface DatePickerTextFieldProps
  extends Omit<
    DsTextFieldProps,
    'margin' | 'onInvalid' | 'onKeyDown' | 'onBlur' | 'onKeyUp' | 'ref'
  > {
  setOpen?: (open: boolean) => void
  InputProps?: DateFieldProps<DateOrTimeView>['InputProps']
  ref?: DateFieldProps<DateOrTimeView>['ref']
  focused?: boolean
  ownerState?: any
}

export const DatePickerTextField = React.forwardRef(
  (
    props: DatePickerTextFieldProps,
    inputRef: React.Ref<any>
  ): React.ReactNode => {
    const { setOpen, ref, InputProps, focused, ownerState, ...other } = props
    const { readOnly } = InputProps || {}
    return <DsTextField readOnly={readOnly} {...other} />
  }
)
