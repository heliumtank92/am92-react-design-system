export const DsDrawerOverrides = {
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: 'var(--ds-colour-surfacePrimary)',
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
