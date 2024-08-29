import {
  DsDataVisPaletteTokensArrayType,
  DsDataVisPaletteTokensStringType
} from './DsDataVisPalette'

export interface DsDataVisColorGenerics<AT, ST>
  extends Partial<Record<DsDataVisPaletteTokensArrayType, AT>>,
    Partial<Record<DsDataVisPaletteTokensStringType, ST>> {}

export interface DsDataVisColor
  extends DsDataVisColorGenerics<string[], string> {}

export interface DsDataVisColorOverrides
  extends DsDataVisColorGenerics<true, true> {}
