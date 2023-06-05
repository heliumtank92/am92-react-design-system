import { AvatarProps } from '@mui/material'
import { DsAvatarDefaultProps, DsAvatarProps } from './DsAvatar.Types'

export const DsAvatarOverrides = {
  MuiAvatar: {
    defaultProps: DsAvatarDefaultProps,
    variants: [
      {
        props: { 'ds-variant': 'text' } as Partial<DsAvatarProps>,
        style: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--ds-color-strokeDefault)',
          color: 'var(--ds-color-typoPrimary)',
          backgroundColor: 'var(--ds-color-surfaceSecondary)'
        }
      },
      {
        props: { 'ds-variant': 'icon' } as Partial<DsAvatarProps>,
        style: {
          color: 'var(--ds-color-iconDefault)',
          backgroundColor: 'transparent'
        }
      },
      {
        props: { 'ds-size': 'S' } as Partial<DsAvatarProps>,
        style: {
          fontWeight: 'var(--ds-typo-bodyRegularSmall-fontWeight)',
          fontSize: 'var(--ds-typo-bodyRegularSmall-fontSize)',
          lineHeight: 'var(--ds-typo-bodyRegularSmall-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyRegularSmall-letterSpacing)',
          width: 'var(--ds-rules-avatarSSize)',
          height: 'var(--ds-rules-avatarSSize)',
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-rules-avatarSSize)'
          }
        }
      },
      {
        props: { 'ds-size': 'M' } as Partial<DsAvatarProps>,
        style: {
          fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
          fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
          lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
          width: 'var(--ds-rules-avatarMSize)',
          height: 'var(--ds-rules-avatarMSize)',
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-rules-avatarMSize)'
          }
        }
      },
      {
        props: { 'ds-size': 'L' } as Partial<DsAvatarProps>,
        style: {
          fontWeight: 'var(--ds-typo-bodyRegularLarge-fontWeight)',
          fontSize: 'var(--ds-typo-bodyRegularLarge-fontSize)',
          lineHeight: 'var(--ds-typo-bodyRegularLarge-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyRegularLarge-letterSpacing)',
          width: 'var(--ds-rules-avatarLSize)',
          height: 'var(--ds-rules-avatarLSize)',
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-rules-avatarLSize)'
          }
        }
      },
      {
        props: { 'ds-size': 'XL' } as Partial<DsAvatarProps>,
        style: {
          fontWeight: 'var(--ds-typo-headingBoldMedium-fontWeight)',
          fontSize: 'var(--ds-typo-headingBoldMedium-fontSize)',
          lineHeight: 'var(--ds-typo-headingBoldMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-headingBoldMedium-letterSpacing)',
          width: 'var(--ds-rules-avatarXLSize)',
          height: 'var(--ds-rules-avatarXLSize)',
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-rules-avatarXLSize)'
          }
        }
      },
      {
        props: { 'ds-size': 'XXL' } as Partial<DsAvatarProps>,
        style: {
          fontWeight: 'var(--ds-typo-headingBoldLarge-fontWeight)',
          fontSize: 'var(--ds-typo-headingBoldLarge-fontSize)',
          lineHeight: 'var(--ds-typo-headingBoldLarge-lineHeight)',
          letterSpacing: 'var(--ds-typo-headingBoldLarge-letterSpacing)',
          width: 'var(--ds-rules-avatarXXLSize)',
          height: 'var(--ds-rules-avatarXXLSize)',
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-rules-avatarXXLSize)'
          }
        }
      },
      {
        props: {
          'ds-size': '3XL'
        } as Partial<DsAvatarProps> as Partial<DsAvatarProps>,
        style: {
          fontWeight: 'var(--ds-typo-headingBoldExtraLarge-fontWeight)',
          fontSize: 'var(--ds-typo-headingBoldExtraLarge-fontSize)',
          lineHeight: 'var(--ds-typo-headingBoldExtraLarge-lineHeight)',
          letterSpacing: 'var(--ds-typo-headingBoldExtraLarge-letterSpacing)',
          width: 'var(--ds-rules-avatar3XLSize)',
          height: 'var(--ds-rules-avatar3XLSize)',
          '> .MuiIcon-root': {
            fontSize: 'var(--ds-rules-avatar3XLSize)'
          }
        }
      }
    ]
  }
}
