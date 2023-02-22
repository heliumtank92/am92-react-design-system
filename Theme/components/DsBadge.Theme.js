const DsBadgeTheme = {
  MuiBadge: {
    defaultProps: {
      color: 'secondary',
      showZero: true
    },
    styleOverrides: {
      standard: {
        fontWeight: 'var(--ds-typo-supportRegularInfo-fontWeight)',
        fontSize: 'var(--ds-typo-supportRegularInfo-fontSize)',
        lineHeight: 'var(--ds-typo-supportRegularInfo-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportRegularInfo-letterSpacing)',
        textTransform: 'var(--ds-typo-supportRegularInfo-textTransform)',
        padding: 'var(--ds-spacing-deepFreeze)',
        minWidth: '16px',
        height: '16px',
        borderRadius: '8px'
      }
    }
  }
}

export default DsBadgeTheme
