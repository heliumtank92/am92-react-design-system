import { IconProps } from '@mui/material'
import {
  DsColorClass,
  DsColorOverrides,
  DsFontSizeClass,
  DsFontSizeOverides
} from '../../Types'

export interface DsIconProps extends IconProps {}

export const DsIconDefaultProps: DsIconProps = {
  fontSize: 'mild',
  color: 'inherit'
}

declare module '@mui/material/Icon' {
  interface IconPropsColorOverrides extends DsColorOverrides {}
  interface IconPropsSizeOverrides extends DsFontSizeOverides {}
  interface IconClasses extends DsColorClass, DsFontSizeClass {}
}
