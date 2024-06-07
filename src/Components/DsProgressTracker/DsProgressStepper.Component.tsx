import React, { PureComponent } from 'react'
import {
  DsProgressStepperDefaultProps,
  DsProgressStepperProps,
  DsProgressStepperStepProps
} from './DsProgressStepper.Types'
import { DsStepper } from '../DsStepper'
import { DsStep, DsStepProps } from '../DsStep'
import { DsStepLabel, DsStepLabelProps } from '../DsStepLabel'
import { DsRemixIcon } from '../DsRemixIcon'
import { StepIconProps } from '@mui/material'

export class DsProgressStepper extends PureComponent<DsProgressStepperProps> {
  static defaultProps = DsProgressStepperDefaultProps

  renderStepIcon = (stepProps: StepIconProps) => {
    const { active, error, completed, icon } = stepProps

    if (error) {
      return (
        <DsRemixIcon
          className="ri-close-circle-fill"
          sx={{ color: 'var(--ds-colour-iconNegative)' }}
        />
      )
    }

    if (completed) {
      return (
        <DsRemixIcon
          className="ri-checkbox-circle-fill"
          sx={{ color: 'var(--ds-colour-iconPositive)' }}
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
    const { stepName, error, icon, optional, completed, disabled } = step

    const stepProps: DsStepProps = { completed, disabled }
    const stepLabelProps: DsStepLabelProps = { error, icon, optional }

    if (icon) {
      stepLabelProps.sx = {
        '.MuiStepLabel-iconContainer.Mui-disabled ': {
          borderStyle: 'none'
        }
      }
    }
    return (
      <DsStep key={index} {...stepProps}>
        <DsStepLabel
          {...stepLabelProps}
          StepIconComponent={this.renderStepIcon}
        >
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
