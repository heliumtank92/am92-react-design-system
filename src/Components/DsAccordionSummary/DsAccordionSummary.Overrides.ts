export const DsAccordionSummaryOverrides = {
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-frostbite) var(--ds-spacing-bitterCold)',
        '&.Mui-expanded': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--ds-colour-strokeDefault)',
          minHeight: '0px',
          backgroundColor: 'var(--ds-colour-surfaceSecondary)'
        }
      },
      content: {
        margin: 'var(--ds-spacing-zero)',
        width: 'calc(100% - 40px)',
        marginRight: 'var(--ds-spacing-bitterCold)',
        fontWeight: 'var(--ds-typo-bodyRegularSmall-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularSmall-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularSmall-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularSmall-letterSpacing)',
        '&.Mui-expanded': {
          margin: 'var(--ds-spacing-zero)',
          marginRight: 'var(--ds-spacing-bitterCold)'
        }
      }
    }
  }
}
