const STATE_STYLES = {
  ACTION_PRIMARY_STATE_PRIMARY: {
    '> * ': {
      zIndex: 1
    },
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: 'var(--ds-color-actionPrimary)'
    },
    '&:focus-visible:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            mixBlendMode: 'color-dodge',
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
          }
        }
      }
    },
    '&:active:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            mixBlendMode: 'color-dodge',
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
          }
        }
      }
    }
  },
  ACTION_SECONDARY_STATE_SECONDARY: {
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: 'var(--ds-color-actionSecondary)'
    }
  },
  SURFACE_PRIMARY_STATE_PRIMARY: {
    '> * ': {
      zIndex: 1
    },
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
    },
    '&:focus-visible:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
          }
        }
      }
    },
    '&:active:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryPressed)'
          }
        }
      }
    }
  },
  SURFACE_SECONDARY_STATE_PRIMARY: {
    '> * ': {
      zIndex: 1
    },
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: 'var(--ds-color-surfaceSecondary)'
    },
    '&:focus-visible:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
          }
        }
      }
    },
    '&:active:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            backgroundColor: 'var(--ds-color-stateSelectedPrimaryPressed)'
          }
        }
      }
    }
  }
}

export default STATE_STYLES
