import { AlertProps } from '@mui/material'

const defaultProps: AlertProps = {
  variant: 'standard',
  icon: false,
  severity: undefined
}

const DsToastTheme = {
  MuiAlert: {
    defaultProps,
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-frostbite)',
        borderRadius: '4px',
        borderWidth: '1px',
        borderStyle: 'solid',
        boxShadow: 'var(--ds-elevation-1)',
        borderColor: 'var(--ds-color-strokeDefault)',
        backgroundColor: 'var(--ds-color-surfaceTertiary)',
        color: 'var(--ds-color-surfaceSecondary)',
        alignItems: 'center',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing:
          'var(--ds-typo-bodyRegularMedium-letterSpacing)'
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
        color: 'var(--ds-color-typoOnSurface)',
        borderColor: 'var(--ds-color-supportPositive)',
        backgroundColor: 'var(--ds-color-supportPositive)'
      },
      filledInfo: {
        color: 'var(--ds-color-typoOnSurface)',
        borderColor: 'var(--ds-color-supportTypical)',
        backgroundColor: 'var(--ds-color-supportTypical)'
      },
      filledWarning: {
        color: 'var(--ds-color-typoOnSurface)',
        borderColor: 'var(--ds-color-supportWarning)',
        backgroundColor: 'var(--ds-color-supportWarning)'
      },
      filledError: {
        color: 'var(--ds-color-typoOnSurface)',
        borderColor: 'var(--ds-color-supportNegative)',
        backgroundColor: 'var(--ds-color-supportNegative)'
      },
      outlinedSuccess: {
        color: 'var(--ds-color-supportPositive)',
        backgroundColor: 'var(--ds-color-surfaceBackground)'
      },
      outlinedInfo: {
        color: 'var(--ds-color-supportTypical)',
        backgroundColor: 'var(--ds-color-surfaceBackground)'
      },
      outlinedWarning: {
        color: 'var(--ds-color-supportWarning)',
        backgroundColor: 'var(--ds-color-surfaceBackground)'
      },
      outlinedError: {
        color: 'var(--ds-color-supportNegative)',
        backgroundColor: 'var(--ds-color-surfaceBackground)'
      }
    }
  }
}

export default DsToastTheme
