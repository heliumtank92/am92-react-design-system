import React, { PureComponent } from 'react'
import { DsIcon } from '../DsIcon'
import { DsRemixIconProps } from './DsRemixIcon.Types'

export class DsRemixIcon extends PureComponent<DsRemixIconProps> {
  render() {
    return <DsIcon baseClassName="" {...this.props} />
  }
}
