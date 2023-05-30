export const DsStepConnectorOverrides = {
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderLeftWidth: '2px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'var(--ds-color-strokeDefault)',
        minHeight: 'var(--ds-rules-stepperConnectorMinHeight)'
      },
      vertical: {
        marginLeft: '27px'
      }
    }
  }
}
