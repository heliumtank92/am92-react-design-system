import { DialogProps } from '@mui/material'

export interface DsDialogProps extends DialogProps {
  imageSrc?: string
  imageAlt?: string
  heading?: string
  description?: string
  buttonGroup?: React.ReactElement

  textAlign?: 'right' | 'left' | 'center' | 'inherit' | 'justify' | undefined
  showClose?: boolean

  fullWidth?: boolean
}

export const DsDialogDefaultProps: DsDialogProps = {
  open: false,
  scroll: 'paper',
  maxWidth: 'xs',
  imageSrc: '',
  imageAlt: '',
  textAlign: 'left',
  showClose: true,
  fullWidth: true
}
