import React, { PureComponent } from 'react'
import DsIcon, { DsIconProps } from './DsIcon'

export interface DsRemixIconProps extends DsIconProps {}

export default class DsRemixIcon extends PureComponent<DsRemixIconProps> {
  render() {
    return <DsIcon baseClassName="" {...this.props} />
  }
}
