export const DsDialogOverrides = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor: 'var(--ds-colour-surfacePrimary)',
        borderRadius: 'var(--ds-radius-bitterCold)',
        boxShadow: 'var(--ds-elevation-24)',
        backgroundImage: 'none',
        '& .MuiDialogContent-root': {
          '&:has(.MuiCalendarOrClockPicker-root) + .MuiDialogActions-root': {
            padding: 'var(--ds-spacing-bitterCold)'
          }
        }
      },
      paperWidthMd: {
        maxWidth: 'var(--ds-rules-dialogMdMaxWidth)'
      }
    }
  }
}
