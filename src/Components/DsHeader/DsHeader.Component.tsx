import React, { PureComponent } from 'react'

import { DsBox } from '../DsBox'
import { DsStack } from '../DsStack'
import { DsImage } from '../DsImage'
import { DsHeaderProps, DsHeaderDefaultProps } from './DsHeader.Types'

export class DsHeader extends PureComponent<DsHeaderProps> {
  static defaultProps = DsHeaderDefaultProps

  render() {
    const { logoUrl, logo, children, BoxProps, StackProps, ...HeaderProps } =
      this.props

    return (
      <DsBox
        {...HeaderProps}
        sx={{
          height: {
            xs: 'var(--ds-rules-headerMobileHeight)',
            lg: 'var(--ds-rules-headerDesktopHeight)'
          },
          backgroundColor: 'var(--ds-colour-surfacePrimary)',
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
            srcSet={[{ src: logoUrl, alt: 'logo' }]}
            WrapperProps={{ height: '100%' }}
            style={{ height: '100%' }}
          />
        )}
        {logo && logo}
      </DsBox>
    )
  }
}
