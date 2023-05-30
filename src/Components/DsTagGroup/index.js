import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DsStack from './DsStack'
import DsRemixIcon from './DsRemixIcon'

class DsTagGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    multi: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func
  }

  static defaultProps = {
    multi: false,
    onChange: (name, value) => {}
  }

  handleUnselect = handleValue => {
    const { name, value = [], onChange } = this.props
    const changedValue = value.filter(e => e !== handleValue)
    onChange(name, changedValue)
  }

  handleSelect = handleValue => {
    const { multi, name, value = [], onChange } = this.props

    let changedValue
    if (multi) {
      changedValue = Array.from(new Set([...value, handleValue]))
    } else {
      changedValue = value === handleValue ? '' : handleValue
    }

    onChange(name, changedValue)
  }

  render() {
    const { multi, children, value, name, onChange, ...stackProps } =
      this.props
    const childrenArray =
      children instanceof Array ? children : [children]

    return (
      <DsStack
        direction="row"
        spacing="var(--ds-spacing-glacial)"
        {...stackProps}
      >
        {childrenArray.map(child => {
          const { value: chipValue } = child.props
          const selected =
            (multi && value.includes(chipValue)) ||
            value === chipValue
          const onDelete =
            (multi && selected && this.handleUnselect) || undefined
          const onClick = (selected && onDelete) || this.handleSelect

          const childClone = React.cloneElement(child, {
            value: chipValue,
            selected,
            deleteIcon: (
              <DsRemixIcon className="ri-close-circle-fill" />
            ),
            onDelete,
            onClick
          })

          return childClone
        })}
      </DsStack>
    )
  }
}

export default DsTagGroup
