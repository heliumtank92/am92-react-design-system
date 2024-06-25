import { IwithBreakpoints } from '../../Hocs/withBreakpoints'
import { DsBottomSheet, DsBottomSheetProps } from '../DsBottomSheet'
import { DsButtonProps } from '../DsButton'
import { DsDialog, DsDialogProps } from '../DsDialog'
import { DsDialogActionsProps } from '../DsDialogActions'
import { DsDialogContentProps } from '../DsDialogContent'
import { DsDialogTitleProps } from '../DsDialogTitle'
import { DsIconButtonProps } from '../DsIconButton'
import { DsRemixIconProps } from '../DsRemixIcon'
import { DsTypographyProps } from '../DsTypography'

export interface DsPopupProps
  extends IwithBreakpoints,
    Pick<DsDialogProps, 'onClose'> {
  open?: DsDialogProps['open']
  title?: string
  description?: string
  showClose?: boolean
  primaryButtonText?: DsButtonProps['children']
  primaryButtonProps?: Omit<DsButtonProps, 'children' | 'ref'>
  secondaryButtonText?: DsButtonProps['children']
  secondaryButtonProps?: Omit<DsButtonProps, 'children' | 'ref'>
  TitleProps?: DsDialogTitleProps
  DescriptionProps?: DsTypographyProps
  CloseIconButtonProps?: DsIconButtonProps
  CloseIconProps?: Omit<DsRemixIconProps, 'ref'>
  ContentProps?: DsDialogContentProps
  ActionsProps?: DsDialogActionsProps

  DsBottomSheetProps?: Omit<DsBottomSheetProps, 'ref'>
  DsDialogProps?: Omit<DsDialogProps, 'ref'>
  children: React.ReactNode
}
