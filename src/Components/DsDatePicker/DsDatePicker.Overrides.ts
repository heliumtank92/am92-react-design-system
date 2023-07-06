export const DsDatePickerOverrides = {
  MuiPickersPopper: {
    styleOverrides: {
      root: {
        ' &[data-popper-placement^="right"]': {
          marginLeft: '34px !important'
        },
        ' &[data-popper-placement^="bottom"]': {
          marginTop: '5px !important'
        },
        ' &[data-popper-placement^="left"]': {
          marginRight: '5px !important'
        },
        ' &[data-popper-placement^="top"]': {
          marginBottom: '5px !important'
        }
      },
      paper: {
        borderRadius: '16px',
        boxShadow: 'var(--ds-elevation-24)'
      }
    }
  },
  MuiDateCalendar: {
    styleOverrides: {
      root: {
        width: '284px',
        paddingTop: 'var(--ds-spacing-bitterCold)',
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)'
      }
    }
  },
  MuiPickersCalendarHeader: {
    styleOverrides: {
      root: {
        margin: 'var(--ds-spacing-zero)',
        marginBottom: 'var(--ds-spacing-quickFreeze)',
        padding: 'var(--ds-spacing-glacial)'
      },
      labelContainer: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'unset',
        pointerEvents: 'none'
      },
      switchViewButton: {
        display: 'none'
      },
      label: {
        marginRight: 'var(--ds-spacing-zero)'
      }
    }
  },
  MuiPickersArrowSwitcher: {
    styleOverrides: {
      root: {
        width: '100%'
      },
      spacer: {
        flexGrow: 1
      }
    }
  },
  MuiPickersDay: {
    styleOverrides: {
      root: {
        width: '36px',
        height: '36px',
        margin: 'var(--ds-spacing-zero)',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        '&.Mui-selected': {
          backgroundColor: 'var(--ds-color-actionSecondary)',
          color: 'var(--ds-color-typoOnSurface)',
          '&:hover': {
            backgroundColor: 'var(--ds-color-actionSecondary)',
            color: 'var(--ds-color-typoOnSurface)'
          },
          '&:focus': {
            backgroundColor: 'var(--ds-color-actionSecondary)',
            color: 'var(--ds-color-typoOnSurface)'
          }
        }
      }
    }
  },
  MuiDayCalendar: {
    styleOverrides: {
      weekDayLabel: {
        color: 'var(--ds-color-typoDisabled)',
        width: '36px',
        height: '36px',
        margin: 'var(--ds-spacing-zero)',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)'
      },
      slideTransition: {
        minHeight: 'unset'
      },
      monthContainer: {
        position: 'unset'
      },
      header: {
        marginBottom: 'var(--ds-spacing-deepFreeze)'
      }
    }
  },
  MuiYearCalendar: {
    styleOverrides: {
      root: {
        width: '252px',
        maxHeight: '302px',
        padding: 'var(--ds-spacing-glacial)',
        marginTop: '-34px',
        backgroundColor: 'var(--ds-color-surfaceBackground)'
      }
    }
  },
  MuiPickersYear: {
    styleOverrides: {
      root: {
        flexBasis: '100%'
      },
      yearButton: {
        padding: 'var(--ds-spacing-zero)',
        height: 'unset',
        fontWeight: 'var(--ds-typo-bodyRegularLarge-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularLarge-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularLarge-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularLarge-letterSpacing)',
        color: 'var(--ds-color-typoPrimary)',
        '&:hover': {
          backgroundColor: 'transparent'
        },
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-selected': {
          fontWeight: 'var(--ds-typo-headingBoldMedium-fontWeight)',
          fontSize: 'var(--ds-typo-headingBoldMedium-fontSize)',
          lineHeight: 'var(--ds-typo-headingBoldMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-headingBoldMedium-letterSpacing)',
          color: 'var(--ds-color-actionSecondary)',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent'
          },
          '&:focus': {
            backgroundColor: 'transparent'
          }
        }
      }
    }
  }
}
