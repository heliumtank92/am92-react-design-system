import { DialogProps } from '@mui/material'
import { DsDialogTitleProps } from '../DsDialogTitle'
import { DsTypographyProps } from '../DsTypography'
import { DsIconButtonProps } from '../DsIconButton'
import { DsRemixIconProps } from '../DsRemixIcon'
import { DsDialogContentProps } from '../DsDialogContent'
import { DsDialogActionsProps } from '../DsDialogActions'
import { DsButtonProps } from '../DsButton'

export interface DsDialogProps extends DialogProps {
  title?: string
  description?: string
  showClose?: boolean
  primaryButtonText?: DsButtonProps['children']
  primaryButtonProps?: Omit<DsButtonProps, 'children' | 'ref'>
  secondaryButtonText?: DsButtonProps['children']
  secondaryButtonProps?: Omit<DsButtonProps, 'children' | 'ref'>
  DialogTitleProps?: DsDialogTitleProps
  DialogDescriptionProps?: DsTypographyProps
  DialogCloseIconButtonProps?: DsIconButtonProps
  DialogCloseIconProps?: Omit<DsRemixIconProps, 'ref'>
  DialogContentProps?: DsDialogContentProps
  DialogActionsProps?: DsDialogActionsProps
}

export const DsDialogDefaultProps: DsDialogProps = {
  open: false,
  scroll: 'paper',
  maxWidth: 'md',
  showClose: true
}
