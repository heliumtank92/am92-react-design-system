import { AppBarProps } from '@mui/material'

export interface DsAppBarProps extends AppBarProps {
  leftIcon?: React.ReactElement
  appBarTitle?: string | React.ReactElement
  rightActions?: React.ReactElement[]
}

export const DsAppBarDefaultProps: DsAppBarProps = {
  color: 'primary',
  enableColorOnDark: true,
  elevation: -1,
  appBarTitle: ''
}
