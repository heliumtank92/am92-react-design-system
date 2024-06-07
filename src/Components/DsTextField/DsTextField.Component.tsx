import React, { PureComponent } from 'react'
import { DsTextFieldProps } from './DsTextField.Types'
import { DsFormControl } from '../DsFormControl'
import { DsInputLabel } from '../DsInputLabel'
import { DsInputBase } from '../DsInputBase'
import { DsHelperText } from '../DsHelperText'

export class DsTextField extends PureComponent<DsTextFieldProps> {
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
      ref,
      inputRef,
      disabled,
      required,
      FormControlProps,
      InputLabelProps,
      HelperTextProps,
      ...inputBaseProps
    } = this.props

    const customColor = success ? 'success' : color

    return (
      <DsFormControl
        fullWidth={fullWidth}
        color={customColor}
        error={error}
        sx={sx}
        disabled={disabled}
        required={required}
        {...FormControlProps}
      >
        <DsInputLabel
          label={label}
          labelSupportText={labelSupportText}
          error={error}
          success={success}
          htmlFor={id || name}
          disabled={disabled}
          required={required}
          {...InputLabelProps}
        />
        <DsInputBase
          fullWidth={fullWidth}
          color={customColor}
          error={error}
          id={id || name}
          name={name}
          inputRef={ref || inputRef}
          disabled={disabled}
          required={required}
          {...inputBaseProps}
        />
        <DsHelperText
          helperText={helperText}
          color={color}
          success={success}
          error={error}
          {...HelperTextProps}
        />
      </DsFormControl>
    )
  }
}
