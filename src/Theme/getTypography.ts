interface DsTypographyVariants {
  displayBoldLarge: React.CSSProperties
  displayBoldMedium: React.CSSProperties
  displayBoldSmall: React.CSSProperties
  displayBoldItalicLarge: React.CSSProperties
  displayBoldItalicMedium: React.CSSProperties
  displayBoldItalicSmall: React.CSSProperties
  headingBoldExtraLarge: React.CSSProperties
  headingBoldLarge: React.CSSProperties
  headingBoldMedium: React.CSSProperties
  headingBoldSmall: React.CSSProperties
  headingBoldExtraSmall: React.CSSProperties
  subheadingSemiboldLarge: React.CSSProperties
  subheadingSemiboldDefault: React.CSSProperties
  headingBoldItalicExtraLarge: React.CSSProperties
  headingBoldItalicLarge: React.CSSProperties
  headingBoldItalicMedium: React.CSSProperties
  headingBoldItalicSmall: React.CSSProperties
  headingBoldItalicExtraSmall: React.CSSProperties
  bodyRegularLarge: React.CSSProperties
  bodyRegularMedium: React.CSSProperties
  bodyRegularSmall: React.CSSProperties
  bodyBoldLarge: React.CSSProperties
  bodyBoldMedium: React.CSSProperties
  bodyBoldSmall: React.CSSProperties
  supportRegularInfo: React.CSSProperties
  supportRegularFootnote: React.CSSProperties
  supportBoldTextButton: React.CSSProperties
  supportRegularMetadata: React.CSSProperties
}
export default function getTypography(
  fontFamilyName: string = ''
): any {
  const fontFamily = `"${fontFamilyName}", "Helvetica"`

  const dsTypoPrimitive: any = {
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

  const dsTypoComposite: DsTypographyVariants = {
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

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayBoldLarge: React.CSSProperties
    displayBoldMedium: React.CSSProperties
    displayBoldSmall: React.CSSProperties
    displayBoldItalicLarge: React.CSSProperties
    displayBoldItalicMedium: React.CSSProperties
    displayBoldItalicSmall: React.CSSProperties
    headingBoldExtraLarge: React.CSSProperties
    headingBoldLarge: React.CSSProperties
    headingBoldMedium: React.CSSProperties
    headingBoldSmall: React.CSSProperties
    headingBoldExtraSmall: React.CSSProperties
    subheadingSemiboldLarge: React.CSSProperties
    subheadingSemiboldDefault: React.CSSProperties
    headingBoldItalicExtraLarge: React.CSSProperties
    headingBoldItalicLarge: React.CSSProperties
    headingBoldItalicMedium: React.CSSProperties
    headingBoldItalicSmall: React.CSSProperties
    headingBoldItalicExtraSmall: React.CSSProperties
    bodyRegularLarge: React.CSSProperties
    bodyRegularMedium: React.CSSProperties
    bodyRegularSmall: React.CSSProperties
    bodyBoldLarge: React.CSSProperties
    bodyBoldMedium: React.CSSProperties
    bodyBoldSmall: React.CSSProperties
    supportRegularInfo: React.CSSProperties
    supportRegularFootnote: React.CSSProperties
    supportBoldTextButton: React.CSSProperties
    supportRegularMetadata: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    displayBoldLarge: React.CSSProperties
    displayBoldMedium: React.CSSProperties
    displayBoldSmall: React.CSSProperties
    displayBoldItalicLarge: React.CSSProperties
    displayBoldItalicMedium: React.CSSProperties
    displayBoldItalicSmall: React.CSSProperties
    headingBoldExtraLarge: React.CSSProperties
    headingBoldLarge: React.CSSProperties
    headingBoldMedium: React.CSSProperties
    headingBoldSmall: React.CSSProperties
    headingBoldExtraSmall: React.CSSProperties
    subheadingSemiboldLarge: React.CSSProperties
    subheadingSemiboldDefault: React.CSSProperties
    headingBoldItalicExtraLarge: React.CSSProperties
    headingBoldItalicLarge: React.CSSProperties
    headingBoldItalicMedium: React.CSSProperties
    headingBoldItalicSmall: React.CSSProperties
    headingBoldItalicExtraSmall: React.CSSProperties
    bodyRegularLarge: React.CSSProperties
    bodyRegularMedium: React.CSSProperties
    bodyRegularSmall: React.CSSProperties
    bodyBoldLarge: React.CSSProperties
    bodyBoldMedium: React.CSSProperties
    bodyBoldSmall: React.CSSProperties
    supportRegularInfo: React.CSSProperties
    supportRegularFootnote: React.CSSProperties
    supportBoldTextButton: React.CSSProperties
    supportRegularMetadata: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayBoldLarge: true
    displayBoldMedium: true
    displayBoldSmall: true
    displayBoldItalicLarge: true
    displayBoldItalicMedium: true
    displayBoldItalicSmall: true
    headingBoldExtraLarge: true
    headingBoldLarge: true
    headingBoldMedium: true
    headingBoldSmall: true
    headingBoldExtraSmall: true
    subheadingSemiboldLarge: true
    subheadingSemiboldDefault: true
    headingBoldItalicExtraLarge: true
    headingBoldItalicLarge: true
    headingBoldItalicMedium: true
    headingBoldItalicSmall: true
    headingBoldItalicExtraSmall: true
    bodyRegularLarge: true
    bodyRegularMedium: true
    bodyRegularSmall: true
    bodyBoldLarge: true
    bodyBoldMedium: true
    bodyBoldSmall: true
    supportRegularInfo: true
    supportRegularFootnote: true
    supportBoldTextButton: true
    supportRegularMetadata: true
  }
}
