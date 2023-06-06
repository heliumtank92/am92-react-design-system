import React, { PureComponent } from 'react'
import Switch from '@mui/material/Switch'
import { DsToggleProps } from './DsToggle.Types'

export class DsToggle extends PureComponent<DsToggleProps> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props
    const { name, checked } = event.target
    if (typeof onChange === 'function') {
      onChange(name, checked)
    }
  }

  render() {
    const { value, onChange, ...restProps } = this.props

    return (
      <Switch
        {...restProps}
        color="secondary"
        checked={value}
        onChange={this.handleChange}
      />
    )
  }
}
