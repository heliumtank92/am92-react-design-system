import STATE_STYLES from '../../Theme/STATE_STYLES'

export const DsMenuItemOverrides = {
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
          backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
        },
        '&.Mui-selected:hover': {
          backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
        },
        ...STATE_STYLES.SURFACE_PRIMARY_STATE_PRIMARY
      }
    }
  }
}
