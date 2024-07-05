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
  primaryButtonProps?: Omit<DsButtonProps, 'ref'>
  secondaryButtonText?: DsButtonProps['children']
  secondaryButtonProps?: Omit<DsButtonProps, 'ref'>
  TitleProps?: DsDialogTitleProps
  DescriptionProps?: DsTypographyProps
  CloseIconButtonProps?: DsIconButtonProps
  CloseIconProps?: Omit<DsRemixIconProps, 'ref'>
  ContentProps?: DsDialogContentProps
  ActionsProps?: DsDialogActionsProps
}

export const DsDialogDefaultProps: DsDialogProps = {
  open: false,
  scroll: 'paper',
  maxWidth: 'md',
  showClose: true,
  fullWidth: true
}
