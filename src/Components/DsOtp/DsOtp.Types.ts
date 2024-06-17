import { DsBoxProps } from '..'
import { DsTextFieldProps } from '../DsTextField'

export type T_VALUE = string
export interface DsOtpProps extends DsTextFieldProps {
  onComplete: (value: T_VALUE) => void
  name?: string
  length?: number
  initialOtp?: T_VALUE
  BoxProps?: DsBoxProps
  value?: T_VALUE
  autoFocus?: boolean
}

export const DsOtpDefaultProps: DsOtpProps = {
  name: 'otp',
  length: 6,
  onComplete: () => undefined,
  autoFocus: false
}
export interface DsOtpState {
  otp: string[]
}

export const DsOtpDefaultState: DsOtpState = {
  otp: []
}
