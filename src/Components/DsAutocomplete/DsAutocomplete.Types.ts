import { AutocompleteProps } from '@mui/material'

export interface DsAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {}

export const DsAutocompleteDefaultProps = {}
