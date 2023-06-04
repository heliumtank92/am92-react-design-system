import { LinkProps } from '@mui/material'

export interface DsLinkProps extends LinkProps {}

export const DsLinkDefaultProps: DsLinkProps = {
  color: 'secondary',
  variant: 'bodyRegularSmall',
  underline: 'hover'
}
