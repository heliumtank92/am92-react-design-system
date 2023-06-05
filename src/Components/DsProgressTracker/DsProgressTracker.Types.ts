import { DsStepperProps } from '../DsStepper'

export interface DsProgressTrackerStepProps {
  stepName: string
}

export interface DsProgressTrackerProps extends DsStepperProps {
  steps: DsProgressTrackerStepProps[]
}

export const DsProgressTrackerDefaultProps: DsProgressTrackerProps = {
  activeStep: 0,
  orientation: 'vertical',
  steps: []
}
