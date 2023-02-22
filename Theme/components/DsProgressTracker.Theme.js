const DsProgressTrackerTheme = {
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
  },
  MuiStepLabel: {
    styleOverrides: {
      root: {
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)',
        paddingTop: 'var(--ds-spacing-zero)',
        paddingBottom: 'var(--ds-spacing-zero)'
      },
      label: {
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        textTransform: 'var(--ds-typo-bodyRegularMedium-textTransform)',
        color: 'var(--ds-color-typoPrimary)',
        marginLeft: 'var(--ds-spacing-mild)',
        marginRight: 'var(--ds-spacing-mild)',
        '&.Mui-disabled': {
          color: 'var(--ds-color-typoPrimary)'
        }
      },
      iconContainer: {
        fontSize: 'var(--ds-typo-fontSizeMild)',
        padding: 'var(--ds-spacing-zero)',
        margin: 'var(--ds-spacing-zero)',
        marginTop: 'var(--ds-spacing-deepFreeze)',
        marginBottom: 'var(--ds-spacing-deepFreeze)',
        '&.Mui-disabled': {
          marginTop: 'var(--ds-spacing-quickFreeze)',
          marginBottom: 'var(--ds-spacing-quickFreeze)',

          fontWeight: 'var(--ds-typo-supportRegularMetadata-fontWeight)',
          fontSize: 'var(--ds-typo-supportRegularMetadata-fontSize)',
          lineHeight: 'var(--ds-typo-supportRegularMetadata-lineHeight)',
          letterSpacing: 'var(--ds-typo-supportRegularMetadata-letterSpacing)',
          textTransform: 'var(--ds-typo-supportRegularMetadata-textTransform)',
          color: 'var(--ds-color-typoTertiary)',
          height: '20px',
          width: '20px',
          marginLeft: 'var(--ds-spacing-deepFreeze)',
          padding: 'var(--ds-spacing-deepFreeze)',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'var(--ds-color-stateUnselectedDefault)',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }
    }
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderLeftWidth: '2px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'var(--ds-color-strokeDefault)',
        minHeight: 'var(--ds-rules-stepperConnectorMinHeight)'
      },
      vertical: {
        marginLeft: '27px'
      }
    }
  }
}

export default DsProgressTrackerTheme
