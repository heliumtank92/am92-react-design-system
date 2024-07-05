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

interface DsDialogPropsCustom extends Omit<DsDialogProps, 'ref' | 'open'> {
  open?: DsDialogProps['open']
}
interface DsBottomSheetPropsCustom
  extends Omit<DsBottomSheetProps, 'ref' | 'open'> {
  open?: DsBottomSheetProps['open']
}

export interface DsPopupProps extends Pick<DsDialogProps, 'onClose'> {
  open?: DsDialogProps['open']
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

  DsBottomSheetProps?: DsBottomSheetPropsCustom
  DsDialogProps?: DsDialogPropsCustom
  children?: React.ReactNode
}
