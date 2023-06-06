export type DsFontSizeTokens =
  | 'scorched'
  | 'torrid'
  | 'blazzing'
  | 'hot'
  | 'tropical'
  | 'warm'
  | 'mild'
  | 'cool'
  | 'cold'
  | 'bitterCold'
  | 'frigid'
  | 'frostbite'
  | 'blizzard'
  | 'iceAge'

export type DsFontSizeClassTokens =
  | 'scorched'
  | 'torrid'
  | 'blazzing'
  | 'hot'
  | 'tropical'
  | 'warm'
  | 'mild'
  | 'cool'
  | 'cold'
  | 'bitterCold'
  | 'frigid'
  | 'frostbite'
  | 'blizzard'
  | 'iceAge'

export type DsTypographyTokens =
  | 'displayBoldLarge'
  | 'displayBoldMedium'
  | 'displayBoldSmall'
  | 'displayBoldItalicLarge'
  | 'displayBoldItalicMedium'
  | 'displayBoldItalicSmall'
  | 'headingBoldExtraLarge'
  | 'headingBoldLarge'
  | 'headingBoldMedium'
  | 'headingBoldSmall'
  | 'headingBoldExtraSmall'
  | 'subheadingSemiboldLarge'
  | 'subheadingSemiboldDefault'
  | 'headingBoldItalicExtraLarge'
  | 'headingBoldItalicLarge'
  | 'headingBoldItalicMedium'
  | 'headingBoldItalicSmall'
  | 'headingBoldItalicExtraSmall'
  | 'bodyRegularLarge'
  | 'bodyRegularMedium'
  | 'bodyRegularSmall'
  | 'bodyBoldLarge'
  | 'bodyBoldMedium'
  | 'bodyBoldSmall'
  | 'supportRegularInfo'
  | 'supportRegularFootnote'
  | 'supportBoldTextButton'
  | 'supportRegularMetadata'

interface DsFontSizeGenerics<T> extends Partial<Record<DsFontSizeTokens, T>> {}
interface DsFontSizeClassGenerics<T>
  extends Partial<Record<DsFontSizeClassTokens, T>> {}
interface DsTypographyGenerics<T>
  extends Partial<Record<DsTypographyTokens, T>> {}

export interface DsFontSize extends DsFontSizeGenerics<string> {}
export interface DsTypographyVariants
  extends DsTypographyGenerics<React.CSSProperties> {}
export interface DsFontSizeOverides extends DsFontSizeGenerics<true> {}
export interface DsTypographyOverides extends DsTypographyGenerics<true> {
  h1: false
  h2: false
  h3: false
  h4: false
  h5: false
  h6: false
  subtitle1: false
  subtitle2: false
  body1: false
  body2: false
  button: false
  caption: false
  overline: false
}
export interface DsFontSizeClass extends DsFontSizeClassGenerics<string> {}
