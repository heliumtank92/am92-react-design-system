import type {} from '@mui/material/themeCssVarsAugmentation'
import {
  CssVarsTheme,
  CssVarsThemeOptions,
  experimental_extendTheme as extendTheme,
  PaletteColorOptions,
  responsiveFontSizes,
  SupportedColorScheme,
  Theme
} from '@mui/material/styles'
import getColorScheme from './getColorScheme'
import getTypography from './getTypography'
import breakpoints from './breakpoints'
import componentOverrides from './componentOverrides'
import dsRules from './rules'
import dsSpacing, { dsSpacingCssVars, SPACE_COEFFICIENT } from './spacing'
import dsElevation from './elevation'
import { PALETTE, FONT_FAMILY_NAME } from '../Constants'
import { DsPalette } from '../Types'
import { DSTYPOGRAPHY_TOKENS } from '../Constants'
import dsRadius from './radius'

export function getTheme(
  palette: DsPalette = PALETTE,
  fontFamilyName: string = FONT_FAMILY_NAME
): Omit<Theme, 'palette'> & CssVarsTheme {
  const { typography, dsTypo } = getTypography(fontFamilyName)

  const colorSchemes = getColorScheme(palette)
  const colorSchemesKeys = Object.keys(colorSchemes) as SupportedColorScheme[]
  colorSchemesKeys.forEach((colorSchemesKey: SupportedColorScheme) => {
    colorSchemes[colorSchemesKey].ds = {
      ...colorSchemes[colorSchemesKey].ds,
      spacing: dsSpacingCssVars,
      typo: dsTypo,
      rules: dsRules,
      radius: dsRadius,
      elevation: dsElevation
    }
  })

  const cssVarsThemeOptions: CssVarsThemeOptions = {
    cssVarPrefix: '',
    components: componentOverrides,
    colorSchemes,
    shape: { borderRadius: 2 },
    breakpoints,
    typography,
    spacing: (input: number) => input * SPACE_COEFFICIENT
  }

  let theme = extendTheme(cssVarsThemeOptions)
  theme = responsiveFontSizes(theme, {
    disableAlign: true,
    breakpoints: breakpoints.keys,
    factor: 2,
    variants: DSTYPOGRAPHY_TOKENS
  })
  return theme
}

export { dsSpacing, SPACE_COEFFICIENT }

declare module '@mui/material/styles' {
  interface ColorSchemeOverrides {
    highContrast: true
  }
}

declare module '@mui/material/styles' {
  interface TypeText {
    tertiary: string
  }

  interface CommonColors {
    blackLight: string
  }

  interface PaletteOptions {
    surface?: PaletteColorOptions
    tertiary?: PaletteColorOptions
  }
}
