import React, { PureComponent } from 'react'

import { PickersActionBarProps } from '@mui/x-date-pickers'
import { DsButton } from '../DsButton'
import { DsButtonGroup } from '../DsButtonGroup'

export class DefaultActionBar extends PureComponent<
  PickersActionBarProps & { ownerState?: any }
> {
  render(): React.ReactNode {
    const { onAccept, onClear, ownerState, actions } = this.props
    const { value } = ownerState || {}

    if (!actions?.length) {
      return
    }

    const isClearVisible = actions.includes('clear')
    const isConfirmVisible = actions.includes('accept')

    return (
      <DsButtonGroup
        sx={{
          gridArea: '3 / 1 / auto / 4',
          backgroundColor: 'var(--ds-colour-surfaceSecondary)',
          px: 'var(--ds-spacing-mild)',
          borderTop: '1px solid var(--ds-colour-strokeDefault)',
          borderRadius: '0px 0px 16px 16px '
        }}
        justifyContent="space-between"
        size="medium"
      >
        {isClearVisible && (
          <DsButton
            sx={{
              py: 'var(--ds-spacing-glacial)',
              px: 'var(--ds-spacing-pleasant)'
            }}
            variant="text"
            size="medium"
            color="secondary"
            onClick={onClear}
            disabled={!value}
          >
            Clear
          </DsButton>
        )}
        {isConfirmVisible && (
          <DsButton
            sx={{
              py: 'var(--ds-spacing-glacial)',
              px: 'var(--ds-spacing-pleasant)'
            }}
            variant="text"
            size="medium"
            color="secondary"
            onClick={onAccept}
            disabled={!value}
          >
            Confrim
          </DsButton>
        )}
      </DsButtonGroup>
    )
  }
}
