import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

type BreakpointsMap = { [key in Breakpoint]?: boolean }
export interface IwithBreakpoints {
  breakpoints: BreakpointsMap
}

export function withBreakpoints(Child: React.ElementType) {
  return (props: any) => {
    const theme = useTheme()
    const { keys } = theme.breakpoints
    let breakPoints: BreakpointsMap = {}

    keys.forEach((key: Breakpoint) => {
      breakPoints[key] = useMediaQuery(theme.breakpoints.only(key))
    })

    return <Child {...props} breakpoints={breakPoints} />
  }
}
