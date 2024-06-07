import React, { Component } from 'react'
import {
  DsProgressIndicatorDefaultProps,
  DsProgressIndicatorProps
} from './DsProgressIndicator.Types'
import { DsBox } from '../DsBox'
import { DsCircularProgress } from '../DsCircularProgress'
import { DsTypography } from '../DsTypography'
import { DsRemixIcon } from '../DsRemixIcon'

export class DsProgressIndicator extends Component<DsProgressIndicatorProps> {
  static defaultProps = DsProgressIndicatorDefaultProps

  getFillText = () => {
    const { activeStep, steps, isSuccess, isError } = this.props

    if (isSuccess) {
      return (
        <DsRemixIcon
          sx={{ color: 'var(--ds-colour-iconPositive)' }}
          className="ri-check-line"
        />
      )
    }

    if (isError) {
      return (
        <DsRemixIcon
          sx={{ color: 'var(--ds-colour-iconNegative)' }}
          className="ri-error-warning-line"
        />
      )
    }

    if (this.props['ds-variant'] === 'fraction') {
      return `${activeStep}/${steps}`
    }

    return `${Math.round((activeStep / steps) * 100)}%`
  }

  render() {
    const { activeStep, steps, isSuccess, isError } = this.props
    const squareSize = this.props['ds-variant'] === 'fraction' ? '48px' : '32px'
    const fillPercentage = Math.round((activeStep / steps) * 100)
    const fillColor = isSuccess ? 'success' : isError ? 'error' : 'secondary'

    return (
      <DsBox
        display="flex"
        position="relative"
        height={squareSize}
        width={squareSize}
      >
        <DsCircularProgress
          variant="determinate"
          value={100}
          sx={{ color: 'var(--ds-colour-stateDisabledSurface)' }}
          size={squareSize}
          thickness={4}
        />
        <DsCircularProgress
          disableShrink
          variant="determinate"
          color={fillColor}
          value={fillPercentage}
          size={squareSize}
          thickness={4}
          style={{
            position: 'absolute'
          }}
        />
        <DsTypography
          variant="subheadingSemiboldDefault"
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)'
          }}
        >
          {this.getFillText()}
        </DsTypography>
      </DsBox>
    )
  }
}
