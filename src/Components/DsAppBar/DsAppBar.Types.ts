import { AppBarProps } from '@mui/material'

export interface DsAppBarProps extends AppBarProps {
  open: boolean
  leftIcon: React.ReactElement
  content: string | React.ReactElement
  rightActions: React.ReactElement[]
}

export const DsAppBarDefaultProps: DsAppBarProps = {}
