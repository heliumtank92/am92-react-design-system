import { DsStackProps } from '../DsStack'

export interface DsTagGroupProps extends Omit<DsStackProps, 'onChange'> {
  multi: boolean
  name: string
  value: any
  onChange: (name: string, value: any) => void
}

export const DsTagGroupDefaultProps: DsTagGroupProps = {
  name: '',
  value: '',
  multi: false,
  onChange: () => {}
}
