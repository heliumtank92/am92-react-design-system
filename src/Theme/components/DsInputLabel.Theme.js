const DsInputLabelTheme = {
  MuiInputLabel: {
    defaultProps: {
      shrink: true
    },
    styleOverrides: {
      root: {
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        transform: 'var(--ds-typo-casingNone)',
        position: 'relative',
        marginBottom: 'var(--ds-spacing-glacial)',
        color: 'var(--ds-color-typoPrimary)',

        '> p:first-of-type': {
          paddingTop: 'var(--ds-spacing-deepFreeze)',
          paddingBottom: 'var(--ds-spacing-deepFreeze)',
          paddingRight: 'var(--ds-spacing-deepFreeze)'
        },

        '&.Mui-focused:not(.Mui-disabled)': {
          color: 'var(--ds-color-typoPrimary)'
        },
        '&.MuiFormLabel-colorSuccess': {
          color: 'var(--ds-color-supportPositive)'
        },
        '&.Mui-focused.MuiFormLabel-colorSuccess': {
          color: 'var(--ds-color-supportPositive)'
        },
        '&.Mui-error': {
          color: 'var(--ds-color-supportNegative)'
        },
        '&.Mui-focused.Mui-error': {
          color: 'var(--ds-color-supportNegative)'
        }
      }
    }
  }
}

export default DsInputLabelTheme
