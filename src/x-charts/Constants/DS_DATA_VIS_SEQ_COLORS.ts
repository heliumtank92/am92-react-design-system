import { SupportedColorScheme } from '@mui/material'
import { TDsDataVisColors } from '../Types/DsDataVisColors.Types'

export const DS_DATA_VIS_SEQ1_COLORS: TDsDataVisColors = {
  light: [
    '#692675',
    '#9636A7',
    '#B757C8',
    '#C578D3',
    '#CD8AD9',
    '#D9A5E2',
    '#E4C0EB'
  ],
  dark: [
    '#692675',
    '#9636A7',
    '#B757C8',
    '#C578D3',
    '#CD8AD9',
    '#D9A5E2',
    '#E4C0EB'
  ],
  highContrast: [
    '#692675',
    '#9636A7',
    '#B757C8',
    '#C578D3',
    '#CD8AD9',
    '#D9A5E2',
    '#E4C0EB'
  ]
}

export const DS_DATA_VIS_SEQ2_COLORS: TDsDataVisColors = {
  light: [
    '#6E1717',
    '#9D2121',
    '#CC2B2B',
    '#D84646',
    '#DD5F5F',
    '#E58484',
    '#EDA9A9'
  ],
  dark: [
    '#6E1717',
    '#9D2121',
    '#CC2B2B',
    '#D84646',
    '#DD5F5F',
    '#E58484',
    '#EDA9A9'
  ],
  highContrast: [
    '#6E1717',
    '#9D2121',
    '#CC2B2B',
    '#D84646',
    '#DD5F5F',
    '#E58484',
    '#EDA9A9'
  ]
}

export const DS_DATA_VIS_SEQ3_COLORS: TDsDataVisColors = {
  light: [
    '#134C45',
    '#1B6D63',
    '#238D81',
    '#29A597',
    '#31C4B3',
    '#5CD6C8',
    '#8DE2D8'
  ],
  dark: [
    '#134C45',
    '#1B6D63',
    '#238D81',
    '#29A597',
    '#31C4B3',
    '#5CD6C8',
    '#8DE2D8'
  ],
  highContrast: [
    '#134C45',
    '#1B6D63',
    '#238D81',
    '#29A597',
    '#31C4B3',
    '#5CD6C8',
    '#8DE2D8'
  ]
}

export const DS_DATA_VIS_SEQ4_COLORS: TDsDataVisColors = {
  light: [
    '#12265B',
    '#1A3683',
    '#2246AA',
    '#2750C2',
    '#3862D8',
    '#6686E1',
    '#94ABEA'
  ],
  dark: [
    '#12265B',
    '#1A3683',
    '#2246AA',
    '#2750C2',
    '#3862D8',
    '#6686E1',
    '#94ABEA'
  ],
  highContrast: [
    '#12265B',
    '#1A3683',
    '#2246AA',
    '#2750C2',
    '#3862D8',
    '#6686E1',
    '#94ABEA'
  ]
}

export const getDataVisSeq1Colors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] => DS_DATA_VIS_SEQ1_COLORS[mode] || []

export const getDataVisSeq2Colors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] => DS_DATA_VIS_SEQ2_COLORS[mode] || []

export const getDataVisSeq3Colors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] => DS_DATA_VIS_SEQ3_COLORS[mode] || []

export const getDataVisSeq4Colors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] => DS_DATA_VIS_SEQ4_COLORS[mode] || []
