import { IconProps } from '@mui/material'
import {
  DsColorClass,
  DsColorOverides,
  DsFontSizeClass,
  DsFontSizeOverides
} from '../../Types'

export interface DsIconProps extends IconProps {}

export const DsIconDefaultProps: DsIconProps = {
  fontSize: 'mild',
  color: 'iconActionSecondary'
}

declare module '@mui/material/Icon' {
  interface IconPropsColorOverrides extends DsColorOverides {}
  interface IconPropsSizeOverrides extends DsFontSizeOverides {}
  interface IconClasses extends DsColorClass, DsFontSizeClass {}
}
