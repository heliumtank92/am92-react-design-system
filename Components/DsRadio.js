import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

import DsTypo from './DsTypo'
import DsRemixIcon from './DsRemixIcon'

class DsRadio extends PureComponent {
  static propTypes = {
    label: PropTypes.node,
    labelPlacement: PropTypes.string
  }

  static defaultProps = {
    labelPlacement: 'end'
  }

  render () {
    const { label, labelPlacement, disabled, helperText, labelProps, radioProps, ...restProps } = this.props
    return (
      <>
        <FormControlLabel
          {...restProps}
          disabled={disabled}
          control={
            <Radio
              icon={<DsRemixIcon className='ri-checkbox-blank-circle-line' sx={{ fontSize: 'var(--ds-typo-fontSizeCool)' }} />}
              checkedIcon={<DsRemixIcon className='ri-radio-button-line' sx={{ fontSize: 'var(--ds-typo-fontSizeCool)' }} />}
              color='secondary'
              disabled={disabled}
              {...radioProps}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
        />
      </>
    )
  }
}

export default DsRadio
