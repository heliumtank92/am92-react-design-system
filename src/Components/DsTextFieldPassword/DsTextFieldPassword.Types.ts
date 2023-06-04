import { DsTextFieldProps } from '../DsTextField'

export interface DsTextFieldPasswordProps extends DsTextFieldProps {
  visible: boolean
}

export const DsTextFieldPasswordDefaultProps: DsTextFieldPasswordProps = {
  visible: false,
  type: 'text'
}

export interface DsTextFieldPasswordState {
  isVisible: boolean
}

export const DsTextFieldPasswordDefaultState: DsTextFieldPasswordState = {
  isVisible: false
}
