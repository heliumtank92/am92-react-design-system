import { DsLinkDefaultProps } from './DsLink.Types'

export const DsLinkOverrides = {
  MuiLink: {
    defaultProps: DsLinkDefaultProps,
    styleOverrides: {
      root: {
        cursor: 'pointer',
        textDecorationColor: 'var(--ds-colour-actionSecondary)',
        textUnderlinePosition: 'under',
        '&:visited': {
          color: 'var(--ds-colour-stateSelectedVisitedTextLink)',
          textDecorationColor: 'var(--ds-colour-stateSelectedVisitedTextLink)'
        },
        '&:active': {
          color: 'var(--ds-colour-typoActionPrimary)',
          textDecorationColor: 'var(--ds-colour-typoActionPrimary)'
        },
        '&:disabled': {
          color: 'var(--ds-colour-typoDisabled)',
          textDecorationColor: 'var(--ds-colour-typoDisabled)'
        },
        '&:focus': {
          textDecoration: 'underline'
        }
      }
    }
  }
}
