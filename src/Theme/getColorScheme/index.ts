import { DsPalette } from '../../Types'
import { PALETTE } from '../../Constants'
import getLightModeColorScheme from './light'
import getDarkModeColorScheme from './dark'
import getHighContrastModeColorScheme from './highContrast'
import { DsColorScheme } from '../../Types/DsColorScheme'

export default function getColorScheme(colorPalette: DsPalette = PALETTE) {
  const mergedColorPalette: DsPalette = { ...PALETTE, ...colorPalette }

  const { lightDsColor, lightPalette } =
    getLightModeColorScheme(mergedColorPalette)
  const { darkDsColor, darkPalette } =
    getDarkModeColorScheme(mergedColorPalette)
  const { highContrastDsColor, highContrastPalette } =
    getHighContrastModeColorScheme(mergedColorPalette)

  const colorScheme: DsColorScheme = {
    light: {
      palette: lightPalette,
      ds: {
        colour: lightDsColor
      }
    },
    dark: {
      palette: darkPalette,
      ds: {
        colour: darkDsColor
      }
    },
    highContrast: {
      palette: highContrastPalette,
      ds: {
        colour: highContrastDsColor
      }
    }
  }

  return colorScheme
}
