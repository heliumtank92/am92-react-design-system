import React, { PureComponent } from 'react'
import {
  DsProgressTrackerDefaultProps,
  DsProgressTrackerProps,
  DsProgressTrackerState
} from './DsProgressTracker.Types'
import { DsProgressStepper } from './DsProgressStepper.Component'
import { DsProgressIndicator } from '../DsProgressIndicator'
import { DsCollapse } from '../DsCollapse'
import { DsBox } from '../DsBox'
import { DsTypography } from '../DsTypography'
import { DsStack } from '../DsStack'

export class DsProgressTracker extends PureComponent<
  DsProgressTrackerProps,
  DsProgressTrackerState
> {
  static defaultProps = DsProgressTrackerDefaultProps

  constructor(props: DsProgressTrackerProps) {
    super(props)

    const state: DsProgressTrackerState = {
      open: props['ds-variant'] === 'steps' ? true : false
    }

    this.state = state
  }

  handleToggleCollapse = () => this.setState({ open: !this.state.open })

  renderStepper = () => {
    // Don Not Render steps if variant is `header`
    if (this.props['ds-variant'] === 'header') {
      return null
    }

    const { StepperProps, activeStep, steps } = this.props
    const { open } = this.state

    return (
      <DsCollapse in={open}>
        <DsProgressStepper
          activeStep={activeStep}
          steps={steps}
          {...StepperProps}
        />
      </DsCollapse>
    )
  }

  renderHeader = () => {
    // Don Not Render Header if variant is `steps`
    if (this.props['ds-variant'] === 'steps') {
      return null
    }

    const { activeStep, steps } = this.props
    const currentStep = steps[activeStep] || {}
    const nextStepIndex = activeStep + 1
    const nextStep = steps[nextStepIndex]
    const haveNextStep = nextStepIndex <= steps.length
    const isNextStepLastStep = nextStepIndex === steps.length

    return (
      <DsStack
        sx={{
          p: 'var(--ds-spacing-bitterCold)',
          alignItems: 'center',
          borderBottom: '1px solid var(--ds-colour-strokeDefault)',
          backgroundColor: 'var(--ds-colour-surfaceBackground)',
          cursor: this.props['ds-variant'] === 'default' ? 'pointer' : 'unset'
        }}
        spacing="var(--ds-spacing-bitterCold)"
        direction="row"
        onClick={this.handleToggleCollapse}
      >
        <DsProgressIndicator activeStep={activeStep + 1} steps={steps.length} />
        <DsStack
          flexGrow={1}
          direction="column"
          spacing="var(--ds-spacing-quickFreeze)"
        >
          <DsTypography
            component="div"
            textAlign="right"
            color="var(--ds-colour-actionSecondary)"
            variant="headingBoldExtraSmall"
          >
            {currentStep.stepName}
          </DsTypography>
          {haveNextStep && (
            <DsTypography
              component="div"
              textAlign="right"
              color="var(--ds-colour-typoTertiary)"
              variant="subheadingSemiboldDefault"
            >
              {isNextStepLastStep
                ? 'Yay! you are almost done'
                : `Next Step: ${nextStep.stepName}`}
            </DsTypography>
          )}
        </DsStack>
      </DsStack>
    )
  }

  render() {
    const { sx } = this.props
    return (
      <DsBox sx={{ width: '100%', ...sx }}>
        {this.renderHeader()}
        {this.renderStepper()}
      </DsBox>
    )
  }
}
