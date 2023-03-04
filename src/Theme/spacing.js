const SPACE_COEFFICIENT = 4

const dsSpacingCssVars = {
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

const dsSpacing = {
  zero: dsSpacingCssVars.zero / SPACE_COEFFICIENT,
  deepFreeze: dsSpacingCssVars.deepFreeze / SPACE_COEFFICIENT,
  quickFreeze: dsSpacingCssVars.quickFreeze / SPACE_COEFFICIENT,
  glacial: dsSpacingCssVars.glacial / SPACE_COEFFICIENT,
  frostbite: dsSpacingCssVars.frostbite / SPACE_COEFFICIENT,
  bitterCold: dsSpacingCssVars.bitterCold / SPACE_COEFFICIENT,
  cool: dsSpacingCssVars.cool / SPACE_COEFFICIENT,
  mild: dsSpacingCssVars.mild / SPACE_COEFFICIENT,
  pleasant: dsSpacingCssVars.pleasant / SPACE_COEFFICIENT,
  warm: dsSpacingCssVars.warm / SPACE_COEFFICIENT,
  tepid: dsSpacingCssVars.tepid / SPACE_COEFFICIENT,
  tropical: dsSpacingCssVars.tropical / SPACE_COEFFICIENT,
  hot: dsSpacingCssVars.hot / SPACE_COEFFICIENT,
  blazing: dsSpacingCssVars.blazing / SPACE_COEFFICIENT,
  molten: dsSpacingCssVars.molten / SPACE_COEFFICIENT,
  superheated: dsSpacingCssVars.superheated / SPACE_COEFFICIENT,
  meltdown: dsSpacingCssVars.meltdown / SPACE_COEFFICIENT,
  whiteHot: dsSpacingCssVars.whiteHot / SPACE_COEFFICIENT,
  plasma: dsSpacingCssVars.plasma / SPACE_COEFFICIENT
}

export { SPACE_COEFFICIENT, dsSpacingCssVars, getSpacingPX }

export default dsSpacing

function getSpacingPX (multiplier) {
  return `${SPACE_COEFFICIENT * multiplier}px`
}
