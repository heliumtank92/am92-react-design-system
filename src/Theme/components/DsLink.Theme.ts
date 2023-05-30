const DsLinkTheme = {
  MuiLink: {
    defaultProps: {
      color: 'secondary',
      variant: 'bodyRegularSmall',
      underline: 'hover'
    },
    styleOverrides: {
      root: {
        cursor: 'pointer',
        textDecorationColor: 'var(--ds-color-actionSecondary)',
        textUnderlinePosition: 'under',
        '&:visited': {
          color: 'var(--ds-color-stateSelectedVisitedTextLink)',
          textDecorationColor: 'var(--ds-color-stateSelectedVisitedTextLink)'
        },
        '&:active': {
          color: 'var(--ds-color-typoActionPrimary)',
          textDecorationColor: 'var(--ds-color-typoActionPrimary)'
        },
        '&:disabled': {
          color: 'var(--ds-color-typoDisabled)',
          textDecorationColor: 'var(--ds-color-typoDisabled)'
        },
        '&:focus': {
          textDecoration: 'underline'
        }
      }
    }
  }
}

export default DsLinkTheme
