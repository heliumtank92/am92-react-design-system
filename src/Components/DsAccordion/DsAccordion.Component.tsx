import React, { PureComponent } from 'react'
import Accordion from '@mui/material/Accordion'

import { DsRemixIcon } from '../DsRemixIcon'
import { DsAccordionSummary } from '../DsAccordionSummary'
import { DsAccordionDetails } from '../DsAccordionDetails'

import { DsAccordionDefaultProps, DsAccordionProps } from './DsAccordion.Types'

export class DsAccordion extends PureComponent<DsAccordionProps> {
  static defaultProps = DsAccordionDefaultProps

  getMergedProps = (): DsAccordionProps => {
    return {
      expandIcon: (
        <DsRemixIcon
          className="ri-arrow-drop-down-line"
          fontSize="bitterCold"
        />
      ),
      ...DsAccordionDefaultProps,
      ...this.props
    }
  }

  render() {
    const mergedProps = this.getMergedProps()
    const { header, summary, expandIcon, ...AccordionProps } = mergedProps
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
