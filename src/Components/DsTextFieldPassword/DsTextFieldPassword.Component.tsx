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

  getMergedProps = (): DsTextFieldPasswordProps => {
    return { ...DsTextFieldPasswordDefaultProps, ...this.props }
  }

  handleTogglePassword = (): void =>
    this.setState({ isVisible: !this.state.isVisible })

  render() {
    const { isVisible } = this.state
    const mergedProps = this.getMergedProps()
    const {
      type,
      isVisible: isVisibleProp,
      disabled,
      toggleNode,
      ...restProps
    } = mergedProps

    const inputType = (isVisible && type) || 'password'

    const endAdornment = isVisible
      ? React.cloneElement(toggleNode?.toHide || <></>, { disabled })
      : React.cloneElement(toggleNode?.toShow || <></>, { disabled })

    return (
      <DsTextField
        {...restProps}
        disabled={disabled}
        type={inputType}
        endAdornment={
          <DsInputAdornment
            position="end"
            onClick={(!disabled && this.handleTogglePassword) || undefined}
          >
            {endAdornment}
          </DsInputAdornment>
        }
      />
    )
  }
}
