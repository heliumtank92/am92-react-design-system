export type DsDataVisPaletteTokensArrayType =
  | 'category'
  | 'sequence1'
  | 'sequence2'
  | 'sequence3'
  | 'sequence4'

export type DsDataVisPaletteTokensStringType = 'success' | 'error'

export type DsDataVisPaletteTokens = DsDataVisPaletteTokensArrayType &
  DsDataVisPaletteTokensStringType

export interface DsDataVisPalette {
  dataVis?: Partial<Record<DsDataVisPaletteTokensArrayType, string[]>> &
    Partial<Record<DsDataVisPaletteTokensStringType, string>>
}
