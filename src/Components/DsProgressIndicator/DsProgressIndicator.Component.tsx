import React, { Component } from 'react'
import {
  DsProgressIndicatorDefaultProps,
  DsProgressIndicatorProps
} from './DsProgressIndicator.Types'
import { DsBox } from '../DsBox'
import { DsCircularProgress } from '../DsCircularProgress'
import { DsTypography } from '../DsTypography'

export class DsProgressIndicator extends Component<DsProgressIndicatorProps> {
  static defaultProps = DsProgressIndicatorDefaultProps

  render() {
    const { step, maxStep } = this.props
    const squareSize = '5rem'
    const fillPercentage = Math.round((step / maxStep) * 100)
    const fillText = `${step}/${maxStep}`

    return (
      <DsBox>
        <DsBox
          display="flex"
          position="relative"
          height={squareSize}
          width={squareSize}
        >
          <DsBox>
            <DsCircularProgress
              variant="determinate"
              value={100}
              sx={{ color: 'var(--ds-color-stateDisabledSurface)' }}
              size={squareSize}
              thickness={4}
            />
            <DsCircularProgress
              disableShrink
              variant="determinate"
              color="secondary"
              value={fillPercentage}
              size={squareSize}
              thickness={4}
              style={{
                position: 'absolute',
                strokeLinecap: 'round',
                left: -12,
                height: 56,
                top: 12
              }}
            />
            <DsTypography sx={{ position: 'absolute', top: 30, right: 30 }}>
              <DsTypography variant="subheadingSemiboldDefault">
                {fillText}
              </DsTypography>
            </DsTypography>
          </DsBox>
        </DsBox>
      </DsBox>
    )
  }
}
