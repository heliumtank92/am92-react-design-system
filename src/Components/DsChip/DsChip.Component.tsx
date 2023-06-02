import React, { PureComponent } from 'react'
import Chip from '@mui/material/Chip'
import { DsChipProps, DsChipDefaultProps } from './DsChip.Types'

export default class DsChip extends PureComponent<DsChipProps> {
  static defaultProps = DsChipDefaultProps
  render() {
    return <Chip {...this.props} ds-variant="chip" />
  }
}
