import { CSSInterpolation } from '@mui/system'
import { DsToggleButtonGroupProps } from './DsToggleButtonGroup.Types'

export const DsToggleButtonGroupOverrides = {
  MuiToggleButtonGroup: {
    variants: [
      {
        props: { 'ds-variant': 'switch' } as Partial<DsToggleButtonGroupProps>,
        style: {
          border: '1px solid var(--ds-colour-strokeDefault)',
          borderRadius: 'var(--ds-radius-glacial)',
          padding: 'var(--ds-spacing-deepFreeze)',
          backgroundColor: 'var(--ds-colour-surfaceBackground)',

          '> .MuiToggleButtonGroup-grouped': {
            border: 'none',
            width: '32px',
            height: '24px',

            '&:not(:first-of-type)': {
              borderRadius: 'var(--ds-radius-quickFreeze)',
              marginLeft: 'var(--ds-spacing-zero)',
              border: 'none'
            },
            '&:first-of-type': {
              borderRadius: 'var(--ds-radius-quickFreeze)'
            },

            '&:hover': {
              backgroundColor: 'var(--ds-colour-surfaceBackground)'
            },

            '&:not(.Mui-disabled)': {
              color: 'var(--ds-colour-actionSecondary)',
              '&.Mui-selected': {
                backgroundColor: 'var(--ds-colour-actionSecondary)',
                color: 'var(--ds-colour-typoOnSurface)',
                '&:hover': {
                  backgroundColor: 'var(--ds-colour-actionSecondary)'
                }
              }
            },

            '&.Mui-disabled': {
              color: 'var(--ds-colour-typoDisabled)',
              border: 'none',
              cursor: 'not-allowed',
              pointerEvents: 'all',
              '&.Mui-selected': {
                backgroundColor: 'var(--ds-colour-stateDisabledSurface)',
                '&:hover': {
                  backgroundColor: 'var(--ds-colour-stateDisabledSurface)'
                }
              }
            }
          }
        } as CSSInterpolation
      }
    ]
  }
}
