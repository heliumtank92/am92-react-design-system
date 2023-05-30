const DsBackdropTheme = {
  MuiBackdrop: {
    variants: [
      {
        props: { loader: 'true' },
        style: ({ ownerState, theme }) => {
          return {
            backgroundColor: 'var(--ds-color-overlayLoader)',
            zIndex: theme.zIndex.modal
          }
        }
      }
    ]
  }
}

export default DsBackdropTheme
