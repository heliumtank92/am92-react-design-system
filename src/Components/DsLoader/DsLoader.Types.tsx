import { CSSProperties } from 'react'
import { LottieComponentProps } from 'lottie-react'

import SingleDotLoader from './assets/singleDotLoader.json'
import ThreeDotLoader from './assets/threeDotLoader.json'
import { DsColorTokens } from '../../Types'
import { DsBackdropProps } from '../DsBackdrop'

type TVariant = 'threeDot' | 'singleDot'
type TPosition = 'absolute' | 'fixed'

export interface DsLoaderProps
  extends Omit<LottieComponentProps, 'animationData'> {
  'ds-variant'?: TVariant
  position?: TPosition
  backdrop?: boolean
  BackdropProps?: DsBackdropProps
  color?: DsColorTokens | CSSProperties['color']
}

export const DS_LOADER_DEFAULT_PROPS: DsLoaderProps = {
  'ds-variant': 'threeDot',
  position: 'fixed',
  backdrop: true,
  loop: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    progressiveLoad: true
  },
  style: { height: '100px', width: '100px' }
}

export const DATA_MAP: Record<TVariant, object> = {
  singleDot: SingleDotLoader,
  threeDot: ThreeDotLoader
}
