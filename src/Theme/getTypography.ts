import { DsColor, DsTypographyVariants } from '../Types'

export default function getTypography(fontFamilyName: string = '') {
  const fontFamily = `"${fontFamilyName}", "Helvetica"`

  const dsTypoPrimitive = {
    primaryFont: fontFamilyName,
    fontFamily,

    fontSizeScorched: '4.75rem',
    fontSizeTorrid: '3.5rem',
    fontSizeBlazzing: '3rem',
    fontSizeHot: '2.75rem',
    fontSizeTropical: '2.5rem',
    fontSizeWarm: '2rem',
    fontSizeMild: '1.5rem',
    fontSizeCool: '1.25rem',
    fontSizeCold: '1.125rem',
    fontSizeBitterCold: '1rem',
    fontSizeFrigid: '0.875rem',
    fontSizeFrostbite: '0.75rem',
    fontSizeBlizzard: '0.688rem',
    fontSizeIceAge: '0.625rem',

    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightSemibold: '600',
    fontWeightBold: '700',

    lineHeightIceAge: '10px',
    lineHeightGlacial: '8px',
    lineHeightGelid: '6px',
    lineHeightQuickFreeze: '4px',
    lineHeightDeepfreeze: '2px',
    lineHeightZero: '0px',

    characterSpacingArctic: '1px',
    characterSpacingAlps: '0.32px',
    characterSpacingHindukush: '0.24px',
    characterSpacingHimalayas: '0.16px',
    characterSpacingZero: '0px',

    paragraphSpacing: '0px'
  }

  const dsTypoComposite: DsTypographyVariants = {
    displayBoldLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeTorrid,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeTorrid,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    displayBoldMedium: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBlazzing,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeBlazzing,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    displayBoldSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeTropical,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeTropical,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },

    displayBoldItalicLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeTorrid,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeTorrid,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    displayBoldItalicMedium: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBlazzing,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeBlazzing,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    displayBoldItalicSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeTropical,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeTropical,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },

    headingBoldExtraLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeWarm,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeWarm,
        dsTypoPrimitive.lineHeightIceAge
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    headingBoldLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeMild,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeMild,
        dsTypoPrimitive.lineHeightGlacial
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldMedium: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCool,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeCool,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCold,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeCold,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldExtraSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeBitterCold,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    subheadingSemiboldLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightSemibold,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeFrigid,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush,
      textTransform: 'uppercase'
    },
    subheadingSemiboldDefault: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightSemibold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeFrostbite,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush,
      textTransform: 'uppercase'
    },

    headingBoldItalicExtraLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeWarm,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeWarm,
        dsTypoPrimitive.lineHeightIceAge
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    headingBoldItalicLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeMild,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeMild,
        dsTypoPrimitive.lineHeightGlacial
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicMedium: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCool,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeCool,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCold,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeCold,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicExtraSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeBitterCold,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },

    bodyRegularLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeBitterCold,
        dsTypoPrimitive.lineHeightGlacial
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    bodyRegularMedium: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeFrigid,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyRegularSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeFrostbite,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },

    bodyBoldLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeBitterCold,
        dsTypoPrimitive.lineHeightGlacial
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyBoldMedium: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeFrigid,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyBoldSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeFrostbite,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },

    supportRegularInfo: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeBlizzard,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeBlizzard,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    supportRegularFootnote: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeIceAge,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeIceAge,
        dsTypoPrimitive.lineHeightDeepfreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    supportBoldTextButton: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeFrostbite,
        dsTypoPrimitive.lineHeightZero
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingArctic,
      textTransform: 'uppercase'
    },
    supportRegularMetadata: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        dsTypoPrimitive.fontSizeFrostbite,
        dsTypoPrimitive.lineHeightZero
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps,
      textTransform: 'uppercase'
    }
  }

  const dsTypo = {
    ...dsTypoPrimitive,
    ...dsTypoComposite
  }

  const typography = {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily,
    fontWeightLight: dsTypo.fontWeightLight,
    fontWeightRegular: dsTypo.fontWeightRegular,
    fontWeightMedium: dsTypo.fontWeightSemibold,
    fontWeightBold: dsTypo.fontWeightBold,

    displayBoldLarge: dsTypo.displayBoldLarge,
    displayBoldMedium: dsTypo.displayBoldMedium,
    displayBoldSmall: dsTypo.displayBoldSmall,

    displayBoldItalicLarge: dsTypo.displayBoldItalicLarge,
    displayBoldItalicMedium: dsTypo.displayBoldItalicMedium,
    displayBoldItalicSmall: dsTypo.displayBoldItalicSmall,

    headingBoldExtraLarge: dsTypo.headingBoldExtraLarge,
    headingBoldLarge: dsTypo.headingBoldLarge,
    headingBoldMedium: dsTypo.headingBoldMedium,
    headingBoldSmall: dsTypo.headingBoldSmall,
    headingBoldExtraSmall: dsTypo.headingBoldExtraSmall,
    subheadingSemiboldLarge: dsTypo.subheadingSemiboldLarge,
    subheadingSemiboldDefault: dsTypo.subheadingSemiboldDefault,

    headingBoldItalicExtraLarge: dsTypo.headingBoldItalicExtraLarge,
    headingBoldItalicLarge: dsTypo.headingBoldItalicLarge,
    headingBoldItalicMedium: dsTypo.headingBoldItalicMedium,
    headingBoldItalicSmall: dsTypo.headingBoldItalicSmall,
    headingBoldItalicExtraSmall: dsTypo.headingBoldItalicExtraSmall,

    bodyRegularLarge: dsTypo.bodyRegularLarge,
    bodyRegularMedium: dsTypo.bodyRegularMedium,
    bodyRegularSmall: dsTypo.bodyRegularSmall,

    bodyBoldLarge: dsTypo.bodyBoldLarge,
    bodyBoldMedium: dsTypo.bodyBoldMedium,
    bodyBoldSmall: dsTypo.bodyBoldSmall,

    supportRegularInfo: dsTypo.supportRegularInfo,
    supportRegularFootnote: dsTypo.supportRegularFootnote,
    supportBoldTextButton: dsTypo.supportBoldTextButton,
    supportRegularMetadata: dsTypo.supportRegularMetadata
  }

  return { dsTypo, typography }
}

function getFontSizePixelNumber(fontSize: string): number {
  let getFontSizePixel
  if (fontSize.includes('rem')) {
    getFontSizePixel = parseInt(fontSize.replace('rem', ''), 10) * 16
    return getFontSizePixel
  }

  getFontSizePixel = parseInt(fontSize.replace('px', ''))
  return getFontSizePixel
}

function lineHeightCalculator(fontSize: string, lineHeightAdjustment: string) {
  const fontSizeNumber = getFontSizePixelNumber(fontSize)
  const lineHeightAdjustmentNumber = parseInt(
    lineHeightAdjustment.replace('px', '')
  )
  const lineHeight =
    (fontSizeNumber + lineHeightAdjustmentNumber) / fontSizeNumber
  return lineHeight
}

declare module '@mui/material/styles' {
  interface TypographyVariants extends DsTypographyVariants {}

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions extends DsTypographyVariants {}
}
