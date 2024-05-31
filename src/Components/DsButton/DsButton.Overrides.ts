import { DsButtonDefaultProps, DsButtonProps } from './DsButton.Types'
import STATE_STYLES from '../../Theme/STATE_STYLES'
import { CSSInterpolation } from '@mui/system'

export const DsButtonOverrides = {
  MuiButton: {
    defaultProps: DsButtonDefaultProps,
    variants: [
      {
        props: { variant: 'flushed' } as Partial<DsButtonProps>,
        style: {
          borderRadius: 'var(--ds-radius-zero)'
        } as CSSInterpolation
      },
      {
        props: {
          variant: 'flushed',
          color: 'primary'
        } as Partial<DsButtonProps>,
        style: {
          color: 'var(--ds-colour-typoOnSurface)',
          backgroundColor: 'var(--ds-colour-actionPrimary)',
          '&:disabled': {
            color: 'var(--ds-colour-typoOnSurface)',
            backgroundColor: 'var(--ds-colour-stateUnselectedDefault)'
          },
          ...STATE_STYLES.ACTION_PRIMARY_STATE_PRIMARY
        } as CSSInterpolation
      }
    ],
    styleOverrides: {
      root: {
        borderRadius: 'var(--ds-radius-glacial)',
        textTransform: 'none',
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'all'
        }
      } as CSSInterpolation,
      contained: {
        '&.MuiButton-containedPrimary': {
          color: 'var(--ds-colour-typoOnSurface)',
          backgroundColor: 'var(--ds-colour-actionPrimary)',
          '&:disabled': {
            color: 'var(--ds-colour-typoOnSurface)',
            backgroundColor: 'var(--ds-colour-stateUnselectedDefault)'
          },
          ...STATE_STYLES.ACTION_PRIMARY_STATE_PRIMARY
        } as CSSInterpolation,
        '&.MuiButton-containedSecondary': {
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
        } as CSSInterpolation
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
      icon: {
        '&.MuiButton-sizeLarge': {
          fontSize: 'var(--ds-typo-fontSizeMild)'
        } as CSSInterpolation,
        '&.MuiButton-sizeMedium': {
          fontSize: 'var(--ds-typo-fontSizeCool)'
        } as CSSInterpolation,
        '&.MuiButton-sizeSmall': {
          fontSize: 'var(--ds-typo-fontSizeBitterCold)'
        } as CSSInterpolation
      } as CSSInterpolation,
      startIcon: {
        marginRight: 'var(--ds-spacing-glacial)'
      },
      endIcon: {
        marginLeft: 'var(--ds-spacing-glacial)'
      },
      text: {
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-quickFreeze)',
        textTransform: 'uppercase',
        borderRadius: 'var(--ds-radius-zero)',
        '&:hover': {
          backgroundColor: 'transparent'
        } as CSSInterpolation,
        '> .MuiTouchRipple-root': {
          display: 'none'
        } as CSSInterpolation,
        '&:disabled': {
          color: 'var(--ds-colour-typoDisabled)'
        } as CSSInterpolation,
        '> .MuiIcon-root': {
          fontSize: 'var(--ds-typo-fontSizeFrostbite)'
        } as CSSInterpolation,

        '&.MuiButton-sizeLarge': {
          fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
          fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
          lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
          letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)'
        } as CSSInterpolation,
        '&.MuiButton-sizeMedium': {
          fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
          fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
          lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
          letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)'
        } as CSSInterpolation,
        '&.MuiButton-sizeSmall': {
          fontWeight: 'var(--ds-typo-supportBoldTextButton-fontWeight)',
          fontSize: 'var(--ds-typo-supportBoldTextButton-fontSize)',
          lineHeight: 'var(--ds-typo-supportBoldTextButton-lineHeight)',
          letterSpacing: 'var(--ds-typo-supportBoldTextButton-letterSpacing)'
        } as CSSInterpolation
      } as CSSInterpolation
    }
  }
}
