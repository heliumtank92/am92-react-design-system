import { DsStepProps } from '../DsStep'
import { DsStepLabelProps } from '../DsStepLabel'
import { DsStepperProps } from '../DsStepper'

export interface DsProgressStepperStepProps {
  stepName?: string
  error?: DsStepLabelProps['error']
  icon?: DsStepLabelProps['icon']
  optional?: DsStepLabelProps['optional']
  completed?: DsStepProps['completed']
  disabled?: DsStepProps['disabled']
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
