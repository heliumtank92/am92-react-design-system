import { DsPaperDefaultProps } from './DsPaper.Types'

export const DsPaperOverrides = {
  MuiPaper: {
    defaultProps: DsPaperDefaultProps
  },
  styleOverrides: {
    root: {
      boxShadow: 'var(--ds-elevation-0)'
    }
  }
}
