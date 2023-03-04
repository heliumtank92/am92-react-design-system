import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'

import DsInputBase from './DsInputBase'
import DsPaper from './DsPaper'
import DsRemixIcon from './DsRemixIcon'
import DsIconButton from './DsIconButton'

function PaperComponent (props) {
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

export default class DsSearchbar extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onMicClick: PropTypes.func
  }

  static defaultProps = {
    placeholder: 'Search here',
    options: []
  }

  handleClearClick = () => {
    const { name, onChange, defaultValue } = this.props
    onChange(name, defaultValue)
  }

  handleChange = (event, newValue) => {
    const { name, onChange } = this.props
    onChange(name, newValue)
  }

  render () {
    const { placeholder, onChange, onMicClick, ...restProps } = this.props

    return (
      <Autocomplete
        fullWidth
        autoHighlight
        PaperComponent={PaperComponent}
        {...restProps}
        onChange={this.handleChange}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...restParams } = params
          return (
            <DsInputBase
              ref={params.InputProps.ref}
              ds-variant='search'
              fullWidth
              placeholder={placeholder}
              {...restParams}
              startAdornment={
                <DsRemixIcon
                  className='ri-search-line'
                  sx={{
                    color: 'var(--ds-color-iconDisabled)',
                    fontSize: 'var(--ds-spacing-cool)',
                    mr: 'var(--ds-spacing-frostbite)'
                  }}
                />
              }
              endAdornment={
                <>
                  {params.inputProps.value && (
                    <>
                      {restProps?.loading
                        ? <CircularProgress color='secondary' size={20} />
                        : (
                          <DsIconButton
                            onClick={this.handleClearClick}
                            sx={{
                              ml: 'var(--ds-spacing-frostbite)'
                            }}
                          >
                            <DsRemixIcon className='ri-close-line' />
                          </DsIconButton>)}
                    </>
                  )}
                  {
                    onMicClick && (
                      <DsIconButton
                        onClick={onMicClick}
                        sx={{
                          ml: 'var(--ds-spacing-frostbite)'
                        }}
                      >
                        <DsRemixIcon className='ri-mic-fill' />
                      </DsIconButton>
                    )
                  }
                </>
              }
            />
          )
        }}
      />
    )
  }
}
