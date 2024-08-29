import { SvgIconProps } from '@mui/material'
import {
  DsColorClass,
  DsColorOverrides,
  DsFontSizeClass,
  DsFontSizeOverides
} from '../../Types'

export interface DsSvgIconProps extends SvgIconProps {}

export const DsSvgIconDefaultProps: DsSvgIconProps = {
  fontSize: 'mild',
  color: 'iconActionSecondary'
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides extends DsColorOverrides {}
  interface SvgIconPropsSizeOverrides extends DsFontSizeOverides {}
  interface SvgIconClasses extends DsColorClass, DsFontSizeClass {}
}
