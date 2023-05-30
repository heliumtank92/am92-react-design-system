import React, { PureComponent } from 'react'
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel'
import DsTypography from './DsTypography'

export interface DsInputLabelProps extends InputLabelProps {
  label?: React.ReactNode
  labelSupportText?: React.ReactNode
  success?: boolean
  error?: boolean
}

export default class DsInputLabel extends PureComponent<DsInputLabelProps> {
  render() {
    const {
      label,
      labelSupportText,
      success,
      error,
      ...inputLabelProps
    } = this.props

    if (!label && !labelSupportText) {
      return
    }

    return (
      <InputLabel error={error} {...inputLabelProps}>
        <DsTypography component="p" variant="bodyRegularMedium">
          {label}
        </DsTypography>
        <DsTypography
          component="p"
          variant="bodyRegularSmall"
          color="text.secondary"
        >
          {labelSupportText}
        </DsTypography>
      </InputLabel>
    )
  }
}
