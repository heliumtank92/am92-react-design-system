import { CSSInterpolation } from '@mui/system'

export const DsStepConnectorOverrides = {
  MuiStepConnector: {
    styleOverrides: {
      lineVertical: {
        borderLeftWidth: '2px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'var(--ds-color-strokeDefault)',
        minHeight: 'var(--ds-rules-stepperConnectorMinHeight)'
      } as CSSInterpolation,
      vertical: {
        marginLeft: '27px'
      } as CSSInterpolation
    }
  }
}
