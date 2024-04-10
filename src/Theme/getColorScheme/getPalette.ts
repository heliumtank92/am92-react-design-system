import { PaletteColorOptions, PaletteOptions } from '@mui/material'
import { DsColor, DsPalette } from '../../Types'

export function getPalette(
  colorPalette: DsPalette,
  dsColor: DsColor
): PaletteOptions {
  const {
    primary,
    primaryBlack,
    primaryBlackLight,
    primaryWhite,

    secondary100,
    secondary80,
    secondary60,
    secondary40,
    secondary20,

    secondaryGrey100,
    secondaryGrey90,
    secondaryGrey80,
    secondaryGrey70,
    secondaryGrey60,
    secondaryGrey50,
    secondaryGrey40,
    secondaryGrey30,
    secondaryGrey20,
    secondaryGrey10,

    tertiary100,
    tertiary80,
    tertiary60,
    tertiary40,
    tertiary20,
    tertiary10,

    errorRed,
    successGreen,
    warningOrange,
    snackBlue,
    typical,

    errorRedNeutralLight,
    successGreenNeutralLight,
    warningOrangeNeutralLight,
    snackBlueNeutralLight,
    linkPurpleLight,

    errorRedNeutralDark,
    successGreenNeutralDark,
    warningOrangeNeutralDark,
    snackBlueNeutralDark,
    linkPurpleDark,

    neutral1Light,
    neutral2Light,
    neutral3Light,
    neutral4Light,
    neutral5Light,
    neutral6Light,

    neutral1Dark,
    neutral2Dark,
    neutral3Dark,
    neutral4Dark,
    neutral5Dark,
    neutral6Dark
  } = colorPalette

  const palette: PaletteOptions = {
    common: {
      black: primaryBlack,
      white: primaryWhite,
      blackLight: primaryBlackLight
    },
    primary: {
      main: dsColor.actionPrimary,
      contrastText: dsColor.typoOnSurface
    } as PaletteColorOptions,
    secondary: {
      main: dsColor.actionSecondary,
      contrastText: dsColor.typoOnSurface
    } as PaletteColorOptions,
    tertiary: {
      main: dsColor.actionTertiary,
      contrastText: dsColor.typoOnSurface
    } as PaletteColorOptions,
    error: {
      main: dsColor.supportNegative,
      contrastText: dsColor.typoOnSurface
    } as PaletteColorOptions,
    warning: {
      main: dsColor.supportWarning,
      contrastText: dsColor.typoOnSurface
    } as PaletteColorOptions,
    info: {
      main: dsColor.supportVariable,
      contrastText: dsColor.typoOnSurface
    } as PaletteColorOptions,
    success: {
      main: dsColor.supportPositive,
      contrastText: dsColor.typoOnSurface
    } as PaletteColorOptions,
    surface: {
      main: dsColor.surfaceBackground,
      contrastText: dsColor.typoPrimary
    } as PaletteColorOptions,
    grey: {
      50: secondaryGrey100,
      100: secondaryGrey90,
      200: secondaryGrey80,
      300: secondaryGrey70,
      400: secondaryGrey60,
      500: secondaryGrey50,
      600: secondaryGrey40,
      700: secondaryGrey30,
      800: secondaryGrey20,
      900: secondaryGrey10,
      A100: secondaryGrey100,
      A200: secondaryGrey90,
      A400: secondaryGrey70,
      A700: secondaryGrey40
    },
    text: {
      primary: dsColor.typoPrimary,
      secondary: dsColor.typoSecondary,
      tertiary: dsColor.typoTertiary,
      disabled: dsColor.typoDisabled
    },
    divider: dsColor.strokeDefault,
    background: {
      default: dsColor.surfaceBackground,
      paper: dsColor.surfaceBackground
    }
  }

  return palette
}
