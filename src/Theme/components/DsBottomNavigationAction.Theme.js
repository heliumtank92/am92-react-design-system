const DsBottomNavigationActionTheme = {
  MuiBottomNavigationAction: {
    defaultProps: {
      showLabel: true
    },
    styleOverrides: {
      root: {
        marginLeft: 'var(--ds-spacing-quickFreeze)',
        marginRight: 'var(--ds-spacing-quickFreeze)',
        borderTopWidth: '2px',
        borderTopStyle: 'solid',
        padding: 'var(--ds-spacing-zero)',
        '> .MuiIcon-root': {
          paddingTop: 'var(--ds-spacing-glacial)'
        }
      },
      label: {
        fontWeight: 'var(--ds-typo-bodyRegularSmall-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularSmall-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularSmall-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularSmall-letterSpacing)'
      },
      selected: {
        borderTopColor: 'var(--ds-color-actionSecondary)'
      }
    }
  }
}

export default DsBottomNavigationActionTheme
