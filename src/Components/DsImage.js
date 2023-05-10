import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Fade } from '@mui/material'

import DsBox from './DsBox'
import DsRemixIcon from './DsRemixIcon'

import DsCircularProgress from './DsCircularProgress'

export default class DsImage extends PureComponent {
  static propTypes = {
    src: PropTypes.string,
    srcSet: PropTypes.arrayOf(PropTypes.object),
    alt: PropTypes.string,
    errorIconFontSize: PropTypes.any,
    errorIconClass: PropTypes.string
  }

  static defaultProps = {
    src: '',
    srcSet: [],
    alt: '',
    errorIconFontSize: 'var(--ds-typo-fontSizeMild)',
    errorIconClass: 'ri-image-2-line'
  }

  state = { loadState: 'LOADING' }

  handleLoad = e => this.setState({ loadState: 'LOADED' })
  handleError = e => this.setState({ loadState: 'ERROR' })

  hasSource = () => {
    const { src, srcSet } = this.props
    return !!(src || srcSet.length)
  }

  renderLoading = () => {
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

  renderError = () => {
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

  renderImageSrcSet = () => {
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
      const lastIndex = srcSet.length - 1
      children = srcSet.map((src, index) => {
        const isLast = index === lastIndex
        const { src: imageSrc, ...restProps } = src

        if (!isLast) {
          return (
            <source
              key={index}
              alt={alt}
              srcSet={imageSrc}
              {...restProps}
            />
          )
        } else {
          return <img key={index} alt={alt} {...src} {...imgProps} />
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
        <Fade in={isLoaded}>
          <picture
            onLoad={this.handleLoad}
            onError={this.handleError}
          >
            {this.renderError()}
            {this.renderImageSrcSet()}
          </picture>
        </Fade>
        {this.renderLoading()}
      </>
    )
  }
}
