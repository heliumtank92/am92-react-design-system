export interface DsContentSliderProps {
  'ds-variant'?: 'default' | 'timed'
  steps: number
  activeStep: number
}

export const DsContentSliderDefaultProps: DsContentSliderProps = {
  'ds-variant': 'default',
  steps: 0,
  activeStep: 0
}

export interface DsContentSliderState {
  active: number
}

export const DsContentSliderDefaultState: DsContentSliderState = {
  active: 0
}
