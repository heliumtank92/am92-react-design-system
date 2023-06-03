import { DsDialogDefaultProps } from './DsDialog.Types'

export const DsDialogOverrides = {
  MuiDialog: {
    defaultProps: DsDialogDefaultProps,
    styleOverrides: {
      paper: {
        backgroundColor: 'var(--ds-color-surfacePrimary)',
        borderRadius: '16px',
        boxShadow: 'var(--ds-elevation-24)',
        backgroundImage: 'none',
        '& .MuiDialogContent-root': {
          '&:has(.MuiCalendarOrClockPicker-root) + .MuiDialogActions-root': {
            padding: 'var(--ds-spacing-bitterCold)'
          }
        }
      },
      paperWidthXs: {
        maxWidth: 'var(--ds-rules-dialogXsMaxWidth)'
      }
    }
  }
}
