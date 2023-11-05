export type DsRadiusKeys =
  | 'zero'
  | 'deepFreeze'
  | 'quickFreeze'
  | 'glacial'
  | 'frostbite'
  | 'bitterCold'
  | 'cool'
  | 'mild'
  | 'pleasant'

export type DsRadius = { [key in DsRadiusKeys]: string }
