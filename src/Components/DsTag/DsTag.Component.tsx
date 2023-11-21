import React, { PureComponent } from 'react'
import Chip from '@mui/material/Chip'
import { DsTagProps, DsTagDefaultProps } from './DsTag.Types'
import { DsRemixIcon } from '../DsRemixIcon'

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
        deleteIcon={<DsRemixIcon className="ri-close-circle-fill" />}
        skipFocusWhenDisabled
        {...chipProps}
        clickable
        color={color}
        onDelete={(onDelete && this.handleDelete) || undefined}
        onClick={this.handleClick}
      />
    )
  }
}
