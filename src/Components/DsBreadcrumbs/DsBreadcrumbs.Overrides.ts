import { DsBreadcrumbsDefaultProps } from './DsBreadcrumbs.Types'

export const DsBreadcrumbsOverrides = {
  MuiBreadcrumbs: {
    defaultProps: DsBreadcrumbsDefaultProps,
    styleOverrides: {
      ol: {
        ' > li': {
          ' > .MuiButtonBase-root': {
            background: 'transparent'
          }
        }
      },
      li: {
        ' > .MuiLink-root': {
          '&:visited': {
            color: 'var(--ds-colour-typoPrimary)',
            textDecorationColor: 'var(--ds-colour-typoPrimary)'
          },
          '&:active': {
            color: 'var(--ds-colour-typoPrimary)',
            textDecorationColor: 'var(--ds-colour-typoPrimary)'
          },
          '&:disabled': {
            color: 'var(--ds-colour-typoDisabled)',
            textDecorationColor: 'var(--ds-colour-typoDisabled)'
          },
          '&:focus': {
            textDecoration: 'underline',
            textDecorationThickness: '2px'
          }
        }
      }
    }
  }
}
