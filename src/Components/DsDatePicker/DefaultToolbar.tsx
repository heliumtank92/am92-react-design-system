import React, { Component } from 'react'

import { DatePickerToolbarProps } from '@mui/x-date-pickers'
import { DsIconButton } from '../DsIconButton'
import { DsRemixIcon } from '../DsRemixIcon'
import { DsStack } from '../DsStack'
import { DsTypography } from '../DsTypography'
import { DsDatePickerProps } from './DsDatePicker.Types'

export class DefaultToolbar extends Component<
  DatePickerToolbarProps<Date> & { ownerState?: any }
> {
  render(): React.ReactNode {
    const { value, ownerState } = this.props
    const { onCancel } = ownerState
    const formatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    } as Intl.DateTimeFormatOptions
    const currentDateAndDay =
      value && value.toLocaleDateString('en-GB', formatOptions)
    return (
      <DsStack
        sx={{
          backgroundColor: 'var(--ds-colour-surfaceSecondary)',
          padding: 'var(--ds-spacing-cool) var(--ds-spacing-bitterCold)',
          gridArea: '1 / 2 / auto / 4',
          borderRadius: '16px 16px 0px 0px',
          borderBottom: '1px solid var(--ds-colour-strokeDefault)'
        }}
      >
        <DsTypography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          variant="headingBoldExtraSmall"
        >
          {value ? `Selected date: ${currentDateAndDay}` : 'Select a date'}
          <DsIconButton onClick={onCancel}>
            <DsRemixIcon className="ri-close-line" />
          </DsIconButton>
        </DsTypography>
      </DsStack>
    )
  }
}
