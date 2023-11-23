import { DsToastDefaultProps } from './DsToast.Types'

export const DsToastOverrides = {
  MuiAlert: {
    defaultProps: DsToastDefaultProps,
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-frostbite)',
        borderRadius: 'var(--ds-radius-quickFreeze)',
        borderWidth: '1px',
        borderStyle: 'solid',
        boxShadow: 'var(--ds-elevation-1)',
        borderColor: 'var(--ds-colour-strokeDefault)',
        backgroundColor: 'var(--ds-colour-surfaceSecondary)',
        color: 'var(--ds-colour-typoPrimary)',
        alignItems: 'center',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)'
      },
      icon: {
        padding: 'var(--ds-spacing-zero)'
      },
      message: {
        flexGrow: 1,
        padding: 'var(--ds-spacing-zero)'
      },
      action: {
        marginRight: 'var(--ds-spacing-zero)',
        padding: 'var(--ds-spacing-zero)',
        marginLeft: 'var(--ds-spacing-frostbite)',
        fontSize: 'var(--ds-typo-fontSizeMild)',
        '.MuiIconButton-root': {
          fontSize: 'var(--ds-typo-fontSizeMild)'
        },
        '.MuiSvgIcon-root': {
          fontSize: 'inherit'
        }
      },
      filledSuccess: {
        color: 'var(--ds-colour-typoOnSurface)',
        borderColor: 'var(--ds-colour-supportPositive)',
        backgroundColor: 'var(--ds-colour-supportPositive)'
      },
      filledInfo: {
        color: 'var(--ds-colour-typoOnSurface)',
        borderColor: 'var(--ds-colour-supportTypical)',
        backgroundColor: 'var(--ds-colour-supportTypical)'
      },
      filledWarning: {
        color: 'var(--ds-colour-typoOnSurface)',
        borderColor: 'var(--ds-colour-supportWarning)',
        backgroundColor: 'var(--ds-colour-supportWarning)'
      },
      filledError: {
        color: 'var(--ds-colour-typoOnSurface)',
        borderColor: 'var(--ds-colour-supportNegative)',
        backgroundColor: 'var(--ds-colour-supportNegative)'
      },
      outlinedSuccess: {
        color: 'var(--ds-colour-supportPositive)',
        backgroundColor: 'var(--ds-colour-surfaceBackground)'
      },
      outlinedInfo: {
        color: 'var(--ds-colour-supportTypical)',
        backgroundColor: 'var(--ds-colour-surfaceBackground)'
      },
      outlinedWarning: {
        color: 'var(--ds-colour-supportWarning)',
        backgroundColor: 'var(--ds-colour-surfaceBackground)'
      },
      outlinedError: {
        color: 'var(--ds-colour-supportNegative)',
        backgroundColor: 'var(--ds-colour-surfaceBackground)'
      }
    }
  }
}
