import { CSSInterpolation } from '@mui/system'

export const DsDialogTitleOverrides = {
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontWeight: 'var(--ds-typo-headingBoldSmall-fontWeight)',
        fontSize: 'var(--ds-typo-headingBoldSmall-fontSize)',
        lineHeight: 'var(--ds-typo-headingBoldSmall-lineHeight)',
        letterSpacing: 'var(--ds-typo-headingBoldSmall-letterSpacing)',
        color: 'var(--ds-color-typoPrimary)',
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)',
        paddingBottom: 'var(--ds-spacing-bitterCold)',
        paddingTop: 'var(--ds-spacing-mild)',
        textAlign: 'center'
      } as CSSInterpolation
    }
  }
}
