import { CSSInterpolation } from '@mui/system'

export const DsDialogContentOverrides = {
  MuiDialogContent: {
    styleOverrides: {
      root: {
        marginTop: 'var(--ds-spacing-mild)',
        padding: 'var(--ds-spacing-zero)'
      } as CSSInterpolation
    }
  }
}
