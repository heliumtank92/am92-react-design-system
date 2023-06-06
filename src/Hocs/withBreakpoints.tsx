import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export function withBreakpoints(Child: React.ElementType) {
  return (props: any) => {
    const theme = useTheme()
    const { keys } = theme.breakpoints
    let breakPoints: { [key in Breakpoint]?: boolean } = {}

    keys.forEach((key: Breakpoint) => {
      breakPoints[key] = useMediaQuery(theme.breakpoints.only(key))
    })

    return <Child {...props} breakpoints={breakPoints} />
  }
}
