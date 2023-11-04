import { CSSInterpolation } from '@mui/system'

export const DsDialogTitleOverrides = {
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontWeight: 'var(--ds-typo-headingBoldMedium-fontWeight)',
        fontSize: 'var(--ds-typo-headingBoldMedium-fontSize)',
        lineHeight: 'var(--ds-typo-headingBoldMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-headingBoldMedium-letterSpacing)',
        color: 'var(--ds-colour-typoPrimary)',
        padding: 'var(--ds-spacing-zero)',
        marginBottom: 'var(--ds-spacing-quickFreeze)'
      } as CSSInterpolation
    }
  }
}
