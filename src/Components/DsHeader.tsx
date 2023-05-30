import React, { PureComponent } from 'react'

import DsBox, { DsBoxProps } from './DsBox'
import DsStack from './DsStack'
import DsImage from './DsImage'

export interface DsHeaderProps extends DsBoxProps {
  logoUrl?: string
  logo?: React.ReactElement
  children?: React.ReactElement
  HeaderProps?: any
  BoxProps?: any
  StackProps?: any
}

export const DsHeaderDefaultProps: DsHeaderProps = {
  BoxProps: { sx: {} },
  StackProps: { sx: {} }
}

export default class DsHeader extends PureComponent<DsHeaderProps> {
  static defaultProps = DsHeaderDefaultProps

  render() {
    const {
      logoUrl,
      logo,
      children,
      BoxProps,
      StackProps,
      ...HeaderProps
    } = this.props

    return (
      <DsBox
        {...HeaderProps}
        sx={{
          height: {
            xs: 'var(--ds-rules-headerMobileHeight)',
            lg: 'var(--ds-rules-headerDesktopHeight)'
          },
          backgroundColor: 'var(--ds-color-surfacePrimary)',
          display: 'flex',
          boxShadow: 'var(--ds-elevation-3)',
          position: 'relative',
          overflow: 'hidden',
          ...HeaderProps.sx
        }}
      >
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
          <DsStack {...StackProps}>{children}</DsStack>
        </DsBox>
        {logoUrl && (
          <DsImage
            src={logoUrl}
            style={{ height: '100%' }}
            alt="logo"
          />
        )}
        {logo && logo}
      </DsBox>
    )
  }
}
