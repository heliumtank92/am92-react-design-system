import React, { PureComponent } from 'react'
import Chip from '@mui/material/Chip'
import { DsTagProps, DsTagDefaultProps } from './DsTag.Types'

export class DsTag extends PureComponent<DsTagProps> {
  static defaultProps = DsTagDefaultProps

  handleClick = (): void => {
    const { value, onClick } = this.props
    if (typeof onClick === 'function') {
      onClick(value)
    }
  }

  handleDelete = (): void => {
    const { value, onDelete } = this.props
    if (typeof onDelete === 'function') {
      onDelete(value)
    }
  }

  render() {
    const { selected, onClick, onDelete, ...chipProps } = this.props
    const color = (selected && 'secondary') || 'default'

    return (
      <Chip
        {...chipProps}
        skipFocusWhenDisabled
        clickable
        color={color}
        onClick={this.handleClick}
        onDelete={this.handleDelete}
      />
    )
  }
}
