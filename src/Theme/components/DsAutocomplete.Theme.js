const DsAutocomplete = {
  MuiAutocomplete: {
    styleOverrides: {
      listbox: {
        '.MuiAutocomplete-option': {
          '&.Mui-focused': {
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
          }
        }
      }
    }
  }
}

export default DsAutocomplete
