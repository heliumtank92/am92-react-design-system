import { SupportedColorScheme } from '@mui/material'
import { TDsDataVisColors } from '../Types/DsDataVisColors.Types'

export const DS_DATA_VIS_CAT_COLORS: TDsDataVisColors = {
  light: [
    '#C578D3',
    '#D84646',
    '#5273CC',
    '#D87D23',
    '#29A597',
    '#2750C2',
    '#A03333'
  ],
  dark: [
    '#C578D3',
    '#D84646',
    '#5273CC',
    '#D87D23',
    '#29A597',
    '#2750C2',
    '#A03333'
  ],
  highContrast: [
    '#C578D3',
    '#D84646',
    '#5273CC',
    '#D87D23',
    '#29A597',
    '#2750C2',
    '#A03333'
  ]
}

export const getDataVisCatColors = (
  mode: SupportedColorScheme
): TDsDataVisColors[SupportedColorScheme] => DS_DATA_VIS_CAT_COLORS[mode] || []
