import React, { Component } from 'react'

import { DsStack } from '../DsStack'
import { DsTypography } from '../DsTypography'
import { DatePickerToolbarProps } from '@mui/x-date-pickers'
import { parseISO } from 'date-fns'

export class DefaultToolbar extends Component<DatePickerToolbarProps<Date>> {
  setViewYear = () => {
    const { onViewChange } = this.props
    onViewChange('year')
  }

  render(): React.ReactNode {
    const { disabled, readOnly, view, value } = this.props
    const isClickable = !(disabled || readOnly || view === 'year')
    const currentYear = (value && value.getFullYear()) || '----'
    const formatOptions = {
      month: 'short',
      day: 'numeric',
      weekday: 'short'
    } as Intl.DateTimeFormatOptions
    const currentDateAndDay =
      (value && value.toLocaleDateString('en-us', formatOptions)) ||
      '---, --- --'

    return (
      <DsStack
        sx={{
          backgroundColor: 'var(--ds-colour-surfaceSecondary)',
          padding: 'var(--ds-spacing-bitterCold) var(--ds-spacing-bitterCold)',
          gridArea: '1 / 2 / auto / 4',
          cursor: isClickable ? 'pointer' : 'unset'
        }}
        spacing="var(--ds-spacing-quickFreeze)"
        onClick={(isClickable && this.setViewYear) || undefined}
      >
        <DsTypography
          variant="headingBoldExtraSmall"
          sx={{ color: 'var(--ds-colour-typoSecondary)' }}
        >
          {currentYear}
        </DsTypography>
        <DsTypography
          variant="headingBoldMedium"
          sx={{ color: 'var(--ds-colour-typoPrimary)' }}
        >
          {currentDateAndDay}
        </DsTypography>
      </DsStack>
    )
  }
}
