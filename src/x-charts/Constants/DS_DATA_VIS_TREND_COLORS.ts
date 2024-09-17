import { SupportedColorScheme } from '@mui/material'
import { TDsDataVisColors } from '../Types/DsDataVisColors.Types'

export const DS_DATA_VIS_POSITIVE_COLORS: TDsDataVisColors = {
  light: ['#278829'],
  dark: ['#62D264'],
  highContrast: ['#62D264']
}

export const DS_DATA_VIS_WARNING_COLORS: TDsDataVisColors = {
  light: ['#D84008'],
  dark: ['#F87647'],
  highContrast: ['#F87647']
}

export const DS_DATA_VIS_ERROR_COLORS: TDsDataVisColors = {
  light: ['#EB0000'],
  dark: ['#FF6C6C'],
  highContrast: ['#FF6C6C']
}

export const DS_DATA_VIS_POSITIVE_NEUTRAL_COLORS: TDsDataVisColors = {
  light: ['#EFF9EB'],
  dark: ['#0C1907'],
  highContrast: ['#0C1907']
}

export const DS_DATA_VIS_WARNING_NEUTRAL_COLORS: TDsDataVisColors = {
  light: ['#F9F1EB'],
  dark: ['#322A0F'],
  highContrast: ['#322A0F']
}

export const DS_DATA_VIS_ERROR_NEUTRAL_COLORS: TDsDataVisColors = {
  light: ['#F9EBEF'],
  dark: ['#320F19'],
  highContrast: ['#320F19']
}

export const getDataVisTrendPositiveColors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] =>
  DS_DATA_VIS_POSITIVE_COLORS[mode] || []

export const getDataVisTrendWarningColors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] =>
  DS_DATA_VIS_WARNING_COLORS[mode] || []

export const getDataVisTrendErrorColors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] =>
  DS_DATA_VIS_ERROR_COLORS[mode] || []

export const getDataVisTrendPositiveNeutralColors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] =>
  DS_DATA_VIS_POSITIVE_NEUTRAL_COLORS[mode] || []

export const getDataVisTrendWarningNeutralColors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] =>
  DS_DATA_VIS_WARNING_NEUTRAL_COLORS[mode] || []

export const getDataVisTrendErrorNeutralColors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] =>
  DS_DATA_VIS_ERROR_NEUTRAL_COLORS[mode] || []
