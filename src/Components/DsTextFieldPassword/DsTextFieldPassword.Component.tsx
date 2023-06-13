import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DsInputAdornment } from '../DsInputAdornment'
import { DsRemixIcon } from '../DsRemixIcon'
import { DsIconButton } from '../DsIconButton'
import { DsTextField } from '../DsTextField'
import {
  DsTextFieldPasswordDefaultProps,
  DsTextFieldPasswordDefaultState,
  DsTextFieldPasswordProps,
  DsTextFieldPasswordState
} from './DsTextFieldPassword.Types'

export default class DsTextFieldPassword extends Component<
  DsTextFieldPasswordProps,
  DsTextFieldPasswordState
> {
  static defaultProps = DsTextFieldPasswordDefaultProps
  state: DsTextFieldPasswordState

  constructor(props: DsTextFieldPasswordProps) {
    super(props)

    this.state = {
      ...DsTextFieldPasswordDefaultState,
      isVisible: props.visible
    }
  }

  handleTogglePassword = (): void =>
    this.setState({ isVisible: !this.state.isVisible })

  render() {
    const { isVisible } = this.state
    const { type, endAdornment, ...restProps } = this.props

    const inputType = (isVisible && 'password') || type

    const rightIcon = (
      <DsInputAdornment position="end">
        <DsIconButton onClick={this.handleTogglePassword}>
          <DsRemixIcon
            className={isVisible ? 'ri-eye-line' : 'ri-eye-off-line'}
          />
        </DsIconButton>
      </DsInputAdornment>
    )

    return (
      <DsTextField {...restProps} type={inputType} endAdornment={rightIcon} />
    )
  }
}
