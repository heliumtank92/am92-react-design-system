import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles'
import { DsColor, DsPalette } from '../Types'

export type ColorScheme = {
  palette?: PaletteOptions
  dsColor?: DsColor
}

export default function getModeColorScheme(
  colorPalette: DsPalette,
  mode: 'light' | 'dark'
): ColorScheme {
  if (!colorPalette) {
    return {}
  }

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

  const dsColor: DsColor = {
    actionPrimary: primary,
    actionSecondary: secondary100,
    actionTertiary: tertiary100,

    surfaceBackground: mode === 'light' ? primaryWhite : primaryBlackLight,
    surfacePrimary: mode === 'light' ? primaryWhite : primaryBlack,
    surfaceSecondary: mode === 'light' ? secondaryGrey10 : secondaryGrey100,
    surfaceTertiary: mode === 'light' ? secondaryGrey100 : secondaryGrey10,

    typoPrimary: mode === 'light' ? primaryBlackLight : secondaryGrey10,
    typoSecondary: mode === 'light' ? secondaryGrey80 : secondaryGrey30,
    typoTertiary: mode === 'light' ? secondaryGrey60 : secondaryGrey50,
    typoActionPrimary: mode === 'light' ? primary : primaryWhite,
    typoActionSecondary: secondary100,
    typoActionTertiary: mode === 'light' ? tertiary100 : tertiary10,
    typoOnSurface: primaryWhite,
    typoDisabled: mode === 'light' ? secondaryGrey50 : secondaryGrey60,
    typoTypical: typical,

    neutral1: mode === 'light' ? neutral1Light : neutral1Dark,
    neutral2: mode === 'light' ? neutral2Light : neutral2Dark,
    neutral3: mode === 'light' ? neutral3Light : neutral3Dark,
    neutral4: mode === 'light' ? neutral4Light : neutral4Dark,
    neutral5: mode === 'light' ? neutral5Light : neutral5Dark,
    neutral6: mode === 'light' ? neutral6Light : neutral6Dark,

    iconSupportNegative: errorRed,
    iconSupportPositive: successGreen,
    iconSupportWarning: warningOrange,
    iconActionPrimary: primary,
    iconActionSecondary: secondary100,
    iconActionTertiary: mode === 'light' ? tertiary100 : tertiary10,
    iconOnSurface: primaryWhite,
    iconDisabled: mode === 'light' ? secondaryGrey50 : secondaryGrey60,
    iconDefault: mode === 'light' ? secondaryGrey100 : primaryWhite,
    iconTypical: typical,

    strokeDefault: mode === 'light' ? secondaryGrey30 : secondaryGrey80,
    strokeSelected: mode === 'light' ? secondary80 : secondary60,
    strokeSecondarySelected: mode === 'light' ? tertiary60 : tertiary40,
    strokeHover: secondary40,
    strokeDisabled: mode === 'light' ? secondaryGrey50 : secondaryGrey60,
    strokeActive: mode === 'light' ? secondaryGrey100 : secondaryGrey10,

    supportNegative: errorRed,
    supportPositive: successGreen,
    supportWarning: warningOrange,
    supportVariable: snackBlue,
    supportTypical: typical,

    supportNegativeNeutral:
      mode === 'light' ? errorRedNeutralLight : errorRedNeutralDark,
    supportPositiveNeutral:
      mode === 'light' ? successGreenNeutralLight : successGreenNeutralDark,
    supportWarningNeutral:
      mode === 'light' ? warningOrangeNeutralLight : warningOrangeNeutralDark,
    supportTypicalNeutral:
      mode === 'light' ? snackBlueNeutralLight : snackBlueNeutralDark,

    stateSelectedPrimaryHover:
      mode === 'light'
        ? hexToRgbA(secondary80, 0.08)
        : hexToRgbA(secondary40, 0.2),
    stateSelectedPrimaryPressed: secondary40,
    stateSelectedSecondaryHover: mode === 'light' ? tertiary10 : '#081919', // TODO
    stateSelectedSecondaryPressed: mode === 'light' ? tertiary20 : '#154B3F', // TODO

    stateSelectedVisitedTextLink:
      mode === 'light' ? linkPurpleLight : linkPurpleDark,

    stateUnselectedDefault:
      mode === 'light' ? secondaryGrey50 : secondaryGrey60,
    stateUnselectedHover:
      mode === 'light'
        ? hexToRgbA(secondaryGrey50, 0.12)
        : hexToRgbA(secondaryGrey50, 0.2),
    stateUnselectedPressed:
      mode === 'light'
        ? hexToRgbA(secondaryGrey50, 0.16)
        : hexToRgbA(secondaryGrey50, 0.25),
    stateDisabledSurface: mode === 'light' ? secondaryGrey20 : secondaryGrey100,

    overlay: hexToRgbA(primaryBlack, 0.5),
    overlayLoader:
      mode === 'light'
        ? hexToRgbA(primaryWhite, 0.3)
        : hexToRgbA(primaryBlack, 0.3)
  }

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

  return { palette, dsColor }
}

function hexToRgbA(
  hexCode: string | undefined = '',
  alpha: number = 1
): string {
  if (/^#([A-Fa-f0-9]{6})$/.test(hexCode)) {
    const hex: any = hexCode.replace('#', '0x')
    return `rgba(${(hex >> 16) & 255},${(hex >> 8) & 255},${
      hex & 255
    },${alpha})`
  }
  return hexCode
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
