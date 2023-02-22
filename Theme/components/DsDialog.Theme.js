const DsDialogTheme = {
  MuiDialog: {
    defaultProps: {
      scroll: 'paper',
      maxWidth: 'xs'
    },
    styleOverrides: {
      paper: {
        backgroundColor: 'var(--ds-color-surfacePrimary)',
        borderRadius: '16px',
        boxShadow: 'var(--ds-elevation-24)'
      },
      paperWidthXs: {
        maxWidth: 'var(--ds-rules-dialogXsMaxWidth)'
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontWeight: 'var(--ds-typo-headingBoldSmall-fontWeight)',
        fontSize: 'var(--ds-typo-headingBoldSmall-fontSize)',
        lineHeight: 'var(--ds-typo-headingBoldSmall-lineHeight)',
        letterSpacing: 'var(--ds-typo-headingBoldSmall-letterSpacing)',
        color: 'var(--ds-color-typoPrimary)',
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)',
        paddingBottom: 'var(--ds-spacing-bitterCold)',
        paddingTop: 'var(--ds-spacing-mild)',
        textAlign: 'center'
      }
    }
  },
  MuiDialogContent: {
    variants: [
      {
        props: { textOnly: true },
        style: {
          fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
          fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
          lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
          paddingBottom: 'var(--ds-spacing-glacial)',
          textAlign: 'center'
        }
      }
    ],
    styleOverrides: {
      root: {
        color: 'var(--ds-color-typoTertiary)',
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)',
        paddingBottom: 'var(--ds-spacing-mild)'
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-zero)',
        '> *': {
          flex: 1
        }
      }
    }
  }
}

export default DsDialogTheme
