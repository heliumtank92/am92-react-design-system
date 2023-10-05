import { DsBoxProps } from '../DsBox'
import { DsProgressStepperProps } from './DsProgressStepper.Types'

export interface DsProgressTrackerStepProps {
  stepName: string
}

export interface DsProgressTrackerProps {
  /** This property can be used to switch between different variants of Progress Indicator where Default will provide a view with expand functionality on click, setsp only provide setp names without header and header provides a header with steps indicator without expandable stepper. */
  'ds-variant': 'default' | 'header' | 'steps'

  steps: DsProgressTrackerStepProps[]
  activeStep: number

  StepperProps?: Omit<DsProgressStepperProps, 'activeStep' | 'steps' | 'ref'>
  sx?: DsBoxProps
}

export const DsProgressTrackerDefaultProps: DsProgressTrackerProps = {
  activeStep: 0,
  'ds-variant': 'steps',
  steps: [],
  StepperProps: { orientation: 'vertical' },
  sx: {}
}

export interface DsProgressTrackerState {
  open: boolean
}

export const DsProgressTrackerDefaultState: DsProgressTrackerState = {
  open: false
}
