import { AccordionProps } from '@mui/material'

export interface DsAccordionProps extends Omit<AccordionProps, 'children'> {
  header: React.ReactNode
  summary: React.ReactNode
  expandIcon?: React.ReactNode
}
