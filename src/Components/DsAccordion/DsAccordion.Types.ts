import { AccordionProps } from '@mui/material'
import { DsAccordionSummaryProps } from '../DsAccordionSummary'
import { DsAccordionDetailsProps } from '../DsAccordionDetails'
import { DsRemixIcon } from '../DsRemixIcon'

export interface DsAccordionProps extends Omit<AccordionProps, 'children'> {
  header: string | React.ReactElement
  HeaderProps?: DsAccordionSummaryProps
  summary: string | React.ReactElement
  SummaryProps?: DsAccordionDetailsProps
  expandIcon?: React.ReactElement
}

export const DsAccordionDefaultProps: DsAccordionProps = {
  header: '',
  summary: ''
}
