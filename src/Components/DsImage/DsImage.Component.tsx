import React, { PureComponent, SyntheticEvent } from 'react'

import { DsFade } from '../DsFade'
import { DsBox } from '../DsBox'
import { DsRemixIcon } from '../DsRemixIcon'
import { DsCircularProgress } from '../DsCircularProgress'
import {
  DsImageProps,
  DsImageState,
  DsImageDefaultProps,
  DsImageDefultState
} from './DsImage.Types'

export class DsImage extends PureComponent<DsImageProps, DsImageState> {
  static defaultProps = DsImageDefaultProps
  state = DsImageDefultState

  handleLoad = (e: SyntheticEvent): void =>
    this.setState({ loadState: 'LOADED' })
  handleError = (e: SyntheticEvent): void =>
    this.setState({ loadState: 'ERROR' })

  hasSource = (): boolean => {
    const { src, srcSet } = this.props
    return !!(src || (srcSet && srcSet.length))
  }

  renderLoading = (): React.ReactNode => {
    const { loadState } = this.state

    const isLoading = loadState === 'LOADING' && this.hasSource()
    if (!isLoading) return false

    return (
      <DsBox
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <DsCircularProgress
          size="100%"
          sx={{ maxHeight: '50px', maxWidth: '50px' }}
        />
      </DsBox>
    )
  }

  renderError = (): React.ReactNode => {
    const { errorIconFontSize, errorIconClass } = this.props
    const { loadState } = this.state

    const isError = loadState === 'ERROR' || !this.hasSource()
    if (!isError) return false

    return (
      <DsBox
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          fontSize: errorIconFontSize
        }}
      >
        <DsRemixIcon
          className={errorIconClass}
          color="iconDisabled"
          fontSize="inherit"
        />
      </DsBox>
    )
  }

  renderImageSrcSet = (): React.ReactNode => {
    const isValidSource = this.hasSource()

    if (!isValidSource) {
      return false
    }

    const { loadState } = this.state
    const {
      src,
      srcSet,
      alt,
      errorIconClass,
      errorIconFontSize,
      ...restProps
    } = this.props

    const isLoaded = loadState === 'LOADED'
    const imgDisplayProps = isLoaded ? {} : { display: 'none' }
    const imgProps = {
      ...restProps,
      style: { ...restProps?.style, ...imgDisplayProps }
    }

    let children

    if (src) {
      children = <img alt={alt} src={src} {...imgProps} />
    }

    if (!children) {
      const lastIndex = srcSet && srcSet.length - 1
      children =
        srcSet &&
        srcSet.map((src, index) => {
          const isLast = index === lastIndex
          const { src: imageSrc, style, ...restProps } = src

          if (!isLast) {
            return <source key={index} srcSet={imageSrc} {...restProps} />
          } else {
            return <img key={index} {...src} {...imgProps} />
          }
        })
    }

    return children
  }

  render() {
    const { loadState } = this.state
    const isLoaded = loadState === 'LOADED' || loadState === 'ERROR'
    return (
      <>
        <DsFade in={isLoaded}>
          <picture onLoad={this.handleLoad} onError={this.handleError}>
            {this.renderError()}
            {this.renderImageSrcSet()}
          </picture>
        </DsFade>
        {this.renderLoading()}
      </>
    )
  }
}
