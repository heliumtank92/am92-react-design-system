import React, { PureComponent } from 'react'
import { DsStack } from '../DsStack'
import { DsChipGroupDefaultProps, DsChipGroupProps } from './DsChipGroup.Types'

export class DsChipGroup extends PureComponent<DsChipGroupProps> {
  static defaultProps = DsChipGroupDefaultProps
  render() {
    const { children, ...restStackProps } = this.props
    return (
      <DsStack
        direction={'row'}
        spacing={'var(--ds-spacing-glacial)'}
        {...restStackProps}
      >
        {children}
      </DsStack>
    )
  }
}
