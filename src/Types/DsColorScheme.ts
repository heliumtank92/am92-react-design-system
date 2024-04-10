import {
  ColorSystemOptions,
  PaletteColorOptions,
  SupportedColorScheme
} from '@mui/material'
import { DsColor } from './DsColor'
import { DsSpacing } from './DsSpacing'
import { DsTypographyVariants } from './DsTypography'
import { DsRadius } from './DsRadius'
import { DsElevation } from './DsElevation'
import { DsRules } from './DsRules'

export interface DsColorSystemOptions extends ColorSystemOptions {
  ds: {
    colour: DsColor
    spacing?: DsSpacing
    typo?: DsTypographyVariants
    rules?: DsRules
    radius?: DsRadius
    elevation?: DsElevation
  }
}

export interface DsColorScheme
  extends Record<SupportedColorScheme, DsColorSystemOptions> {}

// Record<SupportedColorScheme, ColorSystemOptions>
declare module '@mui/material/styles' {
  interface ColorSchemeOverrides {
    highContrast: true
  }

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
