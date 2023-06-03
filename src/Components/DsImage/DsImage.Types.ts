interface SrcSetProps<T>
  extends Omit<React.SourceHTMLAttributes<T>, 'srcSet'>,
    Omit<React.ImgHTMLAttributes<T>, 'srcSet'> {}

export interface DsImageProps {
  src?: string
  srcSet?: SrcSetProps<any>[]
  alt?: string
  errorIconFontSize?: number | string
  errorIconClass?: string
  style?: object
}

export interface DsImageState {
  loadState: 'LOADING' | 'LOADED' | 'ERROR'
}

export const DsImageDefaultProps: DsImageProps = {
  src: '',
  srcSet: [],
  alt: '',
  errorIconFontSize: 'var(--ds-typo-fontSizeMild)',
  errorIconClass: 'ri-image-2-line'
}

export const DsImageDefultState: DsImageState = {
  loadState: 'LOADING'
}
