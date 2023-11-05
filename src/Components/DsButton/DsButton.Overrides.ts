import { DsButtonDefaultProps, DsButtonProps } from './DsButton.Types'
import STATE_STYLES from '../../Theme/STATE_STYLES'
import { CSSInterpolation } from '@mui/system'

export const DsButtonOverrides = {
  MuiButton: {
    defaultProps: DsButtonDefaultProps,
    styleOverrides: {
      root: {
        borderRadius: 'var(--ds-radius-glacial)',
        textTransform: 'none',
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'all'
        }
      } as CSSInterpolation,
      containedSecondary: {
        backgroundColor: 'var(--ds-colour-surfaceSecondary)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--ds-colour-strokeDefault)',
        color: 'var(--ds-colour-typoActionPrimary)',
        '&:disabled': {
          backgroundColor: 'var(--ds-colour-stateDisabledSurface)',
          color: 'var(--ds-colour-typoDisabled)'
        },
        ...STATE_STYLES.SURFACE_SECONDARY_STATE_PRIMARY
      } as CSSInterpolation,
      text: {
        '&:hover': {
          backgroundColor: 'transparent'
        },
        '> .MuiTouchRipple-root': {
          display: 'none'
        }
      } as CSSInterpolation,
      sizeLarge: {
        padding: 'var(--ds-spacing-bitterCold)',
        fontWeight: 'var(--ds-typo-bodyBoldLarge-fontWeight)',
        fontSize: 'var(--ds-typo-bodyBoldLarge-fontSize)',
        lineHeight: 'var(--ds-typo-bodyBoldLarge-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyBoldLarge-letterSpacing)'
      } as CSSInterpolation,
      sizeMedium: {
        padding: 'var(--ds-spacing-frostbite) var(--ds-spacing-bitterCold)',
        fontWeight: 'var(--ds-typo-bodyBoldMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyBoldMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyBoldMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyBoldMedium-letterSpacing)'
      } as CSSInterpolation,
      sizeSmall: {
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-bitterCold)',
        fontWeight: 'var(--ds-typo-bodyBoldSmall-fontWeight)',
        fontSize: 'var(--ds-typo-bodyBoldSmall-fontSize)',
        lineHeight: 'var(--ds-typo-bodyBoldSmall-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyBoldSmall-letterSpacing)'
      } as CSSInterpolation,
      iconSizeLarge: {
        fontSize: 'var(--ds-typo-fontSizeMild)',
        '&.MuiButton-startIcon': {
          marginRight: 'var(--ds-spacing-glacial)'
        },
        '&.MuiButton-endIcon': {
          marginLeft: 'var(--ds-spacing-glacial)'
        }
      } as CSSInterpolation,
      iconSizeMedium: {
        fontSize: 'var(--ds-typo-fontSizeCool)',
        '&.MuiButton-startIcon': {
          marginRight: 'var(--ds-spacing-glacial)'
        },
        '&.MuiButton-endIcon': {
          marginLeft: 'var(--ds-spacing-glacial)'
        }
      } as CSSInterpolation,
      iconSizeSmall: {
        fontSize: 'var(--ds-typo-fontSizeBitterCold)',
        '&.MuiButton-startIcon': {
          marginRight: 'var(--ds-spacing-quickFreeze)'
        },
        '&.MuiButton-endIcon': {
          marginLeft: 'var(--ds-spacing-quickFreeze)'
        }
      } as CSSInterpolation,
      textSizeSmall: {
        color: 'var(--ds-colour-actionSecondary)',
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-quickFreeze)',
        fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
        fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
        lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)',
        textTransform: 'uppercase',
        borderRadius: 'var(--ds-radius-zero)',
        '> .MuiButton-iconSizeSmall': {
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-typo-fontSizeFrostbite)'
          },
          '&.MuiButton-startIcon': {
            marginRight: 'var(--ds-spacing-glacial)'
          },
          '&.MuiButton-endIcon': {
            marginLeft: 'var(--ds-spacing-glacial)'
          }
        },
        '&:disabled': {
          color: 'var(--ds-colour-typoDisabled)'
        }
      } as CSSInterpolation,
      textSizeMedium: {
        color: 'var(--ds-colour-actionSecondary)',
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-quickFreeze)',
        fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
        fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
        lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)',
        textTransform: 'uppercase',
        borderRadius: 'var(--ds-radius-zero)',
        '> .MuiButton-iconSizeMedium': {
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-typo-fontSizeFrostbite)'
          },
          '&.MuiButton-startIcon': {
            marginRight: 'var(--ds-spacing-glacial)'
          },
          '&.MuiButton-endIcon': {
            marginLeft: 'var(--ds-spacing-glacial)'
          }
        },
        '&:disabled': {
          color: 'var(--ds-colour-typoDisabled)'
        }
      } as CSSInterpolation,
      textSizeLarge: {
        color: 'var(--ds-colour-actionSecondary)',
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-quickFreeze)',
        fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
        fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
        lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)',
        textTransform: 'uppercase',
        borderRadius: 'var(--ds-radius-zero)',
        '> .MuiButton-iconSizeLarge': {
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-typo-fontSizeFrostbite)'
          },
          '&.MuiButton-startIcon': {
            marginRight: 'var(--ds-spacing-glacial)'
          },
          '&.MuiButton-endIcon': {
            marginLeft: 'var(--ds-spacing-glacial)'
          }
        },
        '&:disabled': {
          color: 'var(--ds-colour-typoDisabled)'
        }
      } as CSSInterpolation
    },
    variants: [
      {
        props: { variant: 'flushed' } as Partial<DsButtonProps>,
        style: {
          borderRadius: 'var(--ds-radius-zero)',
          color: 'var(--ds-colour-typoOnSurface)',
          backgroundColor: 'var(--ds-colour-actionPrimary)'
        } as CSSInterpolation
      },
      {
        props: { color: 'primary' } as Partial<DsButtonProps>,
        style: {
          color: 'var(--ds-colour-typoOnSurface)',
          '&:disabled': {
            color: 'var(--ds-colour-typoOnSurface)',
            backgroundColor: 'var(--ds-colour-stateUnselectedDefault)'
          },
          ...STATE_STYLES.ACTION_PRIMARY_STATE_PRIMARY
        } as CSSInterpolation
      }
    ]
  }
}
