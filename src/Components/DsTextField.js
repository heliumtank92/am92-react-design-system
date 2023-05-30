import React, { PureComponent } from 'react'

import DsFormControl from './DsFormControl'
import DsInputLabel from './DsInputLabel'
import DsInputBase from './DsInputBase'
import DsHelperText from './DsHelperText'

export default class DsTextField extends PureComponent {
  static defaultProps = {
    autoComplete: 'off'
  }

  render() {
    const {
      id,
      name,
      label,
      labelSupportText,
      color,
      helperText,
      success,
      error,
      sx,
      fullWidth,
      inputProps,
      inputRef,
      disabled,
      formControlProps,
      inputLabelProps,
      formHelperTextProps,
      ...textFieldProps
    } = this.props

    const customColor = success ? 'success' : color

    return (
      <DsFormControl
        fullWidth={fullWidth}
        color={customColor}
        error={error}
        sx={sx}
        disabled={disabled}
        {...formControlProps}
      >
        <DsInputLabel
          label={label}
          labelSupportText={labelSupportText}
          error={error}
          success={success}
          htmlFor={id || name}
          disabled={disabled}
          {...inputLabelProps}
        />
        <DsInputBase
          fullWidth={fullWidth}
          color={customColor}
          error={error}
          id={id || name}
          name={name}
          inputProps={inputProps}
          inputRef={inputRef}
          disabled={disabled}
          {...textFieldProps}
        />
        <DsHelperText
          helperText={helperText}
          color={color}
          success={success}
          error={error}
          {...formHelperTextProps}
        />
      </DsFormControl>
    )
  }
}
