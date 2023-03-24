const DsBottomNavigationTheme = {
  MuiBottomNavigation: {
    defaultProps: {
      showLabels: true
    },
    styleOverrides: {
      root: {
        background: 'var(--ds-color-surfacePrimary)',
        height: 'auto',
        maxHeight: '56px'
      }
    }
  }
}

export default DsBottomNavigationTheme
