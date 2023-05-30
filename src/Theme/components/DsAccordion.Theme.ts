import { AccordionProps } from '@mui/material'

const AccordionDefaultProps: AccordionProps = {
  children: false,
  TransitionProps: {
    unmountOnExit: true
  }
}

const DsAccordionTheme = {
  MuiAccordion: {
    defaultProps: AccordionDefaultProps,
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
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-bitterCold)',
        '&.Mui-expanded': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--ds-color-strokeDefault)',
          minHeight: '0px'
        }
      },
      content: {
        margin: 'var(--ds-spacing-zero)',
        width: 'calc(100% - 40px)',
        marginRight: 'var(--ds-spacing-bitterCold)',
        '&.Mui-expanded': {
          margin: 'var(--ds-spacing-zero)',
          marginRight: 'var(--ds-spacing-bitterCold)'
        }
      }
    }
  }
}

export default DsAccordionTheme
