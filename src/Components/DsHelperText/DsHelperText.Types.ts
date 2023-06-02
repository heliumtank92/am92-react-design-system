import { DsFormHelperTextProps } from '../DsFormHelperText'

export interface DsHelperTextProps extends DsFormHelperTextProps {
  helperText: string | React.ReactNode
  color?: string
  success?: boolean
  error?: boolean
}

export const DsHelperTextDefaultProps: DsHelperTextProps = {
  helperText: ''
}
