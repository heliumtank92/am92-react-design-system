import { CSSInterpolation } from '@mui/system'
import { DsInputLabelDefaultProps } from './DsInputLabel.Types'

export const DsInputLabelOverrides = {
  MuiInputLabel: {
    defaultProps: DsInputLabelDefaultProps,
    styleOverrides: {
      root: {
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        transform: 'var(--ds-typo-casingNone)',
        position: 'relative',
        marginBottom: 'var(--ds-spacing-glacial)',
        color: 'var(--ds-colour-typoPrimary)',

        '> p:first-of-type': {
          paddingTop: 'var(--ds-spacing-deepFreeze)',
          paddingBottom: 'var(--ds-spacing-deepFreeze)',
          paddingRight: 'var(--ds-spacing-deepFreeze)'
        },

        '&.Mui-focused:not(.Mui-disabled)': {
          color: 'var(--ds-colour-typoPrimary)'
        },
        '&.MuiFormLabel-colorSuccess': {
          color: 'var(--ds-colour-supportPositive)'
        },
        '&.Mui-focused.MuiFormLabel-colorSuccess': {
          color: 'var(--ds-colour-supportPositive)'
        },
        '&.Mui-error': {
          color: 'var(--ds-colour-supportNegative)'
        },
        '&.Mui-focused.Mui-error': {
          color: 'var(--ds-colour-supportNegative)'
        }
      } as CSSInterpolation
    }
  }
}
