import React, { PureComponent } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { DsBox } from '../DsBox'
import { DsTypography } from '../DsTypography'
import { DsStack } from '../DsStack'

import { DsAppBarDefaultProps, DsAppBarProps } from './DsAppBar.Types'

export class DsAppBar extends PureComponent<DsAppBarProps> {
  static defaultProps = DsAppBarDefaultProps

  render() {
    const { navigation, appBarTitle, actions, ...appBarProps } = this.props

    const contentJSX =
      typeof appBarTitle === 'string' ? (
        <DsTypography variant="headingBoldSmall">{appBarTitle}</DsTypography>
      ) : (
        appBarTitle
      )

    return (
      <AppBar {...appBarProps}>
        <Toolbar>
          {navigation && (
            <DsBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pr: 'var(--ds-spacing-bitterCold)'
              }}
            >
              {navigation}
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
          {actions && (
            <DsStack
              direction="row"
              spacing="var(--ds-spacing-bitterCold)"
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                ml: 'var(--ds-spacing-bitterCold)'
              }}
            >
              {actions}
            </DsStack>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}
