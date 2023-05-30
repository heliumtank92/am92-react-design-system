import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import DsTypography from './DsTypography'

class DsSwitch extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    positiveValue: PropTypes.any,
    negativeValue: PropTypes.any,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    value: false,
    positiveValue: true,
    negativeValue: false
  }

  handleChange = (event, value) => {
    if (value === null) { return }
    const { name, onChange } = this.props
    onChange(name, value)
  }

  render () {
    const { value, positiveValue, negativeValue, ...restProps } = this.props

    return (
      <ToggleButtonGroup
        size='small'
        value={value}
        exclusive
        {...restProps}
        onChange={this.handleChange}
      >
        <ToggleButton value={positiveValue}>
          <DsTypography variant='supportBoldTextButton'>YES</DsTypography>
        </ToggleButton>
        <ToggleButton value={negativeValue}>
          <DsTypography variant='supportBoldTextButton'>NO</DsTypography>
        </ToggleButton>
      </ToggleButtonGroup>
    )
  }
}

export default DsSwitch
