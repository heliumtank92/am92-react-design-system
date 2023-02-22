const DsFormControlLabelTheme = {
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          '&:hover': {
            pointerEvents: 'all',
            cursor: 'not-allowed'
          }
        }
      },
      label: {
        padding: 'var(--ds-spacing-deepFreeze)',
        paddingRight: 'var(--ds-spacing-zero)',
        marginLeft: 'var(--ds-spacing-quickFreeze)',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)'
      },
      labelPlacementStart: {
        marginLeft: 'var(--ds-spacing-zero)',
        marginRight: 'var(--ds-spacing-quickFreeze)'
      }
    }
  }
}

export default DsFormControlLabelTheme
