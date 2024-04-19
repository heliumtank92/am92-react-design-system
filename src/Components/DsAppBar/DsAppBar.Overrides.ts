import { DsAppBarDefaultProps } from './DsAppBar.Types'

export const DsAppBarOverrides = {
  MuiAppBar: {
    defaultProps: DsAppBarDefaultProps,
    styleOverrides: {
      colorPrimary: {
        backgroundColor: 'var(--ds-colour-actionPrimary)',
        color: 'var(--ds-colour-typoOnSurface)',
        '& .MuiIconButton-root': {
          color: 'var(--ds-colour-iconOnSurface)'
        }
      },
      colorDefault: {
        backgroundColor: 'var(--ds-colour-surfaceBackground)',
        color: 'var(--ds-colour-typoPrimary)',
        '& .MuiIconButton-root': {
          color: 'var(--ds-colour-iconDefault)'
        }
      }
    }
  }
}
