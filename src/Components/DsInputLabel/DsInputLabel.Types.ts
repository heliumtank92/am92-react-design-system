import { InputLabelProps } from '@mui/material'

export interface DsInputLabelProps extends InputLabelProps {
  label?: string | React.ReactElement
  labelSupportText?: string | React.ReactElement
  success?: boolean
  error?: boolean
}

export const DsInputLabelDefaultProps: DsInputLabelProps = {
  shrink: true
}
