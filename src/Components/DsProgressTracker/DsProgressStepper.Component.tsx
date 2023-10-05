import React, { PureComponent } from 'react'
import {
  DsProgressStepperDefaultProps,
  DsProgressStepperProps,
  DsProgressStepperStepProps
} from './DsProgressStepper.Types'
import { DsStepper } from '../DsStepper'
import { DsStep } from '../DsStep'
import { DsStepLabel } from '../DsStepLabel'
import { DsRemixIcon } from '../DsRemixIcon'
import { StepIconProps } from '@mui/material'

export class DsProgressStepper extends PureComponent<DsProgressStepperProps> {
  static defaultProps = DsProgressStepperDefaultProps

  renderStepIcon = (stepProps: StepIconProps) => {
    const { active, completed, icon } = stepProps

    if (completed) {
      return (
        <DsRemixIcon
          className="ri-checkbox-circle-fill"
          color="iconSupportPositive"
        />
      )
    }

    if (active) {
      return (
        <DsRemixIcon
          className="ri-play-circle-fill"
          color="iconActionSecondary"
        />
      )
    }

    return <>{icon}</>
  }

  renderStep = (step: DsProgressStepperStepProps, index: number) => {
    const { stepName } = step
    return (
      <DsStep key={index}>
        <DsStepLabel StepIconComponent={this.renderStepIcon}>
          {stepName}
        </DsStepLabel>
      </DsStep>
    )
  }

  render() {
    const { steps, ...stepperProps } = this.props

    return (
      <DsStepper
        {...stepperProps}
        alternativeLabel={stepperProps.orientation === 'horizontal'}
      >
        {steps.map(this.renderStep)}
      </DsStepper>
    )
  }
}
