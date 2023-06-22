import React, { PureComponent } from 'react'
import { DsRemixIcon, DsRemixIconProps } from '../DsRemixIcon'

export class DateCalenderRightArrowIcon extends PureComponent<DsRemixIconProps> {
  render(): React.ReactNode {
    const { ref, ...restProps } = this.props
    return (
      <DsRemixIcon
        className="ri-arrow-right-s-line"
        fontSize="mild"
        color="iconDefault"
        {...restProps}
      />
    )
  }
}
