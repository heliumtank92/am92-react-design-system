import * as React from 'react'
import { DsBox } from '../DsBox'
import { DsFade } from '../DsFade'
import { DsRemixIcon } from '../DsRemixIcon'
import { DsSkeleton } from '../DsSkeleton'
import {
  DsImageProps,
  DsImageState,
  DsImageDefaultState,
  DEFULT_ERROR_ICON_PROPS,
  INNER_COMPONENT_STYLE
} from './DsImage.Types'

export class DsImage extends React.Component<DsImageProps, DsImageState> {
  state = DsImageDefaultState

  handleSetLoadedStage = () => this.setState({ stage: 'LOADED' })
  handleSetErrorStage = () => this.setState({ stage: 'ERROR' })

  hasSource = () => {
    const { srcSet = [] } = this.props
    return srcSet && srcSet.length > 0
  }

  renderLoadingComponent = () => {
    const { stage } = this.state
    const { aspectRatio, LoaderProps } = this.props
    const hasSource = this.hasSource()
    const isLoading = hasSource && stage === 'LOADING'

    if (!isLoading) {
      return false
    }

    return (
      <DsSkeleton
        variant="rectangular"
        width="100%"
        height="100%"
        {...LoaderProps}
        sx={{
          ...(aspectRatio ? INNER_COMPONENT_STYLE : {}),
          ...LoaderProps?.sx
        }}
      />
    )
  }

  renderErrorComponent = () => {
    const { stage } = this.state
    const { aspectRatio, ErrorIconProps } = this.props
    const hasSource = this.hasSource()
    const isError = !hasSource || stage === 'ERROR'

    if (!isError) {
      return false
    }

    return (
      <DsRemixIcon
        color="iconDisabled"
        fontSize="inherit"
        {...DEFULT_ERROR_ICON_PROPS}
        {...ErrorIconProps}
        sx={{
          ...(aspectRatio ? INNER_COMPONENT_STYLE : {}),
          ...ErrorIconProps?.sx
        }}
      />
    )
  }

  renderPictureComponent = () => {
    const { srcSet, aspectRatio, ErrorIconProps, WrapperProps, ...ImageProps } =
      this.props
    const hasSource = this.hasSource()

    if (!hasSource) {
      return <></>
    }

    return (
      <picture
        onLoad={this.handleSetLoadedStage}
        onError={this.handleSetErrorStage}
      >
        {srcSet?.map((src, index) => {
          const { src: imageSrc, style, ...restProps } = src
          const isLast = index === srcSet.length - 1

          if (isLast) {
            return (
              <img
                key={index}
                src={imageSrc}
                {...restProps}
                {...ImageProps}
                style={{
                  ...(aspectRatio ? INNER_COMPONENT_STYLE : {}),
                  display: 'block',
                  maxWidth: '100%',
                  ...ImageProps?.style
                }}
              />
            )
          }

          return <source key={index} srcSet={imageSrc} {...restProps} />
        })}
      </picture>
    )
  }

  render() {
    const { stage } = this.state
    const { srcSet, aspectRatio, WrapperProps } = this.props
    const hasSource = srcSet && srcSet.length > 0
    const isError = !hasSource || stage === 'ERROR'

    const isLoading = !isError && stage === 'LOADING'

    return (
      <DsBox
        {...WrapperProps}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          ...((aspectRatio && {
            aspectRatio: `${aspectRatio} auto`,
            overflow: 'hidden',
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            [`@supports not (aspect-ratio: ${aspectRatio})`]: {
              paddingTop: `calc((1 / ${aspectRatio}) * 100%)`,
              height: 0
            }
          }) ||
            {}),
          ...WrapperProps?.sx
        }}
      >
        {this.renderLoadingComponent()}
        {this.renderErrorComponent()}
        <DsFade in={!isLoading && !isError}>
          {this.renderPictureComponent()}
        </DsFade>
      </DsBox>
    )
  }
}
