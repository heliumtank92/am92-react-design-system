import { AppBarProps } from '@mui/material'

export interface DsAppBarProps extends AppBarProps {
  navigation?: boolean | React.ReactElement
  appBarTitle?: string | React.ReactElement
  actions?: boolean | React.ReactElement[]
}

export const DsAppBarDefaultProps: DsAppBarProps = {
  color: 'default',
  enableColorOnDark: true,
  elevation: 0,
  appBarTitle: '',
  navigation: false,
  actions: false
}
