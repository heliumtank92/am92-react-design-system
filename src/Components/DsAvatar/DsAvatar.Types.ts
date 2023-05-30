import { AvatarProps } from '@mui/material'
export interface DsAvatarProps extends AvatarProps {
  'ds-variant'?: 'text' | 'icon'
  'ds-size': 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL'
}

export const DsAvatarDefaultProps: DsAvatarProps = {
  'ds-size': 'L'
}
