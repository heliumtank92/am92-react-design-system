import { DsColor, DsPalette } from '../../Types'
import { getPalette } from './getPalette'
import { hexToRgbA } from './util'

export default function getHighContrastModeColorScheme(
  colorPalette: DsPalette
) {
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
    neutral6Dark,

    highContrast1,
    highContrast2,
    highContrast3,
    highContrast4
  } = colorPalette

  const highContrastDsColor: DsColor = {
    actionPrimary: highContrast1,
    actionSecondary: highContrast1,
    actionTertiary: highContrast1,

    surfaceBackground: primaryBlackLight,
    surfacePrimary: primaryBlack,
    surfaceSecondary: primaryBlackLight,
    surfaceTertiary: primaryBlackLight,

    typoPrimary: primaryWhite,
    typoSecondary: primaryWhite,
    typoTertiary: secondaryGrey30,
    typoActionPrimary: highContrast1,
    typoActionSecondary: highContrast1,
    typoActionTertiary: highContrast1,
    typoOnSurface: primaryBlackLight,
    typoDisabled: secondaryGrey60,
    typoTypical: highContrast2,

    neutral1: neutral1Dark,
    neutral2: neutral1Dark,
    neutral3: neutral1Dark,
    neutral4: neutral1Dark,
    neutral5: neutral1Dark,
    neutral6: neutral1Dark,

    iconNegative: highContrast2,
    iconPositive: highContrast2,
    iconWarning: highContrast2,
    iconActionPrimary: highContrast1,
    iconActionSecondary: highContrast1,
    iconActionTertiary: highContrast1,
    iconOnSurface: primaryWhite,
    iconDisabled: secondaryGrey60,
    iconDefault: primaryWhite,
    iconTypical: highContrast2,

    strokeDefault: secondaryGrey10,
    strokeSelected: highContrast1,
    strokeSecondarySelected: highContrast1,
    strokeHover: highContrast1,
    strokeDisabled: secondaryGrey60,
    strokeActive: primaryWhite,

    supportNegative: highContrast2,
    supportPositive: highContrast2,
    supportWarning: highContrast2,
    supportVariable: highContrast2,
    supportTypical: highContrast2,

    supportNegativeNeutral: neutral1Dark,
    supportPositiveNeutral: neutral1Dark,
    supportWarningNeutral: neutral1Dark,
    supportTypicalNeutral: neutral1Dark,

    stateSelectedPrimaryHover: hexToRgbA(highContrast4, 0.2),
    stateSelectedPrimaryPressed: highContrast3,
    stateSelectedSecondaryHover: '#081919',
    stateSelectedSecondaryPressed: '#154B3F',

    stateSelectedVisitedTextLink: linkPurpleDark,

    stateUnselectedDefault: secondaryGrey60,
    stateUnselectedHover: hexToRgbA(secondaryGrey50, 0.2),
    stateUnselectedPressed: hexToRgbA(secondaryGrey50, 0.25),
    stateDisabledSurface: secondaryGrey100,

    overlay: hexToRgbA(primaryBlack, 0.5),
    overlayLoader: hexToRgbA(primaryBlack, 0.3),
    dotLoader: primaryWhite
  }

  const highContrastPalette = getPalette(colorPalette, highContrastDsColor)

  return { highContrastDsColor, highContrastPalette }
}
