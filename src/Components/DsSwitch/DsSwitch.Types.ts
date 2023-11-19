import { DsToggleButtonGroupProps } from '../DsToggleButtonGroup'

export interface DsSwitchProps
  extends Omit<
    DsToggleButtonGroupProps,
    'onChange' | 'exclusive' | 'size' | 'ds-variant'
  > {
  name: string
  value: NonNullable<any>
  positiveLabel?: string
  positiveValue: NonNullable<any>
  negativeLabel?: string
  negativeValue: NonNullable<any>
  onChange: (name: string, value: any) => void
}

export const DsSwitchDefaultProps: DsSwitchProps = {
  name: '',
  value: false,
  positiveLabel: 'YES',
  positiveValue: true,
  negativeLabel: 'NO',
  negativeValue: false,
  onChange: () => {}
}
