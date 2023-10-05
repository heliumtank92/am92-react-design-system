import { DsStepperProps } from '../DsStepper'

export interface DsProgressStepperStepProps {
  stepName: string
}

export interface DsProgressStepperProps extends DsStepperProps {
  steps: DsProgressStepperStepProps[]
}

export const DsProgressStepperDefaultProps: DsProgressStepperProps = {
  activeStep: 0,
  orientation: 'vertical',
  steps: []
}
