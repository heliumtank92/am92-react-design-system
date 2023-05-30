export const DsBackdropOverrides = {
  MuiBackdrop: {
    variants: [
      {
        props: { loader: 'true' },
        style: {
          backgroundColor: 'var(--ds-color-overlayLoader)',
          zIndex: 'var(--zIndex-modal)'
        }
      }
    ]
  }
}
