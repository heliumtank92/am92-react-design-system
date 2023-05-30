const DsDialogTheme = {
  MuiDialog: {
    defaultProps: {
      scroll: 'paper',
      maxWidth: 'xs'
    },
    styleOverrides: {
      paper: {
        backgroundColor: 'var(--ds-color-surfacePrimary)',
        borderRadius: '16px',
        boxShadow: 'var(--ds-elevation-24)',
        backgroundImage: 'none'
      },
      paperWidthXs: {
        maxWidth: 'var(--ds-rules-dialogXsMaxWidth)'
      }
    }
  }
}

export default DsDialogTheme
