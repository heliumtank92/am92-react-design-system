const DsAutocomplete = {
  MuiAutocomplete: {
    styleOverrides: {
      listbox: {
        '.MuiAutocomplete-option': {
          '&.Mui-focused': {
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
          }
        }
      },
      endAdornment: {
        position: 'relative',
        top: 'unset',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'var(--ds-spacing-frostbite)'
      }
    }
  }
}

export default DsAutocomplete
