import { DsTooltipDefaultProps } from './DsTooltip.Types'
export const DsTooltipOverrides = {
  MuiTooltip: {
    defaultProps: DsTooltipDefaultProps,
    styleOverrides: {
      popper: {
        '&[data-popper-placement*="bottom"]': {
          '.MuiTooltip-arrow': {
            // Since we require 14px for adjustment
            marginTop:
              'calc((var(--ds-spacing-frostbite) + var(--ds-spacing-deepFreeze)) * -1)',
            width: '24px',
            height: '15px'
          }
        },
        '&[data-popper-placement*="top"]': {
          '.MuiTooltip-arrow': {
            // Since we require 14px for adjustment
            marginBottom:
              'calc((var(--ds-spacing-frostbite) + var(--ds-spacing-deepFreeze)) * -1)',
            width: '24px',
            height: '15px'
          }
        },
        '&[data-popper-placement*="left"]': {
          '.MuiTooltip-arrow': {
            // Since we require 14px for adjustment
            marginRight:
              'calc((var(--ds-spacing-frostbite) + var(--ds-spacing-deepFreeze)) * -1)',
            width: '15px',
            height: '24px'
          }
        },
        '&[data-popper-placement*="right"]': {
          '.MuiTooltip-arrow': {
            // Since we require 14px for adjustment
            marginLeft:
              'calc((var(--ds-spacing-frostbite) + var(--ds-spacing-deepFreeze)) * -1)',
            width: '15px',
            height: '24px'
          }
        }
      },
      tooltip: {
        boxShadow: 'var(--ds-elevation-0)',
        backgroundColor: 'var(--ds-colour-surfaceTertiary)',
        borderWidth: '0.5px',
        borderStyle: 'solid',
        borderColor: 'var(--ds-colour-strokeDefault)',
        color: 'var(--ds-colour-typoOnSurfaceDynamic)',
        padding: 'var(--ds-spacing-frostbite)',
        borderRadius: 'var(--ds-radius-glacial)'
      },
      arrow: {
        color: 'var(--ds-colour-surfaceTertiary)'
      }
    }
  }
}
