import { CSSInterpolation } from '@mui/system'

export const DsDialogContentOverrides = {
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-zero)'
      } as CSSInterpolation
    }
  }
}
