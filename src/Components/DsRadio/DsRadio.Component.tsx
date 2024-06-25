import React, { PureComponent } from 'react'

import Radio from '@mui/material/Radio'
import { DsRadioDefaultProps, DsRadioProps } from './DsRadio.Types'
import { DsFormControlLabel } from '../DsFormControlLabel'
import { DsRemixIcon } from '../DsRemixIcon'

export class DsRadio extends PureComponent<DsRadioProps> {
  static defaultProps = DsRadioDefaultProps

  render() {
    const { disabled, RadioProps, ...restProps } = this.props
    return (
      <DsFormControlLabel
        {...restProps}
        disabled={disabled}
        control={
          <Radio
            icon={
              <DsRemixIcon
                className="ri-checkbox-blank-circle-line"
                sx={{ fontSize: 'var(--ds-typo-fontSizeCool)' }}
              />
            }
            checkedIcon={
              <DsRemixIcon
                className="ri-radio-button-line"
                sx={{ fontSize: 'var(--ds-typo-fontSizeCool)' }}
              />
            }
            color="secondary"
            {...RadioProps}
            disabled={disabled}
          />
        }
      />
    )
  }
}
