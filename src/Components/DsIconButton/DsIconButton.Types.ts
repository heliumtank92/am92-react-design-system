import { IconButtonProps } from '@mui/material'
import { DsColorClass, DsColorOverrides, DsFontSizeClass } from '../../Types'

export interface DsIconButtonProps extends IconButtonProps {}

export const DsIconButtonDefaultProps: DsIconButtonProps = {
  color: 'iconDefault'
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides extends DsColorOverrides {}
  interface IconButtonClasses extends DsColorClass, DsFontSizeClass {}
}
