import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import DsRemixIcon from './DsRemixIcon'
import DsBox from './DsBox'

export class DsProgressTracker extends PureComponent {
  static propsTypes = {
    activeStep: PropTypes.string,
    orientation: PropTypes.string,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  static defaultProps = {
    activeStep: 0,
    orientation: 'vertical'
  }

  renderStepIcon = (stepProps) => {
    const { active, completed, icon } = stepProps

    if (completed) {
      return (
        <DsRemixIcon
          className='ri-checkbox-circle-fill'
          color='iconSupportPositive'
        />
      )
    }
    if (active) {
      return (
        <DsRemixIcon
          className='ri-play-circle-fill'
          color='iconActionSecondary'
        />
      )
    }

    return icon
  }

  renderStep = ({ stepName }, index) => (
    <Step key={index}>
      <StepLabel
        StepIconComponent={this.renderStepIcon}
      >
        {stepName}
      </StepLabel>
    </Step>
  )

  render () {
    const { steps, ...stepperProps } = this.props
    return (
      <Stepper {...stepperProps}>
        {steps && steps.map(this.renderStep)}
      </Stepper>
    )
  }
}

export default DsProgressTracker
