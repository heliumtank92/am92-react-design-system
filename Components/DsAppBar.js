import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import DsBox from './DsBox'
import DsTypo from './DsTypo'

export default class DsAppBar extends PureComponent {
  static propTypes = {
    open: PropTypes.bool,
    leftIcon: PropTypes.element,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    rightActions: PropTypes.arrayOf(PropTypes.element)
  }

  static defaultProps = {
    open: false,
    content: ''
  }

  render () {
    const { leftIcon, content, rightActions, ...appBarProps } = this.props
    const { color } = appBarProps
    const iconColor = color === 'primary' ? 'iconOnSurface' : undefined

    const contentJSX = typeof content === 'string'
      ? <DsTypo variant='headingBoldSmall'>{content}</DsTypo>
      : content

    return (
      <AppBar {...appBarProps}>
        <Toolbar>
          {leftIcon && (
            <DsBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pr: 'var(--ds-spacing-bitterCold)'
              }}
            >
              {React.cloneElement(leftIcon, { color: iconColor })}
            </DsBox>
          )}
          <DsBox
            sx={{
              display: 'inline-flex',
              justifyContent: 'start',
              alignItems: 'center',
              flexGrow: 1
            }}
          >
            {contentJSX}
          </DsBox>
          {rightActions && (
            <DsBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {rightActions.map((rightAction) =>
                React.cloneElement(rightAction, { color: iconColor, sx: { marginLeft: 'var(--ds-spacing-bitterCold)' } })
              )}
            </DsBox>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}
