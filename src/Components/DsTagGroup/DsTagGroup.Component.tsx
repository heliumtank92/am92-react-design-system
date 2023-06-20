import React, { PureComponent } from 'react'
import { DsStack } from '../DsStack'
import { DsTagGroupDefaultProps, DsTagGroupProps } from './DsTagGroup.Types'
import { DsRemixIcon } from '../DsRemixIcon'

export class DsTagGroup extends PureComponent<DsTagGroupProps> {
  static defaultProps = DsTagGroupDefaultProps

  handleUnselect = (handleValue: any) => {
    const { name, value = [], onChange } = this.props
    const changedValue = value.filter((e: any) => e !== handleValue)
    onChange(name, changedValue)
  }

  handleSelect = (handleValue: any) => {
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
    const { multi, children, value, name, onChange, ...restStackProps } =
      this.props

    const childrenArray = children instanceof Array ? children : [children]

    return (
      <DsStack
        direction={'row'}
        spacing={'var(--ds-spacing-glacial)'}
        {...restStackProps}
      >
        {childrenArray.map(child => {
          const { value: chipValue } = child.props

          const selected =
            (multi && value.includes(chipValue)) || value === chipValue

          const onDelete =
            (multi && selected && this.handleUnselect) || undefined

          const onClick = (selected && onDelete) || this.handleSelect

          const childClone = React.cloneElement(child, {
            value: chipValue,
            selected,
            deleteIcon: <DsRemixIcon className="ri-close-circle-fill" />,
            onDelete,
            onClick
          })

          return childClone
        })}
      </DsStack>
    )
  }
}
