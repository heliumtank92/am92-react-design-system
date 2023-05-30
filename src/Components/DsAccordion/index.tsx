import React, { PureComponent } from 'react'

import Accordion, { AccordionProps } from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

import DsRemixIcon from './DsRemixIcon'

export interface DsAccordionProps extends AccordionProps {
  header: React.ReactNode
  summary: React.ReactNode
  expandIcon?: React.ReactNode
}

export default class DsAccordion extends PureComponent<DsAccordionProps> {
  static defaultProps = {
    expandIcon: <DsRemixIcon className="ri-arrow-drop-down-line" />
  }

  render() {
    const { header, summary, expandIcon, ...accordionProps } =
      this.props
    return (
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={expandIcon}>
          {header}
        </AccordionSummary>
        <AccordionDetails>{summary}</AccordionDetails>
      </Accordion>
    )
  }
}
