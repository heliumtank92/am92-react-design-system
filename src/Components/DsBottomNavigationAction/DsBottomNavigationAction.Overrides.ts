import { CSSInterpolation } from '@mui/system'
import { DsBottomNavigationActionDefaultProps } from './DsBottomNavigationAction.Types'

export const DsBottomNavigationActionOverrides = {
  MuiBottomNavigationAction: {
    defaultProps: DsBottomNavigationActionDefaultProps,
    styleOverrides: {
      root: {
        marginLeft: 'var(--ds-spacing-quickFreeze)',
        marginRight: 'var(--ds-spacing-quickFreeze)',
        borderTopWidth: '2px',
        borderTopStyle: 'solid',
        borderTopColor: 'transparent',
        padding: 'var(--ds-spacing-zero)',
        justifyContent: 'flex-start',
        color: 'var(--ds-colour-iconDisabled)',
        '> .MuiIcon-root': {
          paddingTop: 'var(--ds-spacing-glacial)'
        },
        '&.Mui-selected': {
          borderTopColor: 'var(--ds-colour-actionSecondary)',
          color: 'var(--ds-colour-actionSecondary)'
        }
      } as CSSInterpolation,
      label: {
        fontWeight: 'var(--ds-typo-bodyRegularSmall-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularSmall-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularSmall-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularSmall-letterSpacing)',
        color: 'var(--ds-colour-typoDisabled)',
        paddingBottom: 'var(--ds-spacing-quickFreeze)',
        '&.Mui-selected': {
          fontSize: 'var(--ds-typo-bodyRegularSmall-fontSize)',
          color: 'var(--ds-colour-actionSecondary)'
        }
      } as CSSInterpolation
    }
  }
}
