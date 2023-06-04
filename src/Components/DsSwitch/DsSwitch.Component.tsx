import React, { PureComponent } from 'react'
import { DsSwitchDefaultProps, DsSwitchProps } from './DsSwitch.Types'
import { DsToggleButtonGroup } from '../DsToggleButtonGroup'
import { DsToggleButton } from '../DsToggleButton'
import { DsTypography } from '../DsTypography'

export class DsSwitch extends PureComponent<DsSwitchProps> {
  static defaultProp = DsSwitchDefaultProps

  handleChange = (event: any, value: any) => {
    if (value === null) {
      return
    }
    const { name, onChange } = this.props
    onChange(name, value)
  }

  render() {
    const { positiveValue, negativeValue, ...restProps } = this.props

    return (
      <DsToggleButtonGroup
        {...restProps}
        ds-variant="switch"
        exclusive
        size="small"
        onChange={this.handleChange}
      >
        <DsToggleButton value={positiveValue}>
          <DsTypography variant="supportBoldTextButton">YES</DsTypography>
        </DsToggleButton>
        <DsToggleButton value={negativeValue}>
          <DsTypography variant="supportBoldTextButton">NO</DsTypography>
        </DsToggleButton>
      </DsToggleButtonGroup>
    )
  }
}
