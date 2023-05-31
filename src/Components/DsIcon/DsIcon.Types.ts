import { IconProps } from '@mui/material'
import { DsColorOverides, DsFontSizePropsVariantOverrides } from '../../Types'

export interface DsIconProps extends IconProps {}

export const IconDefaultProps: DsIconProps = {
  fontSize: 'mild',
  color: 'iconActionSecondary'
}

declare module '@mui/material/Icon' {
  interface IconPropsColorOverrides extends DsColorOverides {}
  interface IconPropsSizeOverrides extends DsFontSizePropsVariantOverrides {}
}
