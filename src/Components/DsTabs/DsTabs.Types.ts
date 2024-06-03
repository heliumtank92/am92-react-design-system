import { TabsProps } from '@mui/material'

export interface DsTabsProps extends TabsProps {
  'ds-variant'?: 'container'
}

export const DsTabsDefaultProps: DsTabsProps = {
  variant: 'fullWidth',
  indicatorColor: 'secondary',
  textColor: 'secondary'
}
