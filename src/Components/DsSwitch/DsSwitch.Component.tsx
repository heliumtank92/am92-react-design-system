import React, { PureComponent } from 'react'
import { DsSwitchDefaultProps, DsSwitchProps } from './DsSwitch.Types'
import { DsToggleButtonGroup } from '../DsToggleButtonGroup'
import { DsToggleButton } from '../DsToggleButton'
import { DsTypography } from '../DsTypography'

export class DsSwitch extends PureComponent<DsSwitchProps> {
  static defaultProps = DsSwitchDefaultProps

  handleChange = (event: React.SyntheticEvent, value: NonNullable<any>) => {
    const { name, onChange } = this.props
    onChange(name, value)
  }

  render() {
    const {
      positiveLabel,
      positiveValue,
      negativeLabel,
      negativeValue,
      ...restProps
    } = this.props

    return (
      <DsToggleButtonGroup
        {...restProps}
        ds-variant="switch"
        exclusive
        size="small"
        onChange={this.handleChange}
      >
        <DsToggleButton value={positiveValue}>
          <DsTypography variant="supportBoldTextButton">
            {positiveLabel}
          </DsTypography>
        </DsToggleButton>
        <DsToggleButton value={negativeValue}>
          <DsTypography variant="supportBoldTextButton">
            {negativeLabel}
          </DsTypography>
        </DsToggleButton>
      </DsToggleButtonGroup>
    )
  }
}
