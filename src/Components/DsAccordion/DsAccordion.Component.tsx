import React, { PureComponent } from 'react'
import Accordion from '@mui/material/Accordion'

import { DsAccordionSummary } from '../DsAccordionSummary'
import { DsAccordionDetails } from '../DsAccordionDetails'

import { DsAccordionDefaultProps, DsAccordionProps } from './DsAccordion.Types'

export class DsAccordion extends PureComponent<DsAccordionProps> {
  // Since we have custome props defined merging of default props is necessary
  getMergedProps = (): DsAccordionProps => {
    return { ...DsAccordionDefaultProps, ...this.props }
  }

  render() {
    const mergedProps = this.getMergedProps()
    const {
      header,
      HeaderProps,
      summary,
      SummaryProps,
      expandIcon,
      ...AccordionProps
    } = mergedProps
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
