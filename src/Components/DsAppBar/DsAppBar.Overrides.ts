import { DsAppBarDefaultProps } from './DsAppBar.Types'

export const DsAppBarOverrides = {
  defaultProps: DsAppBarDefaultProps,
  styleOverrides: {
    colorPrimary: {
      backgroundColor: 'var(--ds-color-actionPrimary)',
      color: 'var(--ds-color-typoOnSurface)',
      '& .MuiIconButton-root': {
        color: 'var(--ds-color-iconOnSurface)'
      }
    },
    colorDefault: {
      backgroundColor: 'var(--ds-color-surfaceBackground)',
      color: 'var(--ds-color-typoPrimary)',
      '& .MuiIconButton-root': {
        color: 'var(--ds-color-iconDefault)'
      }
    }
  }
}
