import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DsStack from './DsStack'

export default class DsButtonGroup extends PureComponent {
  static propTypes = {
    fullWidth: PropTypes.bool,
    noPadding: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  }

  static defaultProps = {
    fullWidth: false,
    noPadding: false,
    size: 'medium'
  }

  render () {
    const {
      fullWidth,
      noPadding,
      size,
      sx,
      children,
      ...restProps
    } = this.props

    const childrenArray = children instanceof Array
      ? children
      : [children]

    return (
      <DsStack
        direction='row'
        spacing='var(--ds-spacing-frostbite)'
        sx={{
          bgcolor: 'var(--ds-color-surfacePrimary)',
          p: noPadding
            ? 'var(--ds-spacing-zero)'
            : 'var(--ds-spacing-bitterCold)',
          ...sx
        }}
        {...restProps}
      >
        {childrenArray.map((child, key) => (
          child && React.cloneElement(child, { key, size, fullWidth })
        ))}
      </DsStack>
    )
  }
}
