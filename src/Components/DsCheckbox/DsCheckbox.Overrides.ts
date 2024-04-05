import { DsCheckboxDefaultProps } from './DsCheckbox.Types'

export const DsCheckboxOverrides = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: 'var(--ds-colour-iconDefault)',
        '&:hover:not(.Mui-checked)': {
          backgroundColor: 'var(--ds-colour-stateUnselectedHover)'
        },
        '&:focus:not(.Mui-checked)': {
          backgroundColor: 'var(--ds-colour-stateUnselectedHover)'
        },
        '&.MuiCheckbox-colorPrimary.Mui-checked': {
          color: 'var(--ds-colour-iconActionPrimary)'
        },
        '&.MuiCheckbox-colorSecondary.Mui-checked': {
          color: 'var(--ds-colour-iconActionSecondary)',
          '&:hover': {
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
          },
          '&:focus': {
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
          }
        },
        '&.MuiCheckbox-colorError.Mui-checked': {
          color: 'var(--ds-colour-iconNegative)'
        },
        '&.MuiCheckbox-colorSuccess.Mui-checked': {
          color: 'var(--ds-colour-iconPositive)'
        },
        '&.MuiCheckbox-colorWarning.Mui-checked': {
          color: 'var(--ds-colour-iconWarning)'
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
