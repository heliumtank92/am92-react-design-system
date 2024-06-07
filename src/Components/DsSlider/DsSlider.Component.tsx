import * as React from 'react'
import { Slider } from '@mui/material'
import { DsSliderDefaultProps, DsSliderProps } from './DsSlider.Types'

export class DsSlider extends React.PureComponent<DsSliderProps> {
  render() {
    const mergedProps = { ...DsSliderDefaultProps, ...this.props }
    return <Slider {...mergedProps} />
  }
}
