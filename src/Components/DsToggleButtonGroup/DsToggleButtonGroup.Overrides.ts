import { CSSInterpolation } from '@mui/system'
import { DsToggleButtonGroupProps } from './DsToggleButtonGroup.Types'

export const DsToggleButtonGroupOverrides = {
  MuiToggleButtonGroup: {
    variants: [
      {
        props: { 'ds-variant': 'switch' } as Partial<DsToggleButtonGroupProps>,
        style: {
          border: '1px solid var(--ds-color-strokeDefault)',
          borderRadius: '6px',
          padding: 'var(--ds-spacing-deepFreeze)',
          backgroundColor: 'var(--ds-color-surfaceBackground)',

          '> .MuiToggleButtonGroup-grouped': {
            border: 'none',
            width: '32px',
            height: '24px',

            '&:not(:first-of-type)': {
              borderRadius: '4px',
              marginLeft: 'var(--ds-spacing-zero)',
              border: 'none'
            },
            '&:first-of-type': {
              borderRadius: '4px'
            },

            '&:hover': {
              backgroundColor: 'var(--ds-color-surfaceBackground)'
            },

            '&:not(.Mui-disabled)': {
              color: 'var(--ds-color-actionSecondary)',
              '&.Mui-selected': {
                backgroundColor: 'var(--ds-color-actionSecondary)',
                color: 'var(--ds-color-typoOnSurface)',
                '&:hover': {
                  backgroundColor: 'var(--ds-color-actionSecondary)'
                }
              }
            },

            '&.Mui-disabled': {
              color: 'var(--ds-color-typoDisabled)',
              border: 'none',
              cursor: 'not-allowed',
              pointerEvents: 'all',
              '&.Mui-selected': {
                backgroundColor: 'var(--ds-color-stateDisabledSurface)',
                '&:hover': {
                  backgroundColor: 'var(--ds-color-stateDisabledSurface)'
                }
              }
            }
          }
        } as CSSInterpolation
      }
    ]
  }
}
