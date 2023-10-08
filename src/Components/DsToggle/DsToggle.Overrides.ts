export const DsToggleOverrides = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        height: '20px',
        width: '40px',
        padding: 'var(--ds-spacing-zero)',
        borderRadius: '10px',
        '.Mui-disabled': {
          pointerEvents: 'all',
          cursor: 'not-allowed',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      },
      switchBase: {
        padding: 'var(--ds-spacing-deepFreeze)',
        height: '100%',
        width: '50%',
        borderRadius: '8px',
        '&.Mui-checked + .MuiSwitch-track': {
          opacity: 1
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: 'var(--ds-colour-stateDisabledSurface)'
        },
        '.MuiTouchRipple-root': {
          height: '30px',
          width: '30px',
          top: '-5px',
          left: '-5px'
        }
      },
      thumb: {
        height: '100%',
        width: '100%',
        color: 'var(--ds-colour-iconOnSurface)'
      },
      track: {
        opacity: 1,
        backgroundColor: 'var(--ds-colour-stateUnselectedDefault)'
      }
    }
  }
}
