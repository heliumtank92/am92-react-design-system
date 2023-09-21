export const DsAutocompleteOverrides = {
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        '&.MuiAutocomplete-hasPopupIcon': {
          '> .MuiAutocomplete-inputRoot': {
            paddingRight: 'var(--ds-spacing-bitterCold)'
          }
        },
        '&.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon': {
          '> .MuiAutocomplete-inputRoot': {
            paddingRight: 'var(--ds-spacing-bitterCold)'
          }
        }
      },
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
      },
      inputRoot: {
        paddingRight: 'var(--ds-spacing-bitterCold)'
      }
    }
  }
}
