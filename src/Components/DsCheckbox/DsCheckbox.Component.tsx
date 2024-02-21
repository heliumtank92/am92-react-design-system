import * as React from 'react'
import { DsCheckboxProps } from './DsCheckbox.Types'
import { Checkbox } from '@mui/material'
import { DsRemixIcon } from '../DsRemixIcon'

export class DsCheckbox extends React.PureComponent<DsCheckboxProps> {
  render() {
    return (
      <Checkbox
        icon={
          <DsRemixIcon className="ri-checkbox-blank-line" color="inherit" />
        }
        checkedIcon={
          <DsRemixIcon className="ri-checkbox-fill" color="inherit" />
        }
        indeterminateIcon={
          <DsRemixIcon
            className="ri-checkbox-indeterminate-fill"
            color="inherit"
          />
        }
        {...this.props}
      />
    )
  }
}
