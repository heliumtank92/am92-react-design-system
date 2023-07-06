import React, { PureComponent } from 'react'

import { DsTextField, DsTextFieldProps } from '../DsTextField'
import { DsInputAdornment } from '../DsInputAdornment'
import { DsIconButton } from '../DsIconButton'
import { DsRemixIcon } from '../DsRemixIcon'
import { TextFieldProps } from '@mui/material'
import {
  BaseSingleInputFieldProps,
  DateFieldProps,
  DateOrTimeView,
  DateValidationError,
  FieldSection
} from '@mui/x-date-pickers'

interface DatePickerTextFieldProps
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
  (props: DatePickerTextFieldProps, inputRef: React.Ref<any>) => {
    const { setOpen, ref, InputProps, focused, ownerState, ...other } = props

    return (
      <DsTextField
        {...other}
        endAdornment={
          <DsInputAdornment
            position="end"
            onClick={() => {
              setOpen && setOpen(true)
            }}
          >
            <DsIconButton>
              <DsRemixIcon className="ri-calendar-line" fontSize="bitterCold" />
            </DsIconButton>
          </DsInputAdornment>
        }
      />
    )
  }
)
