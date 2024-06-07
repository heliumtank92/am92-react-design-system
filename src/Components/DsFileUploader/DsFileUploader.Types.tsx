import { DsButtonProps } from '../DsButton'
import { DsInputProps } from '../DsInput'
import { DsRemixIconProps } from '../DsRemixIcon'
import { DsTypographyProps } from '../DsTypography'

export interface DsFileUploaderProps {
  name: string
  onChange: (name: string, files: File[]) => void
  IconProps?: Omit<DsRemixIconProps, 'ref'>
  titleButtonText?: React.ReactNode
  TitleButtonProps?: Omit<DsButtonProps, 'ref'>
  descriptionTypograpghyText?: React.ReactNode
  DescriptionTypograpghyProps?: DsTypographyProps

  InputProps?: DsInputProps['inputProps']
}

export interface DsFileUploaderState {
  files: File[]
}

export const DsFileUploaderDefaultProps: DsFileUploaderProps = {
  name: '',
  onChange: () => {},
  titleButtonText: 'Upload document',
  descriptionTypograpghyText: 'Click to browse or drop here to upload'
}

export const DsFileUploaderDefaultState: DsFileUploaderState = {
  files: []
}
