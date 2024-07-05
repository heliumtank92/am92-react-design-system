import { DsButtonProps } from '../DsButton'
import { DsDialogActionsProps } from '../DsDialogActions'
import { DsDialogContentProps } from '../DsDialogContent'
import { DsDialogTitleProps } from '../DsDialogTitle'
import { DsDrawerProps } from '../DsDrawer'
import { DsIconButtonProps } from '../DsIconButton'
import { DsPaperProps } from '../DsPaper'
import { DsRemixIconProps } from '../DsRemixIcon'
import { DsTypographyProps } from '../DsTypography'

export interface DsBottomSheetProps extends Omit<DsDrawerProps, 'title'> {
  kicker?: string
  title?: string
  showClose?: boolean
  primaryButtonText?: DsButtonProps['children']
  secondaryButtonText?: DsButtonProps['children']

  ContainerProps?: DsPaperProps
  KickerProps?: DsTypographyProps
  TitleProps?: DsDialogTitleProps
  CloseIconButtonProps?: DsIconButtonProps
  CloseIconProps?: Omit<DsRemixIconProps, 'ref'>
  ContentProps?: DsDialogContentProps
  ActionsProps?: DsDialogActionsProps
  primaryButtonProps?: Omit<DsButtonProps, 'ref'>
  secondaryButtonProps?: Omit<DsButtonProps, 'ref'>
}

export const DsBottomSheetDefaultProps: DsBottomSheetProps = {
  showClose: true
}
