const STATE_STYLES: any = {
  ACTION_PRIMARY_STATE_PRIMARY: {
    '> * ': {
      zIndex: 1
    },
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: 'var(--ds-colour-actionPrimary)'
    },
    '&:focus-visible:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            mixBlendMode: 'color-dodge',
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
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
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
          }
        }
      }
    }
  },
  ACTION_SECONDARY_STATE_SECONDARY: {
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: 'var(--ds-colour-actionSecondary)'
    }
  },
  SURFACE_PRIMARY_STATE_PRIMARY: {
    '> * ': {
      zIndex: 1
    },
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
    },
    '&:focus-visible:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
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
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryPressed)'
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
      backgroundColor: 'var(--ds-colour-surfaceSecondary)'
    },
    '&:focus-visible:not(.Mui-disabled)': {
      '& .MuiTouchRipple-root': {
        opacity: 1,
        zIndex: 0,
        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
          opacity: 1,
          '& .MuiTouchRipple-child': {
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
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
            backgroundColor: 'var(--ds-colour-stateSelectedPrimaryPressed)'
          }
        }
      }
    }
  }
}

export default STATE_STYLES
