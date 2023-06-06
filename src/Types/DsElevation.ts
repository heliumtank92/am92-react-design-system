export type DsElevationKeys =
  | '-1'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 6
  | 8
  | 9
  | 12
  | 16
  | 24

export type DsElevation = { [key in DsElevationKeys]: string }
