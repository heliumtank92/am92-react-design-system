import React, { PureComponent } from 'react'
import { DateView, PickersCalendarHeaderProps } from '@mui/x-date-pickers'
import { format, addMonths } from 'date-fns'
import { DsButtonBase } from '../DsButtonBase'
import { DsIconButton } from '../DsIconButton'
import { DsRemixIcon } from '../DsRemixIcon'
import { DsStack } from '../DsStack'
import { DsTypography } from '../DsTypography'

export class DateCalenderHeader extends PureComponent<
  PickersCalendarHeaderProps<Date>
> {
  handleMonthChange =
    (direction: 'left' | 'right', numberOfMonths: 1 | -1 | 12 | -12) => () => {
      const { currentMonth, onMonthChange } = this.props
      onMonthChange(addMonths(currentMonth, numberOfMonths), direction)
    }

  handleViewShow = (view: DateView) => () => {
    const { onViewChange } = this.props
    onViewChange && onViewChange(view)
  }

  render(): React.ReactNode {
    const { currentMonth, onMonthChange, view } = this.props

    const isYearNavigationDisabled = view === 'month'
    const isMonthNavigationDisabled = view === 'year'

    return (
      <DsStack
        direction="row"
        justifyContent="space-between"
        // spacing='var(--ds-spacing-frostbite)'
        sx={{ p: 'var(--ds-spacing-frostbite)' }}
      >
        <DsStack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing="var(--ds-spacing-frostbite)"
        >
          <DsIconButton
            disabled={isYearNavigationDisabled || isMonthNavigationDisabled}
            onClick={this.handleMonthChange('left', -1)}
          >
            <DsRemixIcon className="ri-arrow-drop-left-line" />
          </DsIconButton>
          <DsButtonBase
            disabled={isMonthNavigationDisabled}
            onClick={this.handleViewShow('month')}
          >
            <DsTypography
              variant="bodyBoldSmall"
              color={
                isMonthNavigationDisabled ? 'text.disabled' : 'text.primary'
              }
            >
              {format(currentMonth, 'MMM')}
            </DsTypography>
            <DsRemixIcon
              className="ri-arrow-drop-down-fill"
              color={isMonthNavigationDisabled ? 'iconDisabled' : 'iconDefault'}
              sx={{ mr: 'var(--ds-spacing-quickFreeze)' }}
            />
          </DsButtonBase>
          <DsIconButton
            disabled={isYearNavigationDisabled || isMonthNavigationDisabled}
            onClick={this.handleMonthChange('right', 1)}
          >
            <DsRemixIcon className="ri-arrow-drop-right-line" />
          </DsIconButton>
        </DsStack>
        <DsStack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing="var(--ds-spacing-frostbite)"
        >
          <DsIconButton
            disabled={isYearNavigationDisabled || isMonthNavigationDisabled}
            onClick={this.handleMonthChange('left', -12)}
          >
            <DsRemixIcon className="ri-arrow-drop-left-line" />
          </DsIconButton>
          <DsButtonBase
            disabled={isYearNavigationDisabled}
            onClick={this.handleViewShow('year')}
          >
            <DsTypography
              variant="bodyBoldSmall"
              color={
                isYearNavigationDisabled ? 'text.disabled' : 'text.primary'
              }
            >
              {format(currentMonth, 'yyyy')}
            </DsTypography>
            <DsRemixIcon
              className="ri-arrow-drop-down-fill"
              color={isYearNavigationDisabled ? 'iconDisabled' : 'iconDefault'}
              sx={{ mr: 'var(--ds-spacing-quickFreeze)' }}
            />
          </DsButtonBase>
          <DsIconButton
            disabled={isYearNavigationDisabled || isMonthNavigationDisabled}
            onClick={this.handleMonthChange('right', 12)}
          >
            <DsRemixIcon className="ri-arrow-drop-right-line" />
          </DsIconButton>
        </DsStack>
      </DsStack>
    )
  }
}
