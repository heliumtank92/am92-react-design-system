import React, { PureComponent } from 'react'

import Select from '@mui/material/Select'
import { DsSelectDefaultProps, DsSelectProps } from './DsSelect.Types'
import { DsFormControl } from '../DsFormControl'
import { DsInputLabel } from '../DsInputLabel'
import { DsInputBase } from '../DsInputBase'
import { DsMenuItem } from '../DsMenuItem'
import { DsTypography } from '../DsTypography'
import { DsRemixIcon, DsRemixIconProps } from '../DsRemixIcon'
import { DsHelperText } from '../DsHelperText'

export class DsSelect extends PureComponent<DsSelectProps> {
  static defaultProps = DsSelectDefaultProps
  selectRef = React.createRef<Element>()

  render() {
    const {
      id,
      name,
      placeholder,
      label,
      labelSupportText,
      color,
      helperText,
      success,
      error,
      sx,
      fullWidth,
      children,
      options,
      disabled,
      FormControlProps,
      InputLabelProps,
      FormHelperTextProps,
      ...selectProps
    } = this.props

    const customColor = success ? 'success' : color

    const valueMap = options.reduce((acc: Map<any, string>, item) => {
      acc.set(item.value, item.label)
      return acc
    }, new Map())

    return (
      <DsFormControl
        fullWidth={fullWidth}
        color={customColor}
        error={error}
        sx={sx}
        disabled={disabled}
        {...FormControlProps}
      >
        <DsInputLabel
          label={label}
          labelSupportText={labelSupportText}
          error={error}
          success={success}
          htmlFor={id || name}
          disabled={disabled}
          {...InputLabelProps}
        />
        <Select
          ref={this.selectRef}
          id={id}
          name={name}
          IconComponent={IconComponent}
          displayEmpty
          input={<DsInputBase />}
          renderValue={value => {
            if (!value || (value instanceof Array && !value.length)) {
              return (
                <DsTypography variant="bodyRegularMedium" color="text.disabled">
                  {placeholder}
                </DsTypography>
              )
            }

            if (value instanceof Array) {
              return (
                <SelectedValueArray selectedValue={value} valueMap={valueMap} />
              )
            }

            return <SelectedValue selectedValue={value} valueMap={valueMap} />
          }}
          error={error}
          disabled={disabled}
          {...selectProps}
          MenuProps={{
            anchorEl: () => this.selectRef.current!,
            ...selectProps.MenuProps
          }}
        >
          {children}
          {options.map(({ label, value }, index) => (
            <DsMenuItem value={value} key={index}>
              <span>{label}</span>
            </DsMenuItem>
          ))}
        </Select>
        <DsHelperText
          helperText={helperText}
          color={color}
          success={success}
          error={error}
          {...FormHelperTextProps}
        />
      </DsFormControl>
    )
  }
}

const IconComponent = (props: Omit<DsRemixIconProps, 'ref'>) => {
  return (
    <DsRemixIcon
      {...props}
      className={`${props.className} ri-arrow-drop-down-line`}
    />
  )
}

const SelectedValueArray = (props: SelectedValueArrayProps) => {
  const { selectedValue, valueMap } = props
  const returnValue = selectedValue
    .map(selectedVal => valueMap.get(selectedVal))
    .join(', ')
  return <>{returnValue}</>
}

const SelectedValue = (props: SelectedValueProps) => {
  const { selectedValue, valueMap } = props
  const returnValue = valueMap.get(selectedValue)
  return <>{returnValue}</>
}

interface SelectedValueArrayProps {
  selectedValue: any[]
  valueMap: Map<any, string>
}

interface SelectedValueProps {
  selectedValue: any
  valueMap: Map<any, string>
}
