import { DsSpacing, DsSpacingKeys } from '../Types'

const SPACE_COEFFICIENT = 4

const dsSpacingCssVars: DsSpacing = {
  zero: 0,
  deepFreeze: 2,
  quickFreeze: 4,
  glacial: 8,
  frostbite: 12,
  bitterCold: 16,
  cool: 20,
  mild: 24,
  pleasant: 28,
  warm: 32,
  tepid: 36,
  tropical: 40,
  hot: 44,
  blazing: 48,
  molten: 64,
  superheated: 80,
  meltdown: 96,
  whiteHot: 112,
  plasma: 128
}

const dsSpacing: DsSpacing = Object.keys(dsSpacingCssVars).reduce(
  (accumaltor: DsSpacing, currentValue) => {
    accumaltor[currentValue as DsSpacingKeys] =
      dsSpacingCssVars[currentValue as DsSpacingKeys] / SPACE_COEFFICIENT
    return accumaltor
  },
  {} as DsSpacing
)

export { SPACE_COEFFICIENT, dsSpacingCssVars, getSpacingPX }

export default dsSpacing

function getSpacingPX(multiplier: number): string {
  return `${SPACE_COEFFICIENT * multiplier}px`
}
