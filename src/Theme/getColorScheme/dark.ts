import { DsColor, DsPalette } from '../../Types'
import { getPalette } from './getPalette'
import { hexToRgbA } from './util'

export default function getDarkModeColorScheme(colorPalette: DsPalette) {
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

  const darkDsColor: DsColor = {
    actionPrimary: primary,
    actionSecondary: secondary100,
    actionTertiary: tertiary100,

    surfaceBackground: primaryBlackLight,
    surfacePrimary: primaryBlack,
    surfaceSecondary: secondaryGrey100,
    surfaceTertiary: secondaryGrey10,

    typoPrimary: secondaryGrey10,
    typoSecondary: secondaryGrey30,
    typoTertiary: secondaryGrey50,
    typoActionPrimary: primaryWhite,
    typoActionSecondary: secondary100,
    typoActionTertiary: tertiary10,
    typoOnSurface: primaryWhite,
    typoDisabled: secondaryGrey60,
    typoTypical: typical,
    typoOnSurfaceDynamic: primaryBlackLight,

    neutral1: neutral1Dark,
    neutral2: neutral2Dark,
    neutral3: neutral3Dark,
    neutral4: neutral4Dark,
    neutral5: neutral5Dark,
    neutral6: neutral6Dark,

    iconNegative: errorRedDark,
    iconPositive: successGreenDark,
    iconWarning: warningOrangeDark,
    iconActionPrimary: primary,
    iconActionSecondary: secondary100,
    iconActionTertiary: tertiary10,
    iconOnSurface: primaryWhite,
    iconDisabled: secondaryGrey60,
    iconDefault: primaryWhite,
    iconTypical: typical,
    iconOnSurfaceDynamic: primaryBlackLight,

    strokeDefault: secondaryGrey80,
    strokeSelected: secondary60,
    strokeSecondarySelected: tertiary40,
    strokeHover: secondary40,
    strokeDisabled: secondaryGrey60,
    strokeActive: secondaryGrey10,

    supportNegative: errorRedDark,
    supportPositive: successGreenDark,
    supportWarning: warningOrangeDark,
    supportVariable: snackBlue,
    supportTypical: typical,

    supportNegativeNeutral: errorRedNeutralDark,
    supportPositiveNeutral: successGreenNeutralDark,
    supportWarningNeutral: warningOrangeNeutralDark,
    supportTypicalNeutral: snackBlueNeutralDark,

    stateSelectedPrimaryHover: hexToRgbA(secondary40, 0.2),
    stateSelectedPrimaryPressed: secondary40,
    stateSelectedSecondaryHover: '#081919', // TODO
    stateSelectedSecondaryPressed: '#154B3F', // TODO

    stateSelectedVisitedTextLink: linkPurpleDark,

    stateUnselectedDefault: secondaryGrey60,
    stateUnselectedHover: hexToRgbA(secondaryGrey50, 0.2),
    stateUnselectedPressed: hexToRgbA(secondaryGrey50, 0.25),
    stateDisabledSurface: secondaryGrey100,

    overlay: hexToRgbA(primaryBlack, 0.5),
    overlayLoader: hexToRgbA(primaryBlack, 0.3),
    dotLoader: primaryWhite
  }

  const darkPalette = getPalette(colorPalette, darkDsColor)

  return { darkDsColor, darkPalette }
}
