const DsDialogContentTheme = {
  MuiDialogContent: {
    variants: [
      {
        props: { textOnly: true },
        style: {
          fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
          fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
          lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
          paddingBottom: 'var(--ds-spacing-glacial)',
          textAlign: 'center'
        }
      }
    ],
    styleOverrides: {
      root: {
        color: 'var(--ds-color-typoTertiary)',
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)',
        paddingBottom: 'var(--ds-spacing-mild)'
      }
    }
  }
}

export default DsDialogContentTheme
