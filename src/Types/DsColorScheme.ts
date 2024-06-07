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
