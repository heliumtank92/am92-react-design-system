import { DsBadgeDefaultProps } from './DsBadge.Types'

export const DsBadgeOverrides = {
  MuiBadge: {
    defaultProps: DsBadgeDefaultProps,
    styleOverrides: {
      standard: {
        fontWeight: 'var(--ds-typo-supportRegularInfo-fontWeight)',
        fontSize: 'var(--ds-typo-supportRegularInfo-fontSize)',
        lineHeight: 'var(--ds-typo-supportRegularInfo-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportRegularInfo-letterSpacing)',
        padding: 'var(--ds-spacing-deepFreeze)',
        minWidth: '16px',
        height: '16px',
        borderRadius: '8px'
      }
    }
  }
}
