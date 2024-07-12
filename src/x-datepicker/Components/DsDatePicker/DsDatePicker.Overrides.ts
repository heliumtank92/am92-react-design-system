import { DsDatePickerDefaultProps } from './DsDatePicker.Types'

export const DsDatePickerOverrides = {
  MuiDatePicker: {
    defaultProps: DsDatePickerDefaultProps
  },
  MuiPickersPopper: {
    styleOverrides: {
      root: {
        ' &[data-popper-placement^="right"]': {
          marginLeft: '34px !important'
        },
        ' &[data-popper-placement^="bottom"]': {
          marginTop: '10px !important'
        },
        ' &[data-popper-placement^="left"]': {
          marginRight: '10px !important'
        },
        ' &[data-popper-placement^="top"]': {
          marginBottom: '10px !important'
        }
      },
      paper: {
        borderRadius: 'var(--ds-radius-bitterCold)',
        boxShadow: 'var(--ds-elevation-24)'
      }
    }
  },
  MuiDateCalendar: {
    styleOverrides: {
      root: {
        width: '328px',
        maxHeight: '416px',
        height: '100%',
        paddingTop: 'var(--ds-spacing-glacial)'
        // paddingLeft: 'var(--ds-spacing-bitterCold)',
        // paddingRight: 'var(--ds-spacing-bitterCold)'
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
          backgroundColor: 'var(--ds-colour-actionSecondary)',
          color: 'var(--ds-colour-typoOnSurface)',
          '&:hover': {
            backgroundColor: 'var(--ds-colour-actionSecondary)',
            color: 'var(--ds-colour-typoOnSurface)'
          },
          '&:focus': {
            backgroundColor: 'var(--ds-colour-actionSecondary)',
            color: 'var(--ds-colour-typoOnSurface)'
          }
        }
      },
      today: {
        ':not(.Mui-selected)': {
          background: 'transparent',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--ds-colour-actionSecondary)'
        }
      }
    }
  },
  MuiPickersMonth: {
    styleOverrides: {
      monthButton: {
        fontWeight: 'var(--ds-typo-bodyRegularLarge-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularLarge-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularLarge-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularLarge-letterSpacing)',
        borderRadius: 'var(--ds-radius-quickFreeze)',
        '&.Mui-selected': {
          backgroundColor: 'var(--ds-colour-surfaceSecondary)',
          color: 'var(--ds-colour-typoActionSecondary)',
          fontWeight: 'var(--ds-typo-bodyBoldLarge-fontWeight)',
          fontSize: 'var(--ds-typo-bodyBoldLarge-fontSize)',
          lineHeight: 'var(--ds-typo-bodyBoldLarge-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyBoldLarge-letterSpacing)',
          borderRadius: 'var(--ds-radius-quickFreeze)',
          '&:hover': {
            backgroundColor: 'var(--ds-colour-surfaceSecondary)',
            color: 'var(--ds-colour-typoActionSecondary)'
          },
          '&:focus': {
            backgroundColor: 'var(--ds-colour-surfaceSecondary)',
            color: 'var(--ds-colour-typoActionSecondary)'
          }
        }
      }
    }
  },
  MuiDayCalendar: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-bitterCold)',
        maxHeight: '300px'
      },
      weekDayLabel: {
        color: 'var(--ds-colour-typoDisabled)',
        width: '36px',
        height: '36px',
        margin: 'var(--ds-spacing-zero)',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)'
      },
      weekContainer: {
        justifyContent: 'space-between'
      },
      slideTransition: {
        minHeight: 'unset'
      },
      monthContainer: {
        position: 'unset'
      },
      header: {
        marginBottom: 'var(--ds-spacing-deepFreeze)',
        justifyContent: 'space-between'
      }
    }
  },
  MuiYearCalendar: {
    styleOverrides: {
      root: {
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)',
        marginTop: 'var(--ds-spacing-warm)',
        marginBottom: 'var(--ds-spacing-warm)',
        backgroundColor: 'var(--ds-colour-surfaceBackground)'
      }
    }
  },
  MuiMonthCalendar: {
    styleOverrides: {
      root: {
        rowGap: 'var(--ds-spacing-mild)',
        paddingTop: 'var(--ds-spacing-tropical)',
        paddingBottom: 'var(--ds-spacing-tropical)',
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)'
      }
    }
  },
  MuiPickersYear: {
    styleOverrides: {
      root: {
        flexBasis: '100%'
      },
      yearButton: {
        width: '100%',
        paddingTop: 'var(--ds-spacing-quickFreeze)',
        paddingBottom: 'var(--ds-spacing-quickFreeze)',
        height: 'unset',
        borderRadius: 'var(--ds-radius-quickFreeze)',
        marginTop: 'var(--ds-spacing-frostbite)',
        marginBottom: 'var(--ds-spacing-frostbite)',
        fontWeight: 'var(--ds-typo-bodyRegularLarge-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularLarge-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularLarge-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularLarge-letterSpacing)',
        color: 'var(--ds-colour-typoPrimary)',
        '&:hover': {
          backgroundColor: 'var(--ds-colour-surfaceSecondary)'
        },
        '&:focus': {
          backgroundColor: 'var(--ds-colour-surfaceSecondary)'
        },
        '&.Mui-selected': {
          fontWeight: 'var(--ds-typo-headingBoldMedium-fontWeight)',
          fontSize: 'var(--ds-typo-headingBoldMedium-fontSize)',
          lineHeight: 'var(--ds-typo-headingBoldMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-headingBoldMedium-letterSpacing)',
          color: 'var(--ds-colour-typoActionSecondary)',
          backgroundColor: 'var(--ds-colour-surfaceSecondary)',
          '&:hover': {
            backgroundColor: 'var(--ds-colour-surfaceSecondary)'
          },
          '&:focus': {
            backgroundColor: 'var(--ds-colour-surfaceSecondary)'
          }
        }
      }
    }
  }
}
