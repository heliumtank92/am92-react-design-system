const DsDatePickerTheme = {
  MuiPickersDay: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          backgroundColor: 'var(--ds-color-actionSecondary)',
          '&:hover': {
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)',
            color: 'var(--ds-color-typoPrimary)'
          },
          '&:focus': {
            backgroundColor: 'var(--ds-color-actionSecondary)'
          }
        }
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      root: {
      },
      container: {
      },
      paper: {
        '& .MuiDialogContent-root': {
          '&:has(.MuiCalendarOrClockPicker-root) + .MuiDialogActions-root': {
            padding: 'var(--ds-spacing-bitterCold)'
          }
        }
      }
    }
  }
}

export default DsDatePickerTheme
