import React, { Component } from 'react'

import { DsStack } from '../DsStack'
import { DsTypography } from '../DsTypography'
import { DatePickerToolbarProps } from '@mui/x-date-pickers'
import { DateOrTimeView } from '@mui/x-date-pickers/internals'

export class DefaultToolbar extends Component<
  DatePickerToolbarProps<DateOrTimeView>
> {
  render(): React.ReactNode {
    const val = new Date()
    const currentYear = val && val.getFullYear()
    const formatOptions = {
      month: 'short',
      day: 'numeric',
      weekday: 'short'
    } as Intl.DateTimeFormatOptions
    const currentDateAndDay =
      val && val.toLocaleDateString('en-us', formatOptions)

    return (
      <DsStack
        sx={{
          backgroundColor: 'var(--ds-color-surfaceSecondary)',
          padding: 'var(--ds-spacing-bitterCold) var(--ds-spacing-bitterCold)'
        }}
        spacing="var(--ds-spacing-quickFreeze)"
      >
        <DsTypography
          variant="headingBoldExtraSmall"
          sx={{ color: 'var(--ds-color-typoSecondary)' }}
        >
          {currentYear}
        </DsTypography>
        <DsTypography
          variant="headingBoldMedium"
          sx={{ color: 'var(--ds-color-typoPrimary)' }}
        >
          {currentDateAndDay}
        </DsTypography>
      </DsStack>
    )
  }
}
