export const DsAutocompleteOverrides = {
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
        // TODO: Handling Left
        // position: 'relative',
        top: 'unset',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'var(--ds-spacing-frostbite)'
      }
    }
  }
}
