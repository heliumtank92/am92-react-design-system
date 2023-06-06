import { InputLabelProps } from '@mui/material'

export interface DsInputLabelProps extends InputLabelProps {
  label?: React.ReactNode
  labelSupportText?: string | React.ReactElement
  success?: boolean
  error?: boolean
}

export const DsInputLabelDefaultProps: DsInputLabelProps = {
  shrink: true
}
