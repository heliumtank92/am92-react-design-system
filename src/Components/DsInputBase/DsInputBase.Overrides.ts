import { CSSInterpolation, padding } from '@mui/system'
import { DsInputBaseDefaultProps, DsInputBaseProps } from './DsInputBase.Types'

export const DsInputBaseOverrides = {
  MuiInputBase: {
    defaultProps: DsInputBaseDefaultProps,
    variants: [
      {
        props: { 'ds-variant': 'otp' } as Partial<DsInputBaseProps>,
        style: {
          textAlign: 'center',
          '> input': {
            padding: 'var(--ds-spacing-zero)',
            fontWeight: 'var(--ds-typo-headingBoldMedium-fontWeight)',
            fontSize: 'var(--ds-typo-headingBoldMedium-fontSize)',
            lineHeight: 'var(--ds-typo-headingBoldMedium-lineHeight)',
            letterSpacing: 'var(--ds-typo-headingBoldMedium-letterSpacing)'
          }
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'otp',
          size: 'medium'
        } as Partial<DsInputBaseProps>,
        style: {
          height: '56px',
          width: '56px',
          padding:
            'calc(var(--ds-spacing-quickFreeze) + var(--ds-spacing-deepFreeze)) var(--ds-spacing-bitterCold)'
        } as CSSInterpolation
      },
      {
        props: {
          'ds-variant': 'otp',
          size: 'small'
        } as Partial<DsInputBaseProps>,
        style: {
          height: '40px',
          width: '40px',
          padding:
            'calc(var(--ds-spacing-quickFreeze) + var(--ds-spacing-deepFreeze)) var(--ds-spacing-glacial)'
        } as CSSInterpolation
      },
      {
        props: { 'ds-variant': 'search' } as Partial<DsInputBaseProps>,
        style: {
          borderRadius: 'var(--ds-radius-pleasant)',
          paddingLeft: 'var(--ds-spacing-frostbite)',
          paddingRight: 'var(--ds-spacing-bitterCold)',
          paddingTop: 'var(--ds-spacing-glacial)',
          paddingBottom: 'var(--ds-spacing-glacial)',
          // height: 'var(--ds-rules-searchbarHeight)',
          minWidth: 'var(--ds-rules-searchbarMinWidth)',
          fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
          fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
          lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
          '> input': {
            padding: 'var(--ds-spacing-zero)',
            ml: 'var(--ds-spacing-frostbite)'
          },
          '> input::placeholder': {
            color: 'var(--ds-colour-typoSecondary)',
            opacity: 1
          }
        } as CSSInterpolation
      }
    ],
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-glacial)',
        background: 'var(--ds-colour-surfacePrimary)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--ds-colour-strokeDefault)',
        borderRadius: 'var(--ds-radius-quickFreeze)',
        '&.Mui-focused:not(.Mui-disabled)': {
          borderColor: 'var(--ds-colour-strokeActive)'
        },
        '&.MuiInputBase-colorSuccess': {
          borderColor: 'var(--ds-colour-supportPositive)'
        },
        '&.Mui-focused.MuiInputBase-colorSuccess': {
          borderColor: 'var(--ds-colour-supportPositive)'
        },
        '&.Mui-disabled': {
          background: 'var(--ds-colour-stateDisabledSurface)',
          borderColor: 'var(--ds-colour-strokeDisabled)',
          cursor: 'not-allowed',
          pointerEvents: 'all',
          '> .MuiInputAdornment-root': {
            color: 'var(--ds-colour-iconDisabled)',
            cursor: 'not-allowed',
            pointerEvents: 'all'
          }
        },
        '&.Mui-error': {
          borderColor: 'var(--ds-colour-supportNegative)'
        },
        '&.Mui-focused.Mui-error': {
          borderColor: 'var(--ds-colour-supportNegative)'
        },
        '&.MuiInputBase-readOnly': {
          background: 'var(--ds-colour-stateDisabledSurface)',
          borderColor: 'var(--ds-colour-strokeDisabled)',
          pointerEvents: 'none',
          '> .MuiInputAdornment-root': {
            color: 'var(--ds-colour-iconDisabled)',
            '> .MuiIcon-root': {
              color: 'var(--ds-colour-iconDisabled)'
            },
            '> .MuiIconButton-root': {
              color: 'var(--ds-colour-iconDisabled)'
            }
          }
        },
        '> .MuiInputAdornment-root': {
          padding: 'var(--ds-spacing-deepFreeze)',
          height: 'auto'
        },
        // The warning for SSR let it be
        '> :nth-child(even)': {
          marginLeft: 'var(--ds-spacing-quickFreeze)'
        }
      } as CSSInterpolation,
      input: {
        padding: 'var(--ds-spacing-quickFreeze) var(--ds-spacing-zero)',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'all'
        },
        '&::placeholder': {
          color: 'var(--ds-colour-typoTertiary)',
          opacity: 1
        }
      } as CSSInterpolation
    }
  }
}
