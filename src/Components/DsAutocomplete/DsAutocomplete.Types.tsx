import { AutocompleteProps } from '@mui/material'
import { DsRemixIcon } from '../DsRemixIcon'

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
  popupIcon: <DsRemixIcon className="ri-arrow-down-s-line" />,
  clearIcon: <DsRemixIcon color="secondary" className="ri-close-line" />,
  multiple: false,
  disableClearable: false,
  freeSolo: false,
  renderInput: () => <></>,
  options: []
}
