import React, { PureComponent } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { DsBox } from '../DsBox'
import { DsTypography } from '../DsTypography'
import { DsAppBarDefaultProps, DsAppBarProps } from './DsAppBar.Types'

export class DsAppBar extends PureComponent<DsAppBarProps> {
  static defaultProps = DsAppBarDefaultProps

  render() {
    const { leftIcon, content, rightActions, ...appBarProps } = this.props
    const { color } = appBarProps
    const iconColor = color === 'primary' ? 'iconOnSurface' : undefined

    const contentJSX =
      typeof content === 'string' ? (
        <DsTypography variant="headingBoldSmall">{content}</DsTypography>
      ) : (
        content
      )

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
              {rightActions.map(rightAction =>
                React.cloneElement(rightAction, {
                  color: iconColor,
                  sx: { marginLeft: 'var(--ds-spacing-bitterCold)' }
                })
              )}
            </DsBox>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}
