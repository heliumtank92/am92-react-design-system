const DsStepperTheme = {
  MuiStepper: {
    styleOverrides: {
      vertical: {
        '> .MuiStep-root': {
          '&:first-of-type': {
            paddingTop: 'var(--ds-spacing-bitterCold)'
          },
          '&:last-of-type': {
            paddingBottom: 'var(--ds-spacing-bitterCold)'
          }
        }
      }
    }
  }
}

export default DsStepperTheme
