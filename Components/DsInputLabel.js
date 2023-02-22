import React, { PureComponent } from 'react'
import InputLabel from '@mui/material/InputLabel'
import DsTypo from './DsTypo'

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
        <DsTypo
          component='p'
          variant='bodyRegularMediun'
        >
          {label}
        </DsTypo>
        <DsTypo
          component='p'
          variant='bodyRegularSmall'
          color='text.secondary'
        >
          {labelSupportText}
        </DsTypo>
      </InputLabel>
    )
  }
}
