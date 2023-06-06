import React, { PureComponent } from 'react'
import InputLabel from '@mui/material/InputLabel'
import { DsInputLabelProps } from './DsInputLabel.Types'
import { DsTypography } from '../DsTypography'

export class DsInputLabel extends PureComponent<DsInputLabelProps> {
  render() {
    const { label, labelSupportText, success, error, ...inputLabelProps } =
      this.props

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
