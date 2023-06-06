export const DsDatePickerOverrides = {
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
  }
}
