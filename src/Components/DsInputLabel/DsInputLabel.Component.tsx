import React, { PureComponent } from 'react'
import InputLabel from '@mui/material/InputLabel'
import { DsInputLabelProps } from './DsInputLabel.Types'
import { DsTypography } from '../DsTypography'

export class DsInputLabel extends PureComponent<DsInputLabelProps> {
  render() {
    const { label, labelSupportText, success, error, ...inputLabelProps } =
      this.props

    if (!label && !labelSupportText) {
      return null
    }

    return (
      <InputLabel error={error} {...inputLabelProps}>
        <DsTypography
          component="span"
          variant="bodyRegularMedium"
          sx={{ float: 'left' }}
        >
          {label}
        </DsTypography>
        <DsTypography
          component="span"
          variant="bodyRegularSmall"
          color="text.secondary"
          sx={{ float: 'right', width: '100%' }}
        >
          {labelSupportText}
        </DsTypography>
      </InputLabel>
    )
  }
}
