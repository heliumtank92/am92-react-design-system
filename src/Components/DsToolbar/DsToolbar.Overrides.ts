export const DsToolbarOverrides = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-bitterCold)',
        minHeight: 'var(--ds-rules-appBarMobileMinHeight)',
        '@media (min-width: 0px)': {
          padding: 'var(--ds-spacing-bitterCold)',
          minHeight: 'var(--ds-rules-appBarMobileMinHeight)'
        }
      }
    }
  }
}
