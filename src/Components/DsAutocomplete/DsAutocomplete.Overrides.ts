import { CSSInterpolation } from '@mui/system'

export const DsAutocompleteOverrides = {
  MuiAutocomplete: {
    styleOverrides: {
      listbox: {
        '.MuiAutocomplete-option': {
          '&.Mui-focused': {
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
          }
        }
      } as CSSInterpolation,
      endAdornment: {
        position: 'relative',
        top: 'unset',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'var(--ds-spacing-frostbite)'
      } as CSSInterpolation
    }
  }
}
