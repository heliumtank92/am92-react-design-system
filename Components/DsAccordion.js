import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

import DsRemixIcon from './DsRemixIcon'

class DsAccordion extends PureComponent {
  static propTypes = {
    header: PropTypes.node,
    summary: PropTypes.node,
    expandIcon: PropTypes.element
  }

  static defaultProps = {
    expandIcon: <DsRemixIcon className='ri-arrow-drop-down-line' />
  }

  render () {
    const { header, summary, expandIcon, ...accordionProps } = this.props
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

export default DsAccordion
