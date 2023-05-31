import { AutocompleteProps } from '@mui/material'
export interface DsAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {}

// let DsAutocompleteDefaultPropsTypes: DsAutocompleteProps<boolean, undefined, undefined, undefined>

export const DsAutocompleteDefaultProps: DsAutocompleteProps = {
  Multiple: true,
  DisableClearable: undefined,
  FreeSolo: undefined,
  ChipComponent: 'div'
}

const extendedProps: AutocompleteProps<Test extends {}> = {
  Multiple: true,
  DisableClearable: undefined,
  FreeSolo: undefined,
  ChipComponent: 'div'
}

