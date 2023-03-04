export default function getTypography (fontFamilyName = '') {
  const fontFamily = `"${fontFamilyName}", "Helvetica"`

  const DsTypographyPrimitive = {
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

    fontWeightRegular: 400,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    fontWeightBoldItalic: 700,

    lineHeightIceAge: '10px',
    lineHeightGlacial: '8px',
    lineHeightGelid: '6px',
    lineHeightQuickFreeze: '4px',
    lineHeightDeepfreeze: '2px',
    lineHeightZero: '0px',

    characterSpacingArctic: 1,
    characterSpacingAlps: 0.32,
    characterSpacingHindukush: 0.24,
    characterSpacingHimalayas: 0.16,
    characterSpacingZero: 0,

    paragraphSpacing: '0px',
    casingUppercase: 'uppercase',
    casingNone: 'none'
  }

  const DsTypographyComposite = {
    displayBoldLarge: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeTorrid,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeTorrid} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingZero
    },
    displayBoldMedium: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeBlazzing,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeBlazzing} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingZero
    },
    displayBoldSmall: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeTropical,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeTropical} + ${DsTypographyPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingZero
    },

    displayBoldItalicLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeTorrid,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeTorrid} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingZero
    },
    displayBoldItalicMedium: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeBlazzing,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeBlazzing} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingZero
    },
    displayBoldItalicSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeTropical,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeTropical} + ${DsTypographyPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingZero
    },

    headingBoldExtraLarge: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeWarm,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeWarm} + ${DsTypographyPrimitive.lineHeightIceAge})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingZero
    },
    headingBoldLarge: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeMild,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeMild} + ${DsTypographyPrimitive.lineHeightGlacial})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },
    headingBoldMedium: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeCool,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeCool} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },
    headingBoldSmall: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeCold,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeCold} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },
    headingBoldExtraSmall: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeBitterCold} + ${DsTypographyPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },
    subheadingSemiboldLarge: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightSemibold,
      fontSize: DsTypographyPrimitive.fontSizeFrigid,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeFrigid} + ${DsTypographyPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHindukush,
      textTransform: DsTypographyPrimitive.casingUppercase
    },
    subheadingSemiboldDefault: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightSemibold,
      fontSize: DsTypographyPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeFrostbite} + ${DsTypographyPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHindukush,
      textTransform: DsTypographyPrimitive.casingUppercase
    },

    headingBoldItalicExtraLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeWarm,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeWarm} + ${DsTypographyPrimitive.lineHeightIceAge})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingZero
    },
    headingBoldItalicLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeMild,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeMild} + ${DsTypographyPrimitive.lineHeightGlacial})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicMedium: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeCool,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeCool} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeCold,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeCold} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },
    headingBoldItalicExtraSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeBitterCold} + ${DsTypographyPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },

    bodyRegularLarge: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightRegular,
      fontSize: DsTypographyPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeBitterCold} + ${DsTypographyPrimitive.lineHeightGlacial})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHimalayas
    },
    bodyRegularMedium: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightRegular,
      fontSize: DsTypographyPrimitive.fontSizeFrigid,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeFrigid} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHindukush
    },
    bodyRegularSmall: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightRegular,
      fontSize: DsTypographyPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeFrostbite} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingAlps
    },

    bodyBoldLarge: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeBitterCold} + ${DsTypographyPrimitive.lineHeightGlacial})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHindukush
    },
    bodyBoldMedium: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeFrigid,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeFrigid} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingHindukush
    },
    bodyBoldSmall: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeFrostbite} + ${DsTypographyPrimitive.lineHeightGelid})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingAlps
    },

    supportRegularInfo: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightRegular,
      fontSize: DsTypographyPrimitive.fontSizeBlizzard,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeBlizzard} + ${DsTypographyPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingAlps
    },
    supportRegularFootnote: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightRegular,
      fontSize: DsTypographyPrimitive.fontSizeIceAge,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeIceAge} + ${DsTypographyPrimitive.lineHeightDeepfreeze})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingAlps
    },
    supportBoldTextButton: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightBold,
      fontSize: DsTypographyPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeFrostbite} + ${DsTypographyPrimitive.lineHeightZero})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingArctic,
      textTransform: DsTypographyPrimitive.casingUppercase
    },
    supportRegularMetadata: {
      fontFamily,
      fontWeight: DsTypographyPrimitive.fontWeightRegular,
      fontSize: DsTypographyPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${DsTypographyPrimitive.fontSizeFrostbite} + ${DsTypographyPrimitive.lineHeightZero})`,
      letterSpacing: DsTypographyPrimitive.characterSpacingAlps,
      textTransform: DsTypographyPrimitive.casingUppercase
    }
  }

  const DsTypography = {
    ...DsTypographyPrimitive,
    ...DsTypographyComposite
  }

  const typography = {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily,
    fontWeightRegular: DsTypography.fontWeightRegular,
    fontWeightMedium: DsTypography.fontWeightMedium,
    fontWeightBold: DsTypography.fontWeightBold,

    displayBoldLarge: DsTypography.displayBoldLarge,
    displayBoldMedium: DsTypography.displayBoldMedium,
    displayBoldSmall: DsTypography.displayBoldSmall,

    displayBoldItalicLarge: DsTypography.displayBoldItalicLarge,
    displayBoldItalicMedium: DsTypography.displayBoldItalicMedium,
    displayBoldItalicSmall: DsTypography.displayBoldItalicSmall,

    headingBoldExtraLarge: DsTypography.headingBoldExtraLarge,
    headingBoldLarge: DsTypography.headingBoldLarge,
    headingBoldMedium: DsTypography.headingBoldMedium,
    headingBoldSmall: DsTypography.headingBoldSmall,
    headingBoldExtraSmall: DsTypography.headingBoldExtraSmall,
    subheadingSemiboldLarge: DsTypography.subheadingSemiboldLarge,
    subheadingSemiboldDefault: DsTypography.subheadingSemiboldDefault,

    headingBoldItalicExtraLarge: DsTypography.headingBoldItalicExtraLarge,
    headingBoldItalicLarge: DsTypography.headingBoldItalicLarge,
    headingBoldItalicMedium: DsTypography.headingBoldItalicMedium,
    headingBoldItalicSmall: DsTypography.headingBoldItalicSmall,
    headingBoldItalicExtraSmall: DsTypography.headingBoldItalicExtraSmall,

    bodyRegularLarge: DsTypography.bodyRegularLarge,
    bodyRegularMedium: DsTypography.bodyRegularMedium,
    bodyRegularSmall: DsTypography.bodyRegularSmall,

    bodyBoldLarge: DsTypography.bodyBoldLarge,
    bodyBoldMedium: DsTypography.bodyBoldMedium,
    bodyBoldSmall: DsTypography.bodyBoldSmall,

    supportRegularInfo: DsTypography.supportRegularInfo,
    supportRegularFootnote: DsTypography.supportRegularFootnote,
    supportBoldTextButton: DsTypography.supportBoldTextButton,
    supportRegularMetadata: DsTypography.supportRegularMetadata
  }

  return { DsTypography, typography }
}
