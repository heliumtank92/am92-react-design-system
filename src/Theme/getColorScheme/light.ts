import { PaletteOptions } from '@mui/material'
import { DsColor, DsPalette } from '../../Types'
import { getPalette } from './getPalette'
import { hexToRgbA } from './util'

export default function getLightModeColorScheme(colorPalette: DsPalette) {
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

    errorRedDark,
    successGreenDark,
    warningOrangeDark,

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

  const lightDsColor: DsColor = {
    actionPrimary: primary,
    actionSecondary: secondary100,
    actionTertiary: tertiary100,

    surfaceBackground: primaryWhite,
    surfacePrimary: primaryWhite,
    surfaceSecondary: secondaryGrey10,
    surfaceTertiary: secondaryGrey100,

    typoPrimary: primaryBlackLight,
    typoSecondary: secondaryGrey80,
    typoTertiary: secondaryGrey60,
    typoActionPrimary: primary,
    typoActionSecondary: secondary100,
    typoActionTertiary: tertiary100,
    typoOnSurface: primaryWhite,
    typoDisabled: secondaryGrey50,
    typoTypical: typical,
    typoOnSurfaceDynamic: primaryWhite,

    neutral1: neutral1Light,
    neutral2: neutral2Light,
    neutral3: neutral3Light,
    neutral4: neutral4Light,
    neutral5: neutral5Light,
    neutral6: neutral6Light,

    iconNegative: errorRed,
    iconPositive: successGreen,
    iconWarning: warningOrange,
    iconActionPrimary: primary,
    iconActionSecondary: secondary100,
    iconActionTertiary: tertiary100,
    iconOnSurface: primaryWhite,
    iconDisabled: secondaryGrey50,
    iconDefault: secondaryGrey100,
    iconTypical: typical,
    iconOnSurfaceDynamic: primaryWhite,

    strokeDefault: secondaryGrey30,
    strokeSelected: secondary80,
    strokeSecondarySelected: tertiary60,
    strokeHover: secondary40,
    strokeDisabled: secondaryGrey50,
    strokeActive: secondaryGrey100,

    supportNegative: errorRed,
    supportPositive: successGreen,
    supportWarning: warningOrange,
    supportVariable: snackBlue,
    supportTypical: typical,

    supportNegativeNeutral: errorRedNeutralLight,
    supportPositiveNeutral: successGreenNeutralLight,
    supportWarningNeutral: warningOrangeNeutralLight,
    supportTypicalNeutral: snackBlueNeutralLight,

    stateSelectedPrimaryHover: hexToRgbA(secondary80, 0.08),
    stateSelectedPrimaryPressed: secondary40,
    stateSelectedSecondaryHover: tertiary10,
    stateSelectedSecondaryPressed: tertiary20,

    stateSelectedVisitedTextLink: linkPurpleLight,

    stateUnselectedDefault: secondaryGrey50,
    stateUnselectedHover: hexToRgbA(secondaryGrey50, 0.12),
    stateUnselectedPressed: hexToRgbA(secondaryGrey50, 0.16),
    stateDisabledSurface: secondaryGrey20,

    overlay: hexToRgbA(primaryBlack, 0.5),
    overlayLoader: hexToRgbA(primaryWhite, 0.3),
    dotLoader: secondary100
  }

  const lightPalette = getPalette(colorPalette, lightDsColor)

  return { lightDsColor, lightPalette }
}
