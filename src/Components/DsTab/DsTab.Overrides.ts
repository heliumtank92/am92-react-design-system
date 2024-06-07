import { CSSInterpolation } from '@mui/system'
import { DsTabDefaultProps } from './DsTab.Types'

export const DsTabOverrides = {
  MuiTab: {
    defaultProps: DsTabDefaultProps,
    styleOverrides: {
      root: {
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        padding: 'var(--ds-spacing-glacial)',
        gap: 'var(--ds-spacing-glacial)',
        minHeight: '36px',
        textTransform: 'none',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--ds-colour-stateDisabledSurface)',
        '> .MuiTab-iconWrapper': {
          fontSize: 'var(--ds-typo-fontSizeFrostbite)',
          margin: 'var(--ds-spacing-zero)'
        }
      } as CSSInterpolation
    }
  }
}
