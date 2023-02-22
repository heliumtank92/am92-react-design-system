import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function withBreakpoints (Child) {
  return (props) => {
    const theme = useTheme()
    const { keys } = theme.breakpoints
    const breakPoints = {}

    keys.forEach((key) => { breakPoints[key] = useMediaQuery(theme.breakpoints.only(key)) })

    return (
      <Child
        {...props}
        breakpoints={breakPoints}
      />
    )
  }
}
