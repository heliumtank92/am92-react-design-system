import React, { PureComponent } from 'react'
import { DsFormControl } from '../DsFormControl'
import { DsTextField } from '../DsTextField'
import { DsTypography } from '../DsTypography'
import {
  DsTextAreaProps,
  DsTextAreaState,
  DsTextAreaDefaultState
} from './DsTextArea.Types'

export class DsTextArea extends PureComponent<
  DsTextAreaProps,
  DsTextAreaState
> {
  state = DsTextAreaDefaultState
  areRef = React.createRef()

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props
    const { target } = event
    const { value = '' } = target
    let count = value.length
    this.setState({ count })

    if (onChange && typeof onChange === 'function') {
      onChange(event)
    }
  }

  componentDidMount(): void {
    const { value = '' } = this.props
    const count = (value as string).length
    this.setState({ count })
  }

  componentDidUpdate(
    prevProps: Readonly<DsTextAreaProps>,
    prevState: Readonly<DsTextAreaState>,
    snapshot?: any
  ): void {
    const { count: currentStateCount } = this.state
    const { value } = this.props
    const count = (value as string)?.length
    if (count && currentStateCount !== count) {
      this.setState({ count })
    }
  }

  render() {
    const { maxLength, helperText, inputProps, ref, fullWidth, ...rest } =
      this.props
    const { count } = this.state

    // Provide counter if MaxLength Provided
    const hasMaxLength = !!maxLength
    const maxLengthHandlingInputStyle = hasMaxLength
      ? { mb: 'var(--ds-spacing-bittercold)' }
      : {}

    const counterStyle = {
      position: 'absolute',
      bottom: '8px',
      right: '8px',
      overflow: 'auto'
    }

    if (helperText) {
      // Adjust the helper text size
      counterStyle.bottom = 'calc(8px + 36px)'
    }
    return (
      <DsFormControl fullWidth={fullWidth}>
        <DsTextField
          maxRows={3}
          minRows={3}
          {...rest}
          fullWidth={fullWidth}
          onChange={this.handleChange}
          multiline
          inputProps={{
            ref: ref || this.areRef,
            sx: {
              minWidth: '288px',
              ...inputProps?.sx,
              ...maxLengthHandlingInputStyle
            },
            ...inputProps,
            maxLength: maxLength || ''
          }}
          helperText={helperText}
        />
        {hasMaxLength && (
          <DsTypography
            sx={counterStyle}
            variant="supportRegularFootnote"
          >{`${count}/${maxLength}`}</DsTypography>
        )}
      </DsFormControl>
    )
  }
}
