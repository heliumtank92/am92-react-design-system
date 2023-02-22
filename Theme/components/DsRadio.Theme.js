const DsRadioTheme = {
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-deepFreeze)',
        '&:hover': {
          backgroundColor: 'transparent',
          '.MuiTouchRipple-root': {
            width: '30px',
            height: '30px',
            top: '-3px',
            left: '-3px',
            backgroundColor: 'var(--ds-color-stateUnselectedHover)'
          }
        },
        '&.Mui-focusVisible': {
          '.MuiTouchRipple-root': {
            width: '40px',
            height: '40px',
            top: '-8px',
            left: '-8px',
            backgroundColor: 'var(--ds-color-stateUnselectedHover)',
            '> .MuiTouchRipple-ripple': {
              width: '40px',
              height: '40px',
              top: '0px',
              left: '0px',
              backgroundColor: 'var(--ds-color-stateUnselectedHover)',
              '> .MuiTouchRipple-childPulsate': {
                backgroundColor: 'var(--ds-color-stateUnselectedHover)'
              }
            }
          }
        },
        '&.Mui-checked:not(.Mui-disabled)': {
          '&:hover': {
            backgroundColor: 'transparent',
            '.MuiTouchRipple-root': {
              width: '30px',
              height: '30px',
              top: '-3px',
              left: '-3px',
              backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
            }
          },
          '&.Mui-focusVisible': {
            '.MuiTouchRipple-root': {
              backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)',
              '> .MuiTouchRipple-ripple': {
                backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)',
                '> .MuiTouchRipple-childPulsate': {
                  backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
                }
              }
            }
          }
        },
        '&.Mui-disabled': {
          color: 'var(--ds-color-iconDisabled)'
        }
      }
    }
  }
}

export default DsRadioTheme
