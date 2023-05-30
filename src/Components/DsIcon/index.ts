import { DsColorOverides } from '../Theme/getColorScheme'

export { default, IconProps as DsIconProps } from '@mui/material/Icon'

declare module '@mui/material/Icon' {
  interface IconPropsColorOverrides extends DsColorOverides {}
}
