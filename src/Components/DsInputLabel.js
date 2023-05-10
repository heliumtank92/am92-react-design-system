import React, { PureComponent } from 'react'
import InputLabel from '@mui/material/InputLabel'
import DsTypography from './DsTypography'

export default class DsInputLabel extends PureComponent {
  render () {
    const {
      label,
      labelSupportText,
      success,
      error,
      ...inputLabelProps
    } = this.props

    if (!label && !labelSupportText) { return }

    return (
      <InputLabel error={error} {...inputLabelProps}>
        <DsTypography
          component='p'
          variant='bodyRegularMediun'
        >
          {label}
        </DsTypography>
        <DsTypography
          component='p'
          variant='bodyRegularSmall'
          color='text.secondary'
        >
          {labelSupportText}
        </DsTypography>
      </InputLabel>
    )
  }
}
