import { DsToggleButtonGroupProps } from '../DsToggleButtonGroup'

export interface DsSwitchProps
  extends Omit<
    DsToggleButtonGroupProps,
    'onChange' | 'exclusive' | 'size' | 'ds-variant'
  > {
  name: string
  value: NonNullable<any>
  positiveValue: NonNullable<any>
  negativeValue: NonNullable<any>
  onChange: (name: string, value: any) => void
}

export const DsSwitchDefaultProps: DsSwitchProps = {
  name: '',
  value: false,
  positiveValue: true,
  negativeValue: false,
  onChange: () => {}
}
