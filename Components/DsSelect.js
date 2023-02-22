import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Select from '@mui/material/Select'

import DsFormControl from './DsFormControl'
import DsInputLabel from './DsInputLabel'
import DsInputBase from './DsInputBase'
import DsMenuItem from './DsMenuItem'
import DsTypo from './DsTypo'
import DsRemixIcon from './DsRemixIcon'
import DsHelperText from './DsHelperText'

const IconComponent = (props) => {
  return (
    <DsRemixIcon {...props} className={`${props.className} ri-arrow-drop-down-line`} />
  )
}

const Placeholder = ({ placeholder }) => {
  return (
    <DsTypo variant='bodyRegularMedium' color='text.disabled'>
      {placeholder}
    </DsTypo>
  )
}

const SelectedValue = ({ selectedValue, valueMap }) => {
  return Array.isArray(selectedValue)
    ? selectedValue.map((selectedVal) => valueMap[selectedVal]).join(', ')
    : valueMap[selectedValue]
}

export default class DsSelect extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    }))
  }

  static defaultProps = {
    options: []
  }

  constructor (props) {
    super(props)
    this.inputBaseRef = React.createRef()
  }

  render () {
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
      displayKey,
      disabled,
      formControlProps,
      inputLabelProps,
      formHelperTextProps,
      ...selectProps
    } = this.props

    const customColor = success ? 'success' : color

    const valueMap = options.reduce((acc, item, index) => {
      acc[item.value] = item.label
      return acc
    }, {})

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
        <Select
          ref={this.inputBaseRef}
          id={id}
          name={name}
          IconComponent={IconComponent}
          displayEmpty
          MenuProps={{
            anchorEl: () => this.inputBaseRef.current,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center'
            }
          }}
          input={<DsInputBase />}
          renderValue={(value) => (
            (value && value.length)
              ? <SelectedValue selectedValue={value} valueMap={valueMap} />
              : <Placeholder placeholder={placeholder} />
          )}
          error={error}
          disabled={disabled}
          {...selectProps}
        >
          {children}
          {options.map(({ label, value }, index) => (
            <DsMenuItem value={value} key={index}>
              <span>{label}</span>
            </DsMenuItem>
          )
          )}
        </Select>
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
