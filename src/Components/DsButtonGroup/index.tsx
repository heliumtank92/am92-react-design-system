import React, { PureComponent } from 'react'
import { DsStack, DsStackProps } from '../DsStack'

export interface DsButtonGroupProps extends DsStackProps {
  fullWidth?: boolean
  noPadding?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const DsDsButtonGroupDefaultProps: DsButtonGroupProps = {
  fullWidth: false,
  noPadding: false,
  size: 'medium'
}

export default class DsButtonGroup extends PureComponent<DsButtonGroupProps> {
  static defaultProps = DsDsButtonGroupDefaultProps

  render() {
    const { fullWidth, noPadding, size, sx, children, ...restProps } =
      this.props

    const childrenArray = children instanceof Array ? children : [children]

    return (
      <DsStack
        direction="row"
        spacing="var(--ds-spacing-frostbite)"
        sx={{
          bgcolor: 'var(--ds-color-surfacePrimary)',
          p: noPadding
            ? 'var(--ds-spacing-zero)'
            : 'var(--ds-spacing-bitterCold)',
          ...sx
        }}
        {...restProps}
      >
        {childrenArray.map(
          (child, key) =>
            child && React.cloneElement(child, { key, size, fullWidth })
        )}
      </DsStack>
    )
  }
}
