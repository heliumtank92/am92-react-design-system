import { TypographyProps } from '@mui/material'
import { DsTypographyOverides } from '../../Types'

export interface DsTypographyProps extends TypographyProps {}

export const DsTypographyDefaultProps: DsTypographyProps = {
  variant: 'bodyRegularMedium'
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends DsTypographyOverides {}
}
