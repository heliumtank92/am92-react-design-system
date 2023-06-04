import { AutocompleteProps } from '@mui/material'

export interface DsAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {}

export const DsAutocompleteDefaultProps: DsAutocompleteProps<
  any,
  boolean,
  boolean,
  boolean
> = {
  multiple: false,
  disableClearable: false,
  freeSolo: false,
  renderInput: () => <></>,
  options: []
}
