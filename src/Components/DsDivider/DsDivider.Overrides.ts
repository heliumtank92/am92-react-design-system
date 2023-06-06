import { CSSInterpolation } from '@mui/system'
import { DsDividerDefaultProps, DsDividerProps } from './DsDivider.Types'

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
