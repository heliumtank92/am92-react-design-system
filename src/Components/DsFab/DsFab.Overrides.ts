import { DsFabDefaultProps } from './DsFab.Types'
import STATE_STYLES from '../../Theme/STATE_STYLES'

export const DsFabOverrides = {
  MuiFab: {
    defaultProps: DsFabDefaultProps,
    styleOverrides: {
      root: {
        boxShadow: 'var(--ds-elevation-8)',
        textTransform: 'var(--ds-typo-casingNone)',
        height: 'auto',
        width: 'auto',
        borderRadius: '28px',
        '&.MuiFab-default': {
          backgroundColor: 'var(--ds-color-surfacePrimary)'
        },
        '&.MuiFab-extended .MuiTypography-root': {
          fontWeight: 'var(--ds-typo-bodyBoldMedium-fontWeight)',
          fontSize: 'var(--ds-typo-bodyBoldMedium-fontSize)',
          lineHeight: 'var(--ds-typo-bodyBoldMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyBoldMedium-letterSpacing)',
          marginLeft: 'var(--ds-spacing-glacial)'
        }
      }
    },
    variants: [
      {
        props: { size: 'medium' },
        style: {
          padding: 'var(--ds-spacing-bitterCold)',
          '&.MuiFab-extended': {
            paddingRight: 'var(--ds-spacing-mild)'
          }
        }
      },
      {
        props: { size: 'small' },
        style: {
          padding: 'var(--ds-spacing-frostbite)',
          fontSize: 'var(--ds-typo-fontSizeCool)',
          '&.MuiFab-extended': {
            paddingRight: 'var(--ds-spacing-bitterCold)'
          },
          '> .MuiIcon-root': {
            fontSize: 'inherit'
          }
        }
      },
      {
        props: { color: 'secondary' },
        style: {
          ...STATE_STYLES.ACTION_SECONDARY_STATE_SECONDARY
        }
      }
    ]
  }
}
