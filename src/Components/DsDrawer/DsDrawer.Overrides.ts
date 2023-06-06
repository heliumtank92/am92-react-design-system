export const DsDrawerOverrides = {
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: 'var(--ds-color-surfacePrimary)',
        boxShadow: 'var(--ds-elevation--1)',
        backgroundImage: 'none'
      },
      // For Bottom Stagger
      paperAnchorBottom: {
        background: 'transparent'
      }
    }
  }
}
