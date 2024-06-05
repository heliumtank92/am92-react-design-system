import { TooltipProps } from '@mui/material'

export interface DsTooltipProps extends Omit<TooltipProps, 'title'> {
  heading?: string
  description?: string
  buttonGroup?: React.ReactElement
}

export const DsTooltipDefaultProps: DsTooltipProps = {
  arrow: true,
  placement: 'top-start',
  enterTouchDelay: 0,
  leaveTouchDelay: 4000,
  children: <></>
}
