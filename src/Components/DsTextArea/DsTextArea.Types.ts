import { DsTextFieldProps } from '../DsTextField'

export interface DsTextAreaProps extends DsTextFieldProps {
  maxLength: number
  hideCharacterCount?: boolean
}

export interface DsTextAreaState {
  count: number
}

export const DsTextAreaDefaultState: DsTextAreaState = {
  count: 0
}
