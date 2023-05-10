import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DsInputAdornment from './DsInputAdornment'
import DsRemixIcon from './DsRemixIcon'
import DsIconButton from './DsIconButton'
import DsTextField from './DsTextField'

export default class DsTextFieldPassword extends Component {
  static propTypes = {
    visible: PropTypes.bool
  }

  static defaultProps = {
    visible: false
  }

  constructor (props) {
    super(props)

    this.state = {
      passwordVisible: props.visible
    }
  }

  componentDidUpdate (nextProps = {}, nextState = {}) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({ passwordVisible: nextProps.visible })
    }
  }

  handleTogglePassword = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible })
  }

  render () {
    const { passwordVisible } = this.state
    const { type, endAdornment, ...restProps } = this.props

    const rightIcon = (
      <DsInputAdornment position='end'>
        <DsIconButton
          onClick={this.handleTogglePassword}
        >
          <DsRemixIcon
            className={passwordVisible ? 'ri-eye-line' : 'ri-eye-off-line'}
          />
        </DsIconButton>
      </DsInputAdornment>
    )

    return (
      <DsTextField
        {...restProps}
        type={
          passwordVisible ? type : 'password'
        }
        endAdornment={rightIcon}
      />
    )
  }
}
