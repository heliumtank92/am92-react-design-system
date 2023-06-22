import React, { PureComponent } from 'react'

import { DsButtonGroup } from '../DsButtonGroup'
import { DsButton } from '../DsButton'

import { PickersActionBarProps } from '@mui/x-date-pickers'

export class DefaultActionBar extends PureComponent<PickersActionBarProps> {
  render(): React.ReactNode {
    const { onAccept, onCancel } = this.props
    return (
      <DsButtonGroup
        sx={{
          gridArea: '3 / 1 / auto / 4'
        }}
        fullWidth
        size="large"
      >
        <DsButton color="secondary" onClick={onCancel}>
          {' '}
          Cancel{' '}
        </DsButton>
        <DsButton color="primary" onClick={onAccept}>
          {' '}
          Done{' '}
        </DsButton>
      </DsButtonGroup>
    )
  }
}
