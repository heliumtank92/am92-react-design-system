import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ASSEST_DOMAIN } from 'src/Configurations/env'

export default class DsImage extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.replaceExtension = this.replaceExtension.bind(this)
  }

  replaceExtension (src, extension) {
    const currentExtension = src.split('.').pop()
    return src.replace(`.${currentExtension}`, `.${extension}`)
  }

  render () {
    const { src, alt, ...restProps } = this.props
    const imageURL = new URL(src, ASSEST_DOMAIN).href

    return (
      <picture {...restProps}>
        <source srcSet={imageURL} alt={alt} />
        <img src={imageURL} alt={alt} {...restProps} />
      </picture>
    )
  }
}
