import { DsDialogActionsProps } from './DsDialogActions.Types'

export const DsDialogActionsOverrides = {
  MuiDialogActions: {
    variants: [
      {
        props: { variant: 'flushed' } as Partial<DsDialogActionsProps>,
        style: {
          marginLeft: 'calc(-1 * var(--ds-spacing-warm))',
          marginRight: 'calc(-1 * var(--ds-spacing-warm))',
          marginBottom: 'calc(-1 * var(--ds-spacing-warm))'
        }
      }
    ],
    styleOverrides: {
      root: {
        marginTop: 'var(--ds-spacing-mild)',
        padding: 'var(--ds-spacing-zero)',
        '> *': {
          flex: 1
        },
        '>:not(style)~:not(style)': {
          marginLeft: 'var(--ds-spacing-frostbite)'
        }
      }
    }
  }
}
