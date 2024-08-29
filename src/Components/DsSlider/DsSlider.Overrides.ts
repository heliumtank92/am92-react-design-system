import { DsSlideDefaultProps } from '../DsSlide/DsSlide.Types'
import { DsSliderProps } from './DsSlider.Types'

export const DsSliderOverrides = {
  MuiSlider: {
    defaultProps: DsSlideDefaultProps,
    variants: [
      {
        props: { 'ds-mode': 'true' } as Partial<DsSliderProps>,
        style: {
          '&:not(.Mui-disabled, :has(.MuiSlider-thumb:hover), :has(.Mui-focusVisible))':
            {
              '> .MuiSlider-thumb, > .MuiSlider-mark, > .MuiSlider-track': {
                backgroundColor: 'var(--ds-colour-iconDefault)'
              },
              '> .MuiSlider-markActive': {
                backgroundColor: 'var(--ds-colour-iconOnSurface)'
              }
            }
        }
      }
    ],
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          '> .MuiSlider-markLabel': {
            color: 'var(--ds-colour-typoDisabled)'
          }
        }
      },
      track: {
        border: 'none'
      },
      rail: {
        backgroundColor: 'var(--ds-colour-strokeDefault)'
      },
      mark: {
        transform: 'translate(1px, -50%)',
        zIndex: 1,
        '&:nth-last-child(3)': {
          transform: 'translate(-3px, -50%)'
        },
        '&:nth-last-child(2)': {
          transform: 'translate(-3px, -50%)'
        }
      },
      markLabel: {
        top: '-18px',
        fontWeight: 'var(--ds-typo-supportRegularInfo-fontWeight)',
        fontSize: 'var(--ds-typo-supportRegularInfo-fontSize)',
        lineHeight: 'var(--ds-typo-supportRegularInfo-lineHeight)',
        letterSpacing: 'var(--ds-typo-supportRegularInfo-letterSpacing)',
        '&.MuiSlider-markLabelActive': {
          color: 'var(--ds-colour-typoSecondary)'
        },
        transform: 'translateX(calc(-50% + 2px))',
        '&:nth-last-child(3)': {
          transform: 'translateX(calc(-50% + -2px))'
        },
        '&:nth-last-child(2)': {
          transform: 'translateX(calc(-50% + -2px))'
        }
      },
      thumb: {
        width: '18px',
        height: '18px'
      },
      thumbColorPrimary: {
        '&:hover, &.Mui-focusVisible': {
          boxShadow:
            '0px 0px 0px 10px rgba(var(--palette-primary-mainChannel) / 0.16)'
        }
      },
      thumbColorSecondary: {
        '&:hover, &.Mui-focusVisible': {
          boxShadow:
            '0px 0px 0px 10px var(--ds-colour-stateSelectedPrimaryHover)'
        }
      },
      thumbColorSuccess: {
        '&:hover, &.Mui-focusVisible': {
          boxShadow:
            '0px 0px 0px 10px rgba(var(--palette-success-mainChannel) / 0.16)'
        }
      },
      thumbColorWarning: {
        '&:hover, &.Mui-focusVisible': {
          boxShadow:
            '0px 0px 0px 10px rgba(var(--palette-warning-mainChannel) / 0.16)'
        }
      },
      thumbColorError: {
        '&:hover, &.Mui-focusVisible': {
          boxShadow:
            '0px 0px 0px 10px rgba(var(--palette-error-mainChannel) / 0.16)'
        }
      },
      thumbColorInfo: {
        '&:hover, &.Mui-focusVisible': {
          boxShadow:
            '0px 0px 0px 10px rgba(var(--palette-info-mainChannel) / 0.16)'
        }
      },
      valueLabel: {
        backgroundColor: 'var(--ds-colour-surfaceSecondary)',
        top: '0px',
        color: 'var(--ds-colour-typoPrimary)',
        padding: 'var(--ds-spacing-glacial) var(--ds-spacing-frostbite)',
        fontWeight: 'var(--ds-typo-bodyRegularSmall-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularSmall-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularSmall-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularSmall-letterSpacing)',
        '::before': {
          width: '15px',
          height: '15px'
        }
      }
    }
  }
}
