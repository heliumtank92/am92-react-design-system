import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DsBox from './DsBox'
import DsStack from './DsStack'
import DsImage from 'src/DesignSystem/Components/DsImage'

export default class DsHeader extends Component {
  static propTypes = {
    logoUrl: PropTypes.string.isRequired,
    BoxProps: PropTypes.object,
    StackProps: PropTypes.object
  }

  static defaultProps = {
    BoxProps: {},
    StackProps: {}
  }

  render () {
    const { logoUrl, children, BoxProps, StackProps, ...HeaderProps } = this.props

    return (
      <DsBox
        {...HeaderProps}
        sx={{
          height: {
            xs: 'var(--ds-rules-headerMobileHeight)',
            lg: 'var(--ds-rules-headerDesktopHeight)'
          },
          backgroundColor: 'var(--ds-color-surfacePrimary)',
          boxShadow: 'var(--ds-elevation-3)',
          position: 'relative',
          overflow: 'hidden',
          ...HeaderProps.sx
        }}
      >
        <DsImage src={logoUrl} style={{ height: '100%' }} alt='logo' />
        <DsBox
          {...BoxProps}
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            pr: {
              xs: 'var(--ds-spacing-cool)',
              md: 'var(--ds-spacing-mild)'
            },
            pb: {
              xs: 'var(--ds-spacing-glacial)',
              md: 'var(--ds-spacing-frostbite)'
            },
            ...BoxProps.sx
          }}
        >
          <DsStack {...StackProps}>
            {children}
          </DsStack>
        </DsBox>
      </DsBox>
    )
  }
}
