import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import DsButton from './DsButton'
import DsButtonGroup from './DsButtonGroup'
import DsTypo from './DsTypo'
import DsStack from './DsStack'
import DsTextField from './DsTextField'
import DsInputAdornment from './DsInputAdornment'
import DsRemixIcon from './DsRemixIcon'
import DsIconButton from './DsIconButton'
import { MobileDatePicker } from '@mui/x-date-pickers'

const DefaultActionBar = (props) => {
  const { onAccept, onCancel } = props
  return (
    <DsButtonGroup fullWidth size='medium'>
      <DsButton color='secondary' onClick={onCancel}> Cancel </DsButton>
      <DsButton color='primary' onClick={onAccept}> Done </DsButton>
    </DsButtonGroup>
  )
}

const DefaultToolbar = (props) => {
  const { parsedValue } = props

  const val = parsedValue || new Date()
  const currentYear = val && val.getFullYear()
  const formatOptions = { month: 'short', day: 'numeric', weekday: 'short' }
  const currentDateAndDay = val && val.toLocaleDateString('en-us', formatOptions)

  return (
    <DsStack
      sx={{
        backgroundColor: 'var(--ds-color-surfaceSecondary)',
        padding: 'var(--ds-spacing-bitterCold) var(--ds-spacing-bitterCold)'
      }}
      spacing='var(--ds-spacing-quickFreeze)'
    >
      <DsTypo variant='headingBoldExtraSmall' sx={{ color: 'var(--ds-color-typoSecondary)' }}>{currentYear}</DsTypo>
      <DsTypo variant='headingBoldMedium' sx={{ color: 'var(--ds-color-typoPrimary)' }}>{currentDateAndDay}</DsTypo>
    </DsStack>
  )
}

class DsDatePicker extends PureComponent {
  static propTypes = {
  }

  static defaultProps = {
    color: 'secondary'
  }

  render () {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          components={{ ActionBar: DefaultActionBar }}
          ToolbarComponent={DefaultToolbar}
          renderInput={
            (params) => {
              const { onClick } = params
              return (
                <DsTextField
                  {...params}
                  endAdornment={(
                    <DsInputAdornment
                      position='end'
                    >
                      <DsIconButton onClick={onClick}>
                        <DsRemixIcon className='ri-calendar-line' fontSize='bitterCold' />
                      </DsIconButton>
                    </DsInputAdornment>
                  )}
                />
              )
            }
          }
          {...this.props}
        />
      </LocalizationProvider>
    )
  }
}

export default DsDatePicker
