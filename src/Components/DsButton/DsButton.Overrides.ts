import { DsButtonDefaultProps } from './DsButton.Types'
import STATE_STYLES from '../../Theme/STATE_STYLES'

export const DsButtonOverrides = {
  MuiButton: {
    defaultProps: DsButtonDefaultProps,
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'all'
        }
      },
      containedSecondary: {
        backgroundColor: 'var(--ds-color-surfaceSecondary)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--ds-color-strokeDefault)',
        color: 'var(--ds-color-typoActionPrimary)',
        '&:disabled': {
          backgroundColor: 'var(--ds-color-stateDisabledSurface)',
          color: 'var(--ds-color-typoDisabled)'
        },
        ...STATE_STYLES.SURFACE_SECONDARY_STATE_PRIMARY
      },
      text: {
        '&:hover': {
          backgroundColor: 'transparent'
        },
        '> .MuiTouchRipple-root': {
          display: 'none'
        }
      },
      sizeLarge: {
        padding: 'var(--ds-spacing-bitterCold)',
        fontWeight: 'var(--ds-typo-bodyBoldLarge-fontWeight)',
        fontSize: 'var(--ds-typo-bodyBoldLarge-fontSize)',
        lineHeight: 'var(--ds-typo-bodyBoldLarge-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyBoldLarge-letterSpacing)'
      },
      sizeMedium: {
        padding: 'var(--ds-spacing-frostbite) var(--ds-spacing-bitterCold)',
        fontWeight: 'var(--ds-typo-bodyBoldMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyBoldMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyBoldMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyBoldMedium-letterSpacing)'
      },
      sizeSmall: {
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-bitterCold)',
        fontWeight: 'var(--ds-typo-bodyBoldSmall-fontWeight)',
        fontSize: 'var(--ds-typo-bodyBoldSmall-fontSize)',
        lineHeight: 'var(--ds-typo-bodyBoldSmall-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyBoldSmall-letterSpacing)'
      },
      iconSizeLarge: {
        fontSize: 'var(--ds-fontSizeMild)',
        '&.MuiButton-startIcon': {
          marginRight: 'var(--ds-spacing-glacial)'
        },
        '&.MuiButton-endIcon': {
          marginLeft: 'var(--ds-spacing-glacial)'
        }
      },
      iconSizeMedium: {
        fontSize: 'var(--ds-fontSizeCool)',
        '&.MuiButton-startIcon': {
          marginRight: 'var(--ds-spacing-glacial)'
        },
        '&.MuiButton-endIcon': {
          marginLeft: 'var(--ds-spacing-glacial)'
        }
      },
      iconSizeSmall: {
        fontSize: 'var(--ds-fontSizeBitterCold)',
        '&.MuiButton-startIcon': {
          marginRight: 'var(--ds-spacing-quickFreeze)'
        },
        '&.MuiButton-endIcon': {
          marginLeft: 'var(--ds-spacing-quickFreeze)'
        }
      },
      textSizeSmall: {
        color: 'var(--ds-color-actionSecondary)',
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-quickFreeze)',
        fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
        fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
        lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)',
        textTransform: 'var(--ds-typo-supportBoldTextButton-textTransform)',
        borderRadius: 0,
        '&.MuiIcon-root': {
          fontSize: 'var(--ds-fontSizeBitterCold)',
          '&.MuiButton-startIcon': {
            marginRight: 'var(--ds-spacing-glacial)'
          },
          '&.MuiButton-endIcon': {
            marginLeft: 'var(--ds-spacing-glacial)'
          }
        },
        '&:disabled': {
          color: 'var(--ds-color-typoDisabled)'
        }
      },
      textSizeMedium: {
        color: 'var(--ds-color-actionSecondary)',
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-quickFreeze)',
        fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
        fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
        lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)',
        textTransform: 'var(--ds-typo-supportBoldTextButton-textTransform)',
        borderRadius: 0,
        '&.MuiIcon-root': {
          fontSize: 'var(--ds-fontSizeBitterCold)',
          '&.MuiButton-startIcon': {
            marginRight: 'var(--ds-spacing-glacial)'
          },
          '&.MuiButton-endIcon': {
            marginLeft: 'var(--ds-spacing-glacial)'
          }
        },
        '&:disabled': {
          color: 'var(--ds-color-typoDisabled)'
        }
      },
      textSizeLarge: {
        color: 'var(--ds-color-actionSecondary)',
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-quickFreeze)',
        fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
        fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
        lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)',
        textTransform: 'var(--ds-typo-supportBoldTextButton-textTransform)',
        borderRadius: 0,
        '&.MuiIcon-root': {
          fontSize: 'var(--ds-fontSizeBitterCold)',
          '&.MuiButton-startIcon': {
            marginRight: 'var(--ds-spacing-glacial)'
          },
          '&.MuiButton-endIcon': {
            marginLeft: 'var(--ds-spacing-glacial)'
          }
        },
        '&:disabled': {
          color: 'var(--ds-color-typoDisabled)'
        }
      }
    },
    variants: [
      {
        props: { variant: 'flushed' },
        style: {
          borderRadius: 0,
          color: 'var(--ds-color-typoOnSurface)',
          backgroundColor: 'var(--ds-color-actionPrimary)'
        }
      },
      {
        props: { color: 'primary' },
        style: {
          color: 'var(--ds-color-typoOnSurface)',
          '&:disabled': {
            color: 'var(--ds-color-typoOnSurface)',
            backgroundColor: 'var(--ds-color-stateUnselectedDefault)'
          },
          ...STATE_STYLES.ACTION_PRIMARY_STATE_PRIMARY
        }
      }
    ]
  }
}
