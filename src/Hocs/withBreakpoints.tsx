import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export function withBreakpoints(Child: any) {
  return (props: any) => {
    const theme = useTheme()
    const { keys } = theme.breakpoints
    const breakPoints: any = {}

    keys.forEach(key => {
      breakPoints[key] = useMediaQuery(theme.breakpoints.only(key))
    })

    return <Child {...props} breakpoints={breakPoints} />
  }
}
