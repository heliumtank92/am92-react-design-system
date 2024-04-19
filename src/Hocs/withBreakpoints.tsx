import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Subtract } from 'utility-types'

type BreakpointsMap = { [key in Breakpoint]?: boolean }
type BreakpointsValues = { [key in Breakpoint]?: number }

/**
 * Basic Interface to extend in components wrapping the below HOC.
 *
 * @export
 * @interface IwithBreakpoints
 */
export interface IwithBreakpoints {
  breakpoints: BreakpointsMap
  breakpointsValues: BreakpointsValues
}

/**
 * HOC to provide breakpoints features
 *
 * @template P
 * @param Child
 * @returns
 */
export function withBreakpoints<P extends IwithBreakpoints>(
  Child: React.ComponentType<P>
) {
  return (props: Subtract<P, IwithBreakpoints>): React.JSX.Element => {
    const theme = useTheme()
    const { keys } = theme.breakpoints
    let breakPoints: BreakpointsMap = {}

    keys.forEach((key: Breakpoint) => {
      breakPoints[key] = useMediaQuery(theme.breakpoints.only(key))
    })

    return (
      <Child
        {...(props as P)}
        breakpointsValues={theme.breakpoints}
        breakpoints={breakPoints}
      />
    )
  }
}
