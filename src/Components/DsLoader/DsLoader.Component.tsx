import React, { PureComponent } from 'react'
import Lottie from 'lottie-react'

import {
  DATA_MAP,
  DS_LOADER_DEFAULT_PROPS,
  DsLoaderProps
} from './DsLoader.Types'
import { DsBackdrop } from '../DsBackdrop'

export class DsLoader extends PureComponent<DsLoaderProps> {
  static defaultProps = DS_LOADER_DEFAULT_PROPS

  render() {
    const mergedProps = { ...DS_LOADER_DEFAULT_PROPS, ...this.props }
    const {
      'ds-variant': loaderVariant,
      color,
      position,
      backdrop,
      BackdropProps,
      ...lottieProps
    } = mergedProps

    console.log('lottieProps', lottieProps)
    return (
      <DsBackdrop
        {...BackdropProps}
        open={true}
        invisible={!backdrop}
        sx={[
          {
            '.dot-class': {
              fill: `var(--ds-colour-${color}, var(--ds-colour-dotLoader))`
            },
            position,
            color: ''
          },
          backdrop
            ? {
                '.dot-class': {
                  fill: `var(--ds-colour-${color}, var(--palette-common-white))`
                }
              }
            : {},
          {
            '.dot-class': {
              fill: color
            }
          }
        ]}
      >
        <Lottie {...lottieProps} animationData={DATA_MAP[loaderVariant!]} />
      </DsBackdrop>
    )
  }
}
