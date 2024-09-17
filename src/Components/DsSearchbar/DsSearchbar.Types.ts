import {
  DsAutocompleteDefaultProps,
  DsAutocompleteProps
} from '../DsAutocomplete'
import {
  DsInputAdornmentDefaultProps,
  DsInputAdornmentProps
} from '../DsInputAdornment'

export interface DsSearchbarProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends Omit<
    DsAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    'onChange' | 'renderInput'
  > {
  name: string
  onChange: (name: string, value: any) => void
  startAdornmentProps?: DsInputAdornmentProps
  placeholder?: string
}

export const DsSearchbarDefaultProps: DsSearchbarProps<
  any,
  boolean,
  boolean,
  boolean
> = {
  ...DsAutocompleteDefaultProps,
  name: '',
  onChange: () => {},
  placeholder: 'Search here',
  startAdornmentProps: DsInputAdornmentDefaultProps
}
