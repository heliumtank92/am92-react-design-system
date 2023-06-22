import { DsTextFieldDefaultProps, DsTextFieldProps } from '../DsTextField'

export interface DsTextFieldPasswordProps extends DsTextFieldProps {
  isVisible: boolean
}

export const DsTextFieldPasswordDefaultProps: DsTextFieldPasswordProps = {
  ...DsTextFieldDefaultProps,
  isVisible: false
}

export interface DsTextFieldPasswordState {
  isVisible: boolean
}

export const DsTextFieldPasswordDefaultState: DsTextFieldPasswordState = {
  isVisible: false
}
