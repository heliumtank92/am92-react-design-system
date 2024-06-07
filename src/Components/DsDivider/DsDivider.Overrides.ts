import { CSSInterpolation } from '@mui/system'
import { DsDividerDefaultProps, DsDividerProps } from './DsDivider.Types'

export const DsDividerOverrides = {
  MuiDivider: {
    defaultProps: DsDividerDefaultProps,
    styleOverrides: {
      root: {
        borderColor: 'var(--ds-colour-strokeDefault)'
      },
      light: {
        borderColor: 'var(--ds-colour-strokeDisabled)'
      }
    },
    variants: [
      {
        props: { 'ds-size': 'M' } as Partial<DsDividerProps>,
        style: {
          borderWidth: '0.5px'
        } as CSSInterpolation
      },
      {
        props: { 'ds-size': 'L' } as Partial<DsDividerProps>,
        style: {
          borderWidth: '6px'
        } as CSSInterpolation
      }
    ]
  }
}
