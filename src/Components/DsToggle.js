import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Switch from '@mui/material/Switch'

export default class DsToggle extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool
  }

  static defaultProps = {
    value: false
  }

  handleChange = event => {
    const { onChange } = this.props
    const { name, checked } = event.target
    onChange(name, checked)
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
