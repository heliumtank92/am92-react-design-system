import { DsTextFieldProps } from '../DsTextField'

export interface DsOtpProps extends DsTextFieldProps {
  onComplete: (otpString: string) => void
  name?: string
  length?: number
  initialOtp?: string
}

export const DsOtpDefaultProps: DsOtpProps = {
  name: 'otp',
  length: 6,
  onComplete: () => undefined
}
export interface DsOtpState {
  otp: string[]
}

export const DsOtpDefaultState = {
  otp: []
}
