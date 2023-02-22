import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import getColorScheme from './getColorScheme'
import getTypography from './getTypography'
import breakpoints from './breakpoints'
import components from './components'
import dsRules from './rules'
import { dsSpacingCssVars, SPACE_COEFFICIENT } from './spacing'
import dsElevation from './elevation'

export default function getTheme (colorPalette = {}, fontFamilyName = '') {
  const { typography, dsTypo } = getTypography(fontFamilyName)
  const lightColorScheme = getColorScheme(colorPalette, 'light')
  const darkColorScheme = getColorScheme(colorPalette, 'dark')

  const colorSchemes = {}

  if (lightColorScheme) {
    colorSchemes.light = {
      palette: lightColorScheme.palette,
      ds: {
        color: lightColorScheme.dsColor,
        spacing: dsSpacingCssVars,
        typo: dsTypo,
        rules: dsRules,
        elevation: dsElevation
      }
    }
  }

  if (darkColorScheme) {
    colorSchemes.dark = {
      palette: darkColorScheme.palette,
      ds: {
        color: darkColorScheme.dsColor,
        spacing: dsSpacingCssVars,
        typo: dsTypo,
        rules: dsRules,
        elevation: dsElevation
      }
    }
  }

  const themeConfig = {
    cssVarPrefix: '',
    components,
    breakpoints,
    colorSchemes,
    typography,
    shadows: dsElevation,
    spacing: (input) => input * SPACE_COEFFICIENT
  }

  const theme = extendTheme(themeConfig, themeConfig)
  window.theme = theme
  return theme
}
