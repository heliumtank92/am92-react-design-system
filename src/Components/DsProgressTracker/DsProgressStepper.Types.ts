import { DsStepperProps } from '../DsStepper'

export interface DsProgressStepperStepProps {
  stepName: string
}

export interface DsProgressStepperProps
  extends Pick<DsStepperProps, 'activeStep' | 'orientation' | 'sx'> {
  steps: DsProgressStepperStepProps[]
}

export const DsProgressStepperDefaultProps: DsProgressStepperProps = {
  activeStep: 0,
  orientation: 'vertical',
  steps: []
}
