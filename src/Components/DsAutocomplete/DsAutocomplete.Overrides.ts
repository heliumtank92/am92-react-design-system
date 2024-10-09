import { borderRadius } from '@mui/system'
import { DsAutocompleteDefaultProps } from './DsAutocomplete.Types'

export const DsAutocompleteOverrides = {
  MuiAutocomplete: {
    defaultProps: DsAutocompleteDefaultProps,
    styleOverrides: {
      root: {
        '&.MuiAutocomplete-hasPopupIcon': {
          '> .MuiAutocomplete-inputRoot': {
            paddingRight: 'var(--ds-spacing-hot)'
          }
        },
        '&.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon': {
          '> .MuiAutocomplete-inputRoot': {
            paddingRight: 'var(--ds-spacing-molten)'
          }
        }
      },
      listbox: {
        '.MuiAutocomplete-option': {
          '&.Mui-focused': {
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
          }
        }
      },
      endAdornment: {
        right: '8px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'var(--ds-spacing-frostbite)'
      },
      inputRoot: {
        paddingRight: 'var(--ds-spacing-glacial)'
      },
      paper: {
        borderRadius: 'var(--ds-radius-glacial)'
      },
      popper: {
        // Important is put as menu while opening sets margin to 0px
        marginTop: 'var(--ds-radius-glacial) !important'
      }
    }
  }
}
