import { AccordionProps } from '@mui/material'

export interface DsAccordionProps extends Omit<AccordionProps, 'children'> {
  header: string | React.ReactElement
  summary: string | React.ReactElement
  expandIcon?: React.ReactElement
}

export const DsAccordionDefaultProps: DsAccordionProps = {
  header: '',
  summary: '',
  TransitionProps: {
    unmountOnExit: true
  }
}
