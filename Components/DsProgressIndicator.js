import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DsBox from './DsBox'
import { CircularProgress, Typography } from '@mui/material'
import DsTypo from './DsTypo'

class DsProgressIndicator extends Component {
  static propTypes = {
    step: PropTypes.number,
    maxStep: PropTypes.number
  }

  static defaultProps = {
    step: 0,
    maxStep: 0
  }

  render () {
    const { step, maxStep } = this.props
    const squareSize = '5rem'
    const fillPercentage = Math.round((step / maxStep) * 100)
    const fillText = `${step}/${maxStep}`

    return (
      <DsBox>
        <DsBox
          display='flex'
          position='relative'
          height={squareSize} width={squareSize}
        >
          <DsBox>
            <CircularProgress
              variant='determinate'
              value={100}
              sx={{ color: 'var(--ds-color-stateDisabledSurface)' }}
              size={squareSize}
              thickness={4}
            />
            <CircularProgress
              disableShrink
              variant='determinate'
              color='secondary'
              value={fillPercentage}
              size={squareSize}
              thickness={4}
              style={{ position: 'absolute', strokeLinecap: 'round', left: -12, height: 56, top: 12 }}
            />
            <DsTypo sx={{ position: 'absolute', top: 30, right: 30 }}>
              <Typography variant='subheadingSemiboldDefault'>{fillText}</Typography>
            </DsTypo>
          </DsBox>
        </DsBox>
      </DsBox>
    )
  }
}

DsProgressIndicator.propTypes = {

}

export default DsProgressIndicator
