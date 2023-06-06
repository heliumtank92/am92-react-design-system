import { SvgIconProps } from '@mui/material'
import {
  DsColorClass,
  DsColorOverides,
  DsFontSizeClass,
  DsFontSizePropsVariantOverrides
} from '../../Types'

export interface DsSvgIconProps extends SvgIconProps {}

export const DsSvgIconDefaultProps: DsSvgIconProps = {
  fontSize: 'mild',
  color: 'iconActionSecondary'
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides extends DsColorOverides {}
  interface SvgIconPropsSizeOverrides extends DsFontSizePropsVariantOverrides {}
  interface SvgIconClasses extends DsColorClass, DsFontSizeClass {}
}
