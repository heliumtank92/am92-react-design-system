import React, { Component } from 'react'
import { DsAutocomplete } from '../DsAutocomplete'
import { DsSearchbarDefaultProps, DsSearchbarProps } from './DsSearchbar.Types'
import { DsPaper, DsPaperProps } from '../DsPaper'
import { DsRemixIcon } from '../DsRemixIcon'
import { DsInputBase } from '../DsInputBase'

import { AutocompleteRenderInputParams } from '@mui/material'
import { DsInputAdornment } from '../DsInputAdornment'

export class DsSearchbar extends Component<
  DsSearchbarProps<false, false, false, false>
> {
  static defaultProps = DsSearchbarDefaultProps

  handleChange = (event: any, newValue: any): void => {
    const { name, onChange } = this.props
    onChange(name, newValue)
  }

  renderStartAdornment = () => {
    const { startAdornmentProps } = this.props

    return (
      <DsInputAdornment {...startAdornmentProps} position="start">
        <DsRemixIcon
          className="ri-search-line"
          color="iconDisabled"
          fontSize="cool"
        />
      </DsInputAdornment>
    )
  }

  render() {
    const { placeholder, startAdornmentProps, ...restProps } = this.props
    return (
      <DsAutocomplete
        fullWidth
        autoHighlight
        PaperComponent={PaperComponent}
        popupIcon={false}
        clearIcon={<DsRemixIcon className="ri-close-line" />}
        {...restProps}
        onChange={this.handleChange}
        renderInput={(params: AutocompleteRenderInputParams) => {
          const { InputLabelProps, InputProps, ...restParams } = params
          return (
            <DsInputBase
              {...restParams}
              {...InputProps}
              ds-variant="search"
              placeholder={placeholder}
              startAdornment={this.renderStartAdornment()}
            />
          )
        }}
      />
    )
  }
}

function PaperComponent(props: DsPaperProps) {
  return (
    <DsPaper
      {...props}
      sx={{
        mx: 'var(--ds-spacing-glacial)',
        ...props?.sx
      }}
    />
  )
}
