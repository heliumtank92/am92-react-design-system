import { DsIconButtonDefaultProps } from './DsIconButton.Types'

export const DsIconButtonOverrides = {
  MuiIconButton: {
    defaultProps: DsIconButtonDefaultProps,
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-zero)',
        fontSize: 'var(--ds-typo-fontSizeMild)'
      },
      colorIconSupportNegative: {
        color: 'var(--ds-color-iconSupportNegative)'
      },
      colorIconSupportPositive: {
        color: 'var(--ds-color-iconSupportPositive)'
      },
      colorIconSupportWarning: {
        color: 'var(--ds-color-iconSupportWarning)'
      },
      colorIconActionPrimary: {
        color: 'var(--ds-color-iconActionPrimary)'
      },
      colorIconActionSecondary: {
        color: 'var(--ds-color-iconActionSecondary)'
      },
      colorIconActionTertiary: {
        color: 'var(--ds-color-iconActionTertiary)'
      },
      colorIconOnSurface: {
        color: 'var(--ds-color-iconOnSurface)'
      },
      colorIconDisabled: {
        color: 'var(--ds-color-iconDisabled)'
      },
      colorIconDefault: {
        color: 'var(--ds-color-iconDefault)'
      },
      colorIconTypical: {
        color: 'var(--ds-color-iconTypical)'
      }
    }
  }
}
