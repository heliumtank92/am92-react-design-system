import React, { PureComponent } from 'react'

import { DsTextField, DsTextFieldProps } from '../DsTextField'
import { DsInputAdornment } from '../DsInputAdornment'
import { DsIconButton } from '../DsIconButton'
import { DsRemixIcon } from '../DsRemixIcon'

interface DatePickerTextFieldProps
  extends Omit<
    DsTextFieldProps,
    'margin' | 'onInvalid' | 'onKeyDown' | 'onBlur' | 'onKeyUp'
  > {}

export class DatePickerTextField extends PureComponent<DatePickerTextFieldProps> {
  render(): React.ReactNode {
    const { onClick } = this.props

    return (
      <DsTextField
        {...this.props}
        endAdornment={
          <DsInputAdornment position="end" onClick={onClick}>
            <DsIconButton>
              <DsRemixIcon className="ri-calendar-line" fontSize="bitterCold" />
            </DsIconButton>
          </DsInputAdornment>
        }
      />
    )
  }
}
