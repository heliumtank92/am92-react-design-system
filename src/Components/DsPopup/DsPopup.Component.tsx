import * as React from 'react'
import { withBreakpoints } from '../../Hocs/withBreakpoints'
import { DsDialog } from '../DsDialog'
import { DsPopupProps } from './DsPopup.Types'
import { DsBottomSheet } from '../DsBottomSheet'

class Popup extends React.Component<DsPopupProps> {
  render() {
    const { breakpoints, DsBottomSheetProps, DsDialogProps, ...PopupProps } =
      this.props

    if (breakpoints.xs || breakpoints.sm) {
      return (
        <DsBottomSheet {...PopupProps} {...DsBottomSheetProps}>
          {PopupProps?.children || DsBottomSheetProps?.children}
        </DsBottomSheet>
      )
    }

    return (
      <DsDialog {...PopupProps} {...DsDialogProps}>
        {PopupProps?.children || DsDialogProps?.children}
      </DsDialog>
    )
  }
}

export const DsPopup = withBreakpoints(Popup)
