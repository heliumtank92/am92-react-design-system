import { DsDrawerProps } from '../DsDrawer'

export interface DsBottomStaggerProps extends DsDrawerProps {
  kicker?: string | React.ReactElement
  bottomStaggerTitle?: string | React.ReactElement
  buttonGroup?: React.ReactElement
  showClose?: boolean
}

export const DsBottomStaggerDefaultProps: DsBottomStaggerProps = {
  showClose: true
}
