import React, { PureComponent } from 'react'
import Chip, { ChipProps } from '@mui/material/Chip'

export interface DsChipProps extends ChipProps {
  type?: 'status' | 'nudge'
}

export const DsChipDefaultProps: DsChipProps = {
  type: 'status'
}

export default class DsChip extends PureComponent<DsChipProps> {
  static defaultProps = DsChipDefaultProps
  render() {
    return <Chip {...this.props} ds-variant="chip" />
  }
}
