import { DsBoxProps } from '../DsBox'

export interface DsHeaderProps extends DsBoxProps {
  logoUrl?: string
  logo?: React.ReactElement
  children?: React.ReactElement
  HeaderProps?: any
  BoxProps?: any
  StackProps?: any
}

export const DsHeaderDefaultProps: DsHeaderProps = {
  BoxProps: { sx: {} },
  StackProps: { sx: {} }
}
