import { DsDividerDefaultProps } from './DsDivider.Types'

export const DsDividerOverrides = {
  MuiDivider: {
    defaultProps: DsDividerDefaultProps,
    styleOverrides: {
      root: {
        borderColor: 'var(--ds-color-strokeDefault)'
      },
      light: {
        borderColor: 'var(--ds-color-strokeDisabled)'
      }
    },
    variants: [
      {
        props: { 'ds-size': 'M' },
        style: {
          borderWidth: '0.5px'
        }
      },
      {
        props: { 'ds-size': 'L' },
        style: {
          borderWidth: '6px'
        }
      }
    ]
  }
}
