export default function getTypography (fontFamilyName = '') {
  const fontFamily = `"${fontFamilyName}", "Helvetica"`

  const dsTypoPrimitive = {
    primaryFont: fontFamilyName,
    fontFamily,

    fontSizeScorched: '76px',
    fontSizeTorrid: '56px',
    fontSizeBlazzing: '48px',
    fontSizeHot: '44px',
    fontSizeTropical: '40px',
    fontSizeWarm: '32px',
    fontSizeMild: '24px',
    fontSizeCool: '20px',
    fontSizeCold: '18px',
    fontSizeBitterCold: '16px',
    fontSizeFrigid: '14px',
    fontSizeFrostbite: '12px',
    fontSizeBlizzard: '11px',
    fontSizeIceAge: '10px',

    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightSemibold: '600',
    fontWeightBold: '700',
    fontWeightBoldItalic: '700',

    lineHeightIceAge: '10px',
    lineHeightGlacial: '8px',
    lineHeightGelid: '6px',
    lineHeightQuickFreeze: '4px',
    lineHeightDeepfreeze: '2px',
    lineHeightZero: '0px',

    characterSpacingArctic: '1',
    characterSpacingAlps: '0.32',
    characterSpacingHindukush: '0.24',
    characterSpacingHimalayas: '0.16',
    characterSpacingZero: '0',

    paragraphSpacing: '0px',
    casingUppercase: 'uppercase',
    casingNone: 'none'
  }

  const dsTypoComposite = {
    displayBoldLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeTorrid,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeTorrid} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    displayBoldMedium: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBlazzing,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBlazzing} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    displayBoldSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeTropical,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeTropical} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },

    displayBoldItalicLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeTorrid,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeTorrid} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    displayBoldItalicMedium: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBlazzing,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBlazzing} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    displayBoldItalicSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeTropical,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeTropical} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },

    headingBoldExtraLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeWarm,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeWarm} + ${dsTypoPrimitive.lineHeightIceAge})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    headingBoldLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeMild,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeMild} + ${dsTypoPrimitive.lineHeightGlacial})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldMedium: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCool,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeCool} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeCold} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldExtraSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBitterCold} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    subheadingSemiboldLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightSemibold,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrigid} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush,
      textTransform: dsTypoPrimitive.casingUppercase
    },
    subheadingSemiboldDefault: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightSemibold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush,
      textTransform: dsTypoPrimitive.casingUppercase
    },

    headingBoldItalicExtraLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeWarm,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeWarm} + ${dsTypoPrimitive.lineHeightIceAge})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    headingBoldItalicLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeMild,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeMild} + ${dsTypoPrimitive.lineHeightGlacial})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicMedium: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCool,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeCool} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeCold} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicExtraSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBitterCold} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },

    bodyRegularLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBitterCold} + ${dsTypoPrimitive.lineHeightGlacial})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    bodyRegularMedium: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrigid} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyRegularSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },

    bodyBoldLarge: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBitterCold} + ${dsTypoPrimitive.lineHeightGlacial})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyBoldMedium: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrigid} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyBoldSmall: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },

    supportRegularInfo: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeBlizzard,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBlizzard} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    supportRegularFootnote: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeIceAge,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeIceAge} + ${dsTypoPrimitive.lineHeightDeepfreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    supportBoldTextButton: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightZero})`,
      letterSpacing: dsTypoPrimitive.characterSpacingArctic,
      textTransform: dsTypoPrimitive.casingUppercase
    },
    supportRegularMetadata: {
      fontFamily,
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightZero})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps,
      textTransform: dsTypoPrimitive.casingUppercase
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
    fontWeightRegular: dsTypo.fontWeightRegular,
    fontWeightMedium: dsTypo.fontWeightMedium,
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
