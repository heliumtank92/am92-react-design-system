import { DsTextFieldDefaultProps, DsTextFieldProps } from '../DsTextField'

export interface DsTextFieldPasswordProps extends DsTextFieldProps {
  visible: boolean
}

export const DsTextFieldPasswordDefaultProps: DsTextFieldPasswordProps = {
  ...DsTextFieldDefaultProps,
  visible: false
}

export interface DsTextFieldPasswordState {
  isVisible: boolean
}

export const DsTextFieldPasswordDefaultState: DsTextFieldPasswordState = {
  isVisible: false
}
