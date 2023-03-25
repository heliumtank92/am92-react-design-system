const DsMenuTheme = {
  MuiMenu: {
    defaultProps: {
      disableAutoFocusItem: true
    },
    styleOverrides: {
      list: {
        boxShadow: 'var(--ds-elevation-4)',
        borderRadius: '8px'
      }
    }
  }
}

export default DsMenuTheme
