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
        color: 'var(--ds-colour-iconNegative)'
      },
      colorIconSupportPositive: {
        color: 'var(--ds-colour-iconPositive)'
      },
      colorIconSupportWarning: {
        color: 'var(--ds-colour-iconWarning)'
      },
      colorIconActionPrimary: {
        color: 'var(--ds-colour-iconActionPrimary)'
      },
      colorIconActionSecondary: {
        color: 'var(--ds-colour-iconActionSecondary)'
      },
      colorIconActionTertiary: {
        color: 'var(--ds-colour-iconActionTertiary)'
      },
      colorIconOnSurface: {
        color: 'var(--ds-colour-iconOnSurface)'
      },
      colorIconDisabled: {
        color: 'var(--ds-colour-iconDisabled)'
      },
      colorIconDefault: {
        color: 'var(--ds-colour-iconDefault)'
      },
      colorIconTypical: {
        color: 'var(--ds-colour-iconTypical)'
      },
      fontSizeScorched: {
        fontSize: 'var(--ds-typo-fontSizeScorched)'
      },
      fontSizeTorrid: {
        fontSize: 'var(--ds-typo-fontSizeTorrid)'
      },
      fontSizeBlazzing: {
        fontSize: 'var(--ds-typo-fontSizeBlazzing)'
      },
      fontSizeHot: {
        fontSize: 'var(--ds-typo-fontSizeHot)'
      },
      fontSizeTropical: {
        fontSize: 'var(--ds-typo-fontSizeTropical)'
      },
      fontSizeWarm: {
        fontSize: 'var(--ds-typo-fontSizeWarm)'
      },
      fontSizeMild: {
        fontSize: 'var(--ds-typo-fontSizeMild)'
      },
      fontSizeCool: {
        fontSize: 'var(--ds-typo-fontSizeCool)'
      },
      fontSizeCold: {
        fontSize: 'var(--ds-typo-fontSizeCold)'
      },
      fontSizeBitterCold: {
        fontSize: 'var(--ds-typo-fontSizeBitterCold)'
      },
      fontSizeFrigid: {
        fontSize: 'var(--ds-typo-fontSizeFrigid)'
      },
      fontSizeFrostbite: {
        fontSize: 'var(--ds-typo-fontSizeFrostbite)'
      },
      fontSizeBlizzard: {
        fontSize: 'var(--ds-typo-fontSizeBlizzard)'
      },
      fontSizeIceAge: {
        fontSize: 'var(--ds-typo-fontSizeIceAge)'
      }
    }
  }
}
