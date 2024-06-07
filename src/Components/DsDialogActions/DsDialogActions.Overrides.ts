export const DsDialogActionsOverrides = {
  MuiDialogActions: {
    styleOverrides: {
      root: {
        marginTop: 'var(--ds-spacing-mild)',
        padding: 'var(--ds-spacing-zero)',
        '> *': {
          flex: 1
        },
        '>:not(style)~:not(style)': {
          marginLeft: 'var(--ds-spacing-frostbite)'
        }
      }
    }
  }
}
