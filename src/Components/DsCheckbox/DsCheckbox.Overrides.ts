import { DsCheckboxDefaultProps } from './DsCheckbox.Types'

export const DsCheckboxOverrides = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: 'var(--ds-colour-iconDefault)',
        '&:hover': {
          backgroundColor: 'var(--ds-colour-stateUnselectedHover)'
        },
        '&:focus': {
          backgroundColor: 'var(--ds-colour-stateUnselectedHover)'
        },
        '&.Mui-checked': {
          color: 'var(--ds-colour-iconActionSecondary)',
          '&:hover': {
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
          },
          '&:focus': {
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
          }
        },
        '&.Mui-disabled': {
          color: 'var(--ds-colour-iconDisabled)'
        },
        colorPrimary: {
          color: 'var(--ds-colour-iconActionPrimary)'
        },
        colorSecondary: {
          color: 'var(--ds-colour-iconActionSecondary)'
        }
      }
    }
  }
}
