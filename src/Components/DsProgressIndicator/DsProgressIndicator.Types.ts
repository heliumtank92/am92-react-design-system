export interface DsProgressIndicatorProps {
  'ds-variant'?: 'percentage' | 'fraction'
  steps: number
  activeStep: number

  isError?: boolean
  isSuccess?: boolean
}

export const DsProgressIndicatorDefaultProps: DsProgressIndicatorProps = {
  'ds-variant': 'fraction',
  steps: 0,
  activeStep: 0
}
