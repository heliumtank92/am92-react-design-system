import { DsTooltipDefaultProps } from './DsTooltip.Types'

export const DsTooltipOverrides = {
  MuiTooltip: {
    defaultProps: DsTooltipDefaultProps,
    styleOverrides: {
      tooltip: {
        boxShadow: 'var(--ds-elevation-0)',
        backgroundColor: 'var(--ds-colour-surfaceTertiary)',
        borderRadius: '12px',
        borderWidth: '0.5px',
        borderStyle: 'solid',
        borderColor: 'var(--ds-colour-strokeDefault)',
        color: 'var(--ds-colour-surfaceSecondary)',
        padding: 'var(--ds-spacing-bitterCold)'
      },
      arrow: {
        color: 'var(--ds-colour-surfaceTertiary)'
      }
    }
  }
}
