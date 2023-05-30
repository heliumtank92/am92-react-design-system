import { DsBottomNavigationDefaultProps } from './DsBottomNavigation.Types'

export const DsBottomNavigationOverrides = {
  MuiBottomNavigation: {
    defaultProps: DsBottomNavigationDefaultProps,
    styleOverrides: {
      root: {
        background: 'var(--ds-color-surfacePrimary)',
        height: 'auto',
        maxHeight: '56px'
      }
    }
  }
}
