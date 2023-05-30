import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete } from '@mui/material'
import {
  DsCircularProgress,
  DsIconButton,
  DsInputBase,
  DsPaper,
  DsRemixIcon
} from '.'

function PaperComponent(props) {
  const { sx } = props

  return (
    <DsPaper
      {...props}
      sx={{
        mx: 'var(--ds-spacing-glacial)',
        ...sx
      }}
    />
  )
}
export class DsSearchbar extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    startAdornmentProps: PropTypes.object
  }

  static defaultProps = {
    placeholder: 'Search here',
    options: [],
    startAdornmentProps: {}
  }

  handleChange = (event, newValue) => {
    const { name, onChange } = this.props
    onChange(name, newValue)
  }

  renderStartAdornment = () => {
    const { startAdornmentProps } = this.props

    return (
      <DsRemixIcon
        className="ri-search-line"
        {...startAdornmentProps}
        sx={{
          color: 'var(--ds-color-iconDisabled)',
          fontSize: 'var(--ds-spacing-cool)',
          mr: 'var(--ds-spacing-frostbite)',
          ...startAdornmentProps.sx
        }}
      />
    )
  }

  render() {
    const { placeholder, startAdornmentProps, ...restProps } =
      this.props
    return (
      <Autocomplete
        fullWidth
        autoHighlight
        PaperComponent={PaperComponent}
        popupIcon={false}
        clearIcon={<DsRemixIcon className="ri-close-line" />}
        {...restProps}
        onChange={this.handleChange}
        renderInput={params => {
          const { InputLabelProps, InputProps, ...restParams } =
            params
          return (
            <DsInputBase
              ref={InputProps.ref}
              ds-variant="search"
              fullWidth
              placeholder={placeholder}
              {...restParams}
              startAdornment={this.renderStartAdornment()}
              endAdornment={InputProps.endAdornment}
            />
          )
        }}
      />
    )
  }
}

export default DsSearchbar
