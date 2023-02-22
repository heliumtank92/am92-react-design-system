import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Chip from '@mui/material/Chip'

class DsTag extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    selected: PropTypes.bool
  }

  static defaultProps = {
    selected: false
  }

  render () {
    const {
      label,
      value,
      selected,
      onClick,
      onDelete,
      ...chipProps
    } = this.props

    const color = (selected && 'secondary') || 'default'

    return (
      <Chip
        {...chipProps}
        skipFocusWhenDisabled
        clickable
        color={color}
        label={label}
        value={value}
        onClick={() => onClick(value)}
        onDelete={onDelete && (() => onDelete(value))}
      />
    )
  }
}

export default DsTag
