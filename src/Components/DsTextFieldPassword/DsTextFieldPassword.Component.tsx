import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { DsInputAdornment } from '../DsInputAdornment'
import { DsTextField } from '../DsTextField'
import { DsButton } from '../DsButton'

import {
  DsTextFieldPasswordDefaultProps,
  DsTextFieldPasswordDefaultState,
  DsTextFieldPasswordProps,
  DsTextFieldPasswordState
} from './DsTextFieldPassword.Types'

export class DsTextFieldPassword extends Component<
  DsTextFieldPasswordProps,
  DsTextFieldPasswordState
> {
  static defaultProps = DsTextFieldPasswordDefaultProps
  state: DsTextFieldPasswordState

  constructor(props: DsTextFieldPasswordProps) {
    super(props)

    this.state = {
      ...DsTextFieldPasswordDefaultState,
      isVisible: props.isVisible
    }
  }

  handleTogglePassword = (): void =>
    this.setState({ isVisible: !this.state.isVisible })

  render() {
    const { isVisible } = this.state
    const {
      type,
      isVisible: isVisibleProp,
      endAdornment,
      disabled,
      ...restProps
    } = this.props

    const inputType = (isVisible && type) || 'password'

    const rightIcon = (
      <DsButton
        onClick={this.handleTogglePassword}
        variant="text"
        color="secondary"
        disabled={disabled}
        sx={{
          minWidth: '50px'
        }}
      >
        {isVisible ? 'HIDE' : 'SHOW'}
      </DsButton>
    )

    return (
      <DsTextField
        {...restProps}
        disabled={disabled}
        type={inputType}
        endAdornment={rightIcon}
      />
    )
  }
}
