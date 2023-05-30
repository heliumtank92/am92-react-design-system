import PALETTE, { Palette } from '../Constants/PALETTE'

import {
  CssVarsTheme,
  CssVarsThemeOptions,
  experimental_extendTheme as extendTheme,
  Theme
} from '@mui/material/styles'
import getColorScheme, { ColorScheme } from './getColorScheme'
import getTypography from './getTypography'
import breakpoints from './breakpoints'
import components from './components'
import dsRules from './rules'
import dsSpacing, {
  dsSpacingCssVars,
  SPACE_COEFFICIENT
} from './spacing'
import dsElevation from './elevation'
import FONT_FAMILY_NAME from '../Constants/FONT_FAMILY_NAME'

interface colorSchemes {
  light?: any
  dark?: any
}

export default function getTheme(
  palette: Palette = PALETTE,
  fontFamilyName: string = FONT_FAMILY_NAME
): Omit<Theme, 'palette'> & CssVarsTheme {
  const { typography, dsTypo } = getTypography(fontFamilyName)

  const colorPalette: Palette = { ...PALETTE, ...palette }
  const lightColorScheme: ColorScheme = getColorScheme(
    colorPalette,
    'light'
  )
  const darkColorScheme: ColorScheme = getColorScheme(
    colorPalette,
    'dark'
  )
  let colorSchemes: colorSchemes = {}

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

  const cssVarsThemeOptions: CssVarsThemeOptions = {
    cssVarPrefix: '',
    components,
    colorSchemes
  }

  const themeConfig = {
    breakpoints,
    typography,
    shadows: dsElevation,
    spacing: (input: number) => input * SPACE_COEFFICIENT
  }

  const theme = extendTheme(cssVarsThemeOptions, themeConfig)
  return theme
}

export { dsSpacing, SPACE_COEFFICIENT }
