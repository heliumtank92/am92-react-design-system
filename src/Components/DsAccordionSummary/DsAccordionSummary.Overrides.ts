export const DsAccordionSummaryOverrides = {
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-bitterCold)',
        '&.Mui-expanded': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--ds-colour-strokeDefault)',
          minHeight: '0px'
        }
      },
      content: {
        margin: 'var(--ds-spacing-zero)',
        width: 'calc(100% - 40px)',
        marginRight: 'var(--ds-spacing-bitterCold)',
        '&.Mui-expanded': {
          margin: 'var(--ds-spacing-zero)',
          marginRight: 'var(--ds-spacing-bitterCold)'
        }
      }
    }
  }
}
