import { DsBoxProps } from '../DsBox'
import { DsRemixIconProps } from '../DsRemixIcon'
import { DsSkeletonProps } from '../DsSkeleton'

export interface DsImageSrcSetProps
  extends Omit<
    React.SourceHTMLAttributes<HTMLSourceElement | HTMLImageElement>,
    'srcSet' | 'ref'
  > {
  src: string
  alt: string
}

interface IErrorIconProps extends Omit<DsRemixIconProps, 'ref'> {}

export interface DsImageProps
  extends Omit<React.ImgHTMLAttributes<any>, 'srcSet'> {
  srcSet?: DsImageSrcSetProps[]
  aspectRatio?: number
  WrapperProps?: DsBoxProps
  LoaderProps?: DsSkeletonProps
  ErrorIconProps?: IErrorIconProps
}

export interface DsImageState {
  stage: 'LOADING' | 'LOADED' | 'ERROR'
}

export const DsImageDefaultState: DsImageState = {
  stage: 'LOADING'
}

export const DEFULT_ERROR_ICON_PROPS: IErrorIconProps = {
  fontSize: 'mild',
  className: 'ri-image-2-line'
}

export const INNER_COMPONENT_STYLE: React.CSSProperties = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  left: '50%',
  top: '50%'
}
