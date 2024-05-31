import React, { PureComponent } from 'react'
import Accordion from '@mui/material/Accordion'

import { DsRemixIcon } from '../DsRemixIcon'
import { DsAccordionSummary } from '../DsAccordionSummary'
import { DsAccordionDetails } from '../DsAccordionDetails'

import { DsAccordionDefaultProps, DsAccordionProps } from './DsAccordion.Types'

export class DsAccordion extends PureComponent<DsAccordionProps> {
  render() {
    const {
      header,
      HeaderProps,
      summary,
      SummaryProps,
      expandIcon,
      ...AccordionProps
    } = this.props
    return (
      <Accordion {...AccordionProps}>
        <DsAccordionSummary expandIcon={expandIcon} {...HeaderProps}>
          {header}
        </DsAccordionSummary>
        {summary && (
          <DsAccordionDetails {...SummaryProps}>{summary}</DsAccordionDetails>
        )}
      </Accordion>
    )
  }
}
