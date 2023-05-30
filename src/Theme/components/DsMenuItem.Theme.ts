import STATE_STYLES from '../STATE_STYLES'

const DsMenuItemTheme = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 'var(--ds-spacing-frostbite)',
        paddingBottom: 'var(--ds-spacing-frostbite)',
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        '&.Mui-selected': {
          backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
        },
        '&.Mui-selected:hover': {
          backgroundColor: 'var(--ds-color-stateSelectedPrimaryHover)'
        },
        ...STATE_STYLES.SURFACE_PRIMARY_STATE_PRIMARY
      }
    }
  }
}

export default DsMenuItemTheme
