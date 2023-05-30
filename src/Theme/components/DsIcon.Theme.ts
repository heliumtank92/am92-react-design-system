import { DsColorOverides } from '../getColorScheme'

declare module '@mui/material/Icon' {
  interface IconPropsColorOverrides extends DsColorOverides {}
}
