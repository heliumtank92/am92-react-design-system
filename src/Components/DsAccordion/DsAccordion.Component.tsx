import React, { PureComponent } from 'react'
import Accordion from '@mui/material/Accordion'

import { DsRemixIcon } from '../DsRemixIcon'
import { DsAccordionSummary } from '../DsAccordionSummary'
import { DsAccordionDetails } from '../DsAccordionDetails'

import { DsAccordionProps } from './DsAccordion.Types'

export class DsAccordion extends PureComponent<DsAccordionProps> {
  static defaultProps = {
    expandIcon: <DsRemixIcon className="ri-arrow-drop-down-line" />
  }

  render() {
    const { header, summary, expandIcon, ...AccordionProps } = this.props
    return (
      <Accordion {...AccordionProps}>
        <DsAccordionSummary expandIcon={expandIcon}>
          {header}
        </DsAccordionSummary>
        {summary && <DsAccordionDetails>{summary}</DsAccordionDetails>}
      </Accordion>
    )
  }
}
