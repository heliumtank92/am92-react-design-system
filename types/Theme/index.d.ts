export default function getTheme(palette?: {
    primary: string;
    primaryBlack: string;
    primaryBlackLight: string;
    primaryWhite: string;
    secondary100: string;
    secondary80: string;
    secondary60: string;
    secondary40: string;
    secondary20: string;
    secondaryGrey100: string;
    secondaryGrey90: string;
    secondaryGrey80: string;
    secondaryGrey70: string;
    secondaryGrey60: string;
    secondaryGrey50: string;
    secondaryGrey40: string;
    secondaryGrey30: string;
    secondaryGrey20: string;
    secondaryGrey10: string;
    tertiary100: string;
    tertiary80: string;
    tertiary60: string;
    tertiary40: string;
    tertiary20: string;
    tertiary10: string;
    errorRed: string;
    successGreen: string;
    warningOrange: string;
    snackBlue: string;
    typical: string;
    errorRedNeutralLight: string;
    successGreenNeutralLight: string;
    warningOrangeNeutralLight: string;
    snackBlueNeutralLight: string;
    linkPurpleLight: string;
    errorRedNeutralDark: string;
    successGreenNeutralDark: string;
    warningOrangeNeutralDark: string;
    snackBlueNeutralDark: string;
    linkPurpleDark: string;
    neutral1Light: string;
    neutral2Light: string;
    neutral3Light: string;
    neutral4Light: string;
    neutral5Light: string;
    neutral6Light: string;
    neutral1Dark: string;
    neutral2Dark: string;
    neutral3Dark: string;
    neutral4Dark: string;
    neutral5Dark: string;
    neutral6Dark: string;
}, fontFamilyName?: string): Omit<import("@mui/material/styles").Theme, "palette"> & import("@mui/material/styles").CssVarsTheme;
import dsSpacing from "./spacing";
import { SPACE_COEFFICIENT } from "./spacing";
export { dsSpacing, SPACE_COEFFICIENT };
