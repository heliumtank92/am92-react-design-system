import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'

import Alert from '@mui/material/Alert'
import DsRemixIcon from './DsRemixIcon'

const CloseIcon = props => (
  <DsRemixIcon {...props} fontSize="mild" className="ri-close-line" />
)

class DsToast extends PureComponent {
  render() {
    return (
      <Alert
        ref={this.props.forwardedRef}
        {...this.props}
        components={{
          ...this.props?.components,
          CloseIcon
        }}
      />
    )
  }
}

export default DsToast
