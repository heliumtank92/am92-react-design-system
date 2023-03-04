import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FormHelperText from '@mui/material/FormHelperText'

import DsBox from './DsBox'
import DsTypography from './DsTypography'
import DsRemixIcon from './DsRemixIcon'

export default class DsHelperText extends PureComponent {
  static propTypes = {
    helperText: PropTypes.node,
    color: PropTypes.string,
    success: PropTypes.bool,
    error: PropTypes.bool
  }

  static defaultProps = {
    helperText: ''
  }

  render () {
    const {
      helperText,
      color,
      success,
      error,
      ...formHelperTextProps
    } = this.props

    const customColor = success ? 'success' : color

    const iconClassName = (error && 'ri-error-warning-fill') ||
      (success && 'ri-checkbox-circle-fill') ||
      false

    return helperText && (
      <FormHelperText
        component='div'
        color={customColor}
        error={error}
        {...formHelperTextProps}
      >
        <DsBox
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            color: `${customColor}.main`
          }}
        >
          {iconClassName && (
            <DsRemixIcon
              className={iconClassName}
              color='inherit'
              fontSize='cool'
              sx={{
                mr: 'var(--ds-spacing-quickFreeze)',
                padding: 'var(--ds-spacing-deepFreeze)'
              }}
            />
          )}
          <DsTypography
            variant='bodyRegularSmall'
            color='inherit'
            sx={{ pl: 'var(--ds-spacing-deepFreeze)' }}
          >
            {helperText}
            &#8203;
          </DsTypography>
        </DsBox>
      </FormHelperText>
    )
  }
}
