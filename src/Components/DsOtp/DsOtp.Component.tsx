import React, { CSSProperties, Component } from 'react'

import { DsBox } from '../DsBox'
import { DsStack } from '../DsStack'
import { DsInputLabel } from '../DsInputLabel'
import { DsTextField } from '../DsTextField'
import { DsHelperText } from '../DsHelperText'
import { DsOtpDefaultProps, DsOtpProps, DsOtpState } from './DsOtp.Types'

const KEY_CODES = {
  BACK_SPACE: 'Backspace'
}

export class DsOtp extends Component<DsOtpProps, DsOtpState> {
  static defaultProps = DsOtpDefaultProps
  optInputRefs = new Map()

  constructor(props: DsOtpProps) {
    super(props)
    const { initialOtp = '', length } = this.props
    this.state = {
      otp: initialOtp ? [...initialOtp].slice(0, length) : []
    }
  }

  handleFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const { onFocus } = this.props
    const { target } = event
    target.select()
    if (typeof onFocus === 'function') {
      onFocus(event)
    }
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyDown } = this.props
    const { key, currentTarget } = event
    const { name, value } = currentTarget
    const indexString = name.split('.').pop() || ''
    const index = parseInt(indexString, 10)

    // Call _handleNavigation on back button pressed
    if (key === KEY_CODES.BACK_SPACE && !value) {
      this._handleNavigation(index, true)
    }

    if (typeof onKeyDown === 'function') {
      onKeyDown(event)
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, onComplete, length } = this.props
    const { otp } = this.state
    const { target } = event
    const { name, value = '' } = target
    const indexString = name.split('.').pop() || ''
    const index = parseInt(indexString, 10)

    // Check if valid value
    const filteredValue = value.replace(/\D/g, '').charAt(0) || ''
    otp[index] = filteredValue

    const shouldNavigate = filteredValue
    const _this = this
    this.setState({ otp: [...otp] }, () => {
      if (shouldNavigate) {
        _this._handleNavigation(index, false)
      }

      if (typeof onChange === 'function') {
        onChange(event)
      }

      const otpString = otp.join('')
      if (otpString.length === length && typeof onComplete === 'function') {
        onComplete(otpString)
      }
    })
  }

  _handleNavigation = (index: number, isBackPressed?: boolean): void => {
    const nextFocussedIndex = isBackPressed ? --index : ++index
    const nextFocussedInput = this.optInputRefs.get(nextFocussedIndex)
    if (nextFocussedInput) {
      nextFocussedInput.focus()
    }
  }

  handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { onPaste, onComplete, length } = this.props
    const { clipboardData, currentTarget } = event

    const pastedData = clipboardData.getData('text')
    const filteredValue = pastedData.replace(/\D/g, '') || ''
    const otp = filteredValue.split('').slice(0, length)

    this.setState({ otp })
    currentTarget.blur()
    const focusIndex = otp.length - 1
    this._handleNavigation(focusIndex)

    if (typeof onPaste === 'function') {
      onPaste(event)
    }

    const otpString = otp.join('')
    if (otpString.length === length && typeof onComplete === 'function') {
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
      HelperTextProps,
      BoxProps,
      InputLabelProps,
      ...restProps
    } = this.props
    const lengthArray = Array(length).fill('')

    const otpInputProps = {
      ...inputProps,
      maxLength: '1',
      style: {
        ...inputProps.style,
        textAlign: 'center'
      } as CSSProperties
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
      InputLabelProps,
      HelperTextProps,
      BoxProps
    } = this.props

    return (
      <DsBox {...BoxProps}>
        <DsInputLabel
          label={label}
          labelSupportText={labelSupportText}
          // error={error}
          success={success}
          htmlFor={id || name}
          disabled={disabled}
          {...InputLabelProps}
        />
        <DsStack direction="row" spacing="var(--ds-spacing-glacial)" style={{}}>
          {this.renderOtpBoxes()}
        </DsStack>
        <DsHelperText
          helperText={helperText}
          color={color}
          success={success}
          error={error}
          {...HelperTextProps}
        />
      </DsBox>
    )
  }
}
