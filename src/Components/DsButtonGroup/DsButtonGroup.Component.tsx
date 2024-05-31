import React, { PureComponent } from 'react'
import { DsStack } from '../DsStack'
import {
  DsButtonGroupProps,
  DsButtonGroupDefaultProps
} from './DsButtonGroup.Types'

export class DsButtonGroup extends PureComponent<DsButtonGroupProps> {
  static defaultProps = DsButtonGroupDefaultProps

  getMergedProps = (): DsButtonGroupProps => {
    return { ...DsButtonGroupDefaultProps, ...this.props }
  }

  render() {
    const mergedProps = this.getMergedProps()
    const { fullWidth, noPadding, size, sx, children, ...restProps } =
      mergedProps
    const childrenArray = children instanceof Array ? children : [children]

    return (
      <DsStack
        direction="row"
        spacing="var(--ds-spacing-frostbite)"
        sx={{
          bgcolor: 'var(--ds-colour-surfacePrimary)',
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
