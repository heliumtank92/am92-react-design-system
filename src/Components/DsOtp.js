import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DsBox from './DsBox'
import DsStack from './DsStack'
import DsInputLabel from './DsInputLabel'
import DsTextField from './DsTextField'
import DsHelperText from './DsHelperText'

const KEY_CODES = {
  BACK_SPACE: 8
}

export default class DsOtp extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    name: PropTypes.string,
    length: PropTypes.number,
    initialOtp: PropTypes.string
  }

  static defaultProps = {
    name: 'otp',
    length: 6
  }

  constructor(props) {
    super(props)
    const { initialOtp = '', length } = this.props
    this.optInputRefs = new Map()
    this.state = {
      otp: initialOtp ? [...initialOtp].slice(0, length) : []
    }
  }

  handleFocus = event => {
    const { onFocus } = this.props
    const { target } = event
    target.select()
    if (typeof onFocus === 'function') {
      onFocus(event)
    }
  }

  handleKeyDown = event => {
    const { onKeyDown } = this.props
    const { keyCode, currentTarget = {} } = event
    const { name, value } = currentTarget
    const index = parseInt(name?.split('.').pop(), 10)

    // Call #handleNavigation on back button pressed
    if (keyCode === KEY_CODES.BACK_SPACE && !value) {
      this.#handleNavigation(index, true)
    }

    if (typeof onKeyDown === 'function') {
      onKeyDown(event)
    }
  }

  handleChange = event => {
    const { onChange, onComplete, length } = this.props
    const { otp } = this.state
    const { currentTarget = {} } = event
    const { name, value = '' } = currentTarget
    const index = parseInt(name?.split('.').pop(), 10)

    // Check if valid value
    const filteredValue = value.replace(/\D/g, '').charAt(0) || ''
    otp[index] = filteredValue

    const shouldNavigate = filteredValue
    const _this = this
    this.setState({ otp: [...otp] }, () => {
      if (shouldNavigate) {
        _this.#handleNavigation(index, false)
      }

      if (typeof onChange === 'function') {
        onChange(event)
      }

      const otpString = otp.join('')
      if (
        otpString.length === length &&
        typeof onComplete === 'function'
      ) {
        onComplete(otpString)
      }
    })
  }

  #handleNavigation = (index, isBackPressed) => {
    const nextFocussedIndex = isBackPressed ? --index : ++index
    const nextFocussedInput = this.optInputRefs.get(nextFocussedIndex)
    if (nextFocussedInput) {
      nextFocussedInput.focus()
    }
  }

  handlePaste = event => {
    event.preventDefault()
    const { onPaste, onComplete, length } = this.props
    const { clipboardData = window.clipboardData, target } = event

    const pastedData = clipboardData.getData('Text')
    const filteredValue = pastedData.replace(/\D/g, '') || ''
    const otp = filteredValue.split('').slice(0, length)

    this.setState({ otp })
    target.blur()
    const focusIndex = otp.length - 1
    this.#handleNavigation(focusIndex)

    if (typeof onPaste === 'function') {
      onPaste(event)
    }

    const otpString = otp.join('')
    if (
      otpString.length === length &&
      typeof onComplete === 'function'
    ) {
      onComplete(otpString)
    }
  }

  resetOtpValues = () => {
    this.setState({ otp: [] })
  }

  renderOtpBoxes = () => {
    const { otp } = this.state
    const {
      label,
      labelSupportText,
      name,
      length,
      helperText,
      inputProps = {},
      ...restProps
    } = this.props
    const lengthArray = Array(length).fill('')

    const otpInputProps = {
      ...inputProps,
      maxLength: '1',
      style: {
        ...inputProps.style,
        textAlign: 'center'
      }
    }

    return lengthArray.map((value, index) => (
      <DsTextField
        key={index}
        {...restProps}
        type="tel"
        name={`${name}.${index}`}
        ds-variant="otp"
        inputProps={otpInputProps}
        onPaste={this.handlePaste}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        value={otp[index] || ''}
        inputRef={ref => {
          this.optInputRefs.set(index, ref)
        }}
      />
    ))
  }

  render() {
    const {
      id,
      name,
      label,
      labelSupportText,
      helperText,
      success,
      color,
      error,
      inputProps,
      disabled,
      inputLabelProps,
      formHelperTextProps,
      ...restProps
    } = this.props

    return (
      <DsBox {...restProps}>
        <DsInputLabel
          label={label}
          labelSupportText={labelSupportText}
          // error={error}
          success={success}
          htmlFor={id || name}
          disabled={disabled}
          {...inputLabelProps}
        />
        <DsStack
          direction="row"
          spacing="var(--ds-spacing-glacial)"
          style={{}}
        >
          {this.renderOtpBoxes()}
        </DsStack>
        <DsHelperText
          helperText={helperText}
          color={color}
          success={success}
          error={error}
          {...formHelperTextProps}
        />
      </DsBox>
    )
  }
}
