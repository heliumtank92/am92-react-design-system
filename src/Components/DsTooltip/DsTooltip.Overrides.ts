import { DsTooltipDefaultProps } from './DsTooltip.Types'

export const DsTooltipOverrides = {
  MuiTooltip: {
    defaultProps: DsTooltipDefaultProps,
    styleOverrides: {
      tooltip: {
        boxShadow: 'var(--ds-elevation-0)',
        backgroundColor: 'var(--ds-color-surfaceTertiary)',
        borderRadius: '12px',
        borderWidth: '0.5px',
        borderStyle: 'solid',
        borderColor: 'var(--ds-color-strokeDefault)',
        color: 'var(--ds-color-surfaceSecondary)',
        padding: 'var(--ds-spacing-bitterCold)'
      },
      arrow: {
        color: 'var(--ds-color-surfaceTertiary)'
      }
    }
  }
}
