import React, { PureComponent } from 'react'
import DsStack, { DsStackProps } from './DsStack'

export interface DsChipGroupProps extends DsStackProps {}
export const DsChipGroupDefaultProps: DsStackProps = {
  direction: 'row',
  spacing: 'var(--ds-spacing-glacial)'
}

export default class DsChipGroup extends PureComponent<DsStackProps> {
  static defaultProps = DsChipGroupDefaultProps
  render() {
    const { children, ...restStackProps } = this.props
    return <DsStack {...restStackProps}>{children}</DsStack>
  }
}
