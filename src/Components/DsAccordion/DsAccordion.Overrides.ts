import { DsAccordionDefaultProps } from './DsAccordion.Types'

export const DsAccordionOverrides = {
  MuiAccordion: {
    defaultProps: DsAccordionDefaultProps,
    styleOverrides: {
      root: {
        backgroundColor: 'var(--ds-colour-surfacePrimary)',
        boxShadow: 'var(--ds-elevation--1)',
        overflow: 'hidden',
        '&:not(:first-of-type):not(.Mui-expanded)': {
          marginTop: '-1px'
        }
      }
    }
  }
}
