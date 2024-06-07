import { DsSelectDefaultProps } from './DsSelect.Types'

export const DsSelectOverrides = {
  MuiSelect: {
    defaultProps: DsSelectDefaultProps,
    styleOverrides: {
      icon: {
        color: 'var(--ds-colour-iconDefault)'
      }
    }
  }
}
