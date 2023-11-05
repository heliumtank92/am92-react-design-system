import { DsMenuDefaultProps } from './DsMenu.Types'

export const DsMenuOverrides = {
  MuiMenu: {
    defaultProps: DsMenuDefaultProps,
    styleOverrides: {
      list: {
        boxShadow: 'var(--ds-elevation-4)',
        borderRadius: 'var(--ds-radius-glacial)'
      }
    }
  }
}
