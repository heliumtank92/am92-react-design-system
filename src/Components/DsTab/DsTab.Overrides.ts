export const DsTabOverrides = {
  MuiTab: {
    defaultProps: {},
    styleOverrides: {
      root: {
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        padding: 'var(--ds-spacing-glacial)',
        gap: 'var(--ds-spacing-glacial)',
        minHeight: '36px',
        '> .MuiTab-iconWrapper': {
          fontSize: 'var(--ds-typo-fontSizeFrostbite)',
          margin: 'var(--ds-spacing-zero)'
        }
      }
    }
  }
}
