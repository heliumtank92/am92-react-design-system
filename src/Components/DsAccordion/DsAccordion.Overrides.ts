import { DsAccordionDefaultProps } from './DsAccordion.Types'

export const DsAccordionOverrides = {
  MuiAccordion: {
    defaultProps: DsAccordionDefaultProps,
    styleOverrides: {
      root: {
        backgroundColor: 'var(--ds-color-surfacePrimary)',
        boxShadow: 'var(--ds-elevation--1)',
        overflow: 'hidden',
        borderStyle: 'solid',
        borderColor: 'var(--ds-color-strokeDefault)',
        borderWidth: '1px',
        '&:first-of-type': {
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        },
        '&:not(:first-of-type):not(.Mui-expanded)': {
          marginTop: '-1px'
        },
        '&:last-of-type': {
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px'
        }
      }
    }
  }
}
