import { TooltipProps } from '@mui/material'

export interface DsTooltipProps extends TooltipProps {
  heading?: string
  description?: string
  buttonGroup?: React.ReactElement
}

export const DsTooltipDefaultProps: DsTooltipProps = {
  arrow: true,
  placement: 'top-start',
  enterTouchDelay: 0,
  leaveTouchDelay: 4000,
  title: '',
  children: <></>
}
