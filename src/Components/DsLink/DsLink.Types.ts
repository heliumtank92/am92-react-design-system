import { LinkProps } from '@mui/material'
import { DsTypographyPropsVariantOverrides } from '../../Types'

export interface DsLinkProps extends LinkProps {}

export const DsLinkDefaultProps: DsLinkProps = {
  color: 'secondary',
  variant: 'bodyRegularSmall',
  underline: 'hover'
}
