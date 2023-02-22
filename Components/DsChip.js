import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Chip from '@mui/material/Chip'

class DsChip extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['status', 'nudge'])
  }

  static defaultProps = {
    type: 'status'
  }

  render () {
    return (
      <Chip
        {...this.props}
        ds-variant='chip'
      />
    )
  }
}

export default DsChip
