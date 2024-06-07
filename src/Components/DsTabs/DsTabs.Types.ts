import { TabsProps } from '@mui/material'

export interface DsTabsProps extends TabsProps {
  'ds-variant'?: 'container'
}

export const DsTabsDefaultProps: DsTabsProps = {
  indicatorColor: 'secondary',
  textColor: 'secondary'
}
