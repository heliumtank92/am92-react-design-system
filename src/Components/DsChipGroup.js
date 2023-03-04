import React, { PureComponent } from 'react'

import DsStack from './DsStack'

export default class DsChipGroup extends PureComponent {
  render () {
    const { children } = this.props
    return (
      <DsStack
        direction='row'
        spacing='var(--ds-spacing-glacial)'
        {...this.props}
      >
        {children}
      </DsStack>
    )
  }
}
