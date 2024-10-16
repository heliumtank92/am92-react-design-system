import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { register, SwiperContainer } from 'swiper/element'
import { SwiperProps } from 'swiper/swiper-react'

import {
  CAROUSEL_DEFAULT_SETTINGS,
  DsCaroselPaginationSettings,
  DsCarouselProps,
  SWIPER_AUTOPLAY_SETTINGS,
  SWIPER_NAVIGATION_SETTINGS,
  SWIPER_PAGINATION_SETTINGS
} from '../DsCarousel.Types'
import DsCarouselNavigation from './DsCarouselNavigation'
import DsCarouselPagination from './DsCarouselPagination'
import { DsBox } from '../../DsBox'

if (register && typeof register === 'function') {
  register()
}

const generateUid = () => {
  const random = Math.trunc((Math.random() + 1) * 1000000)
  return `${random.toString(36)}`
}

export class DsCarousel extends React.PureComponent<DsCarouselProps> {
  SwiperContainer: SwiperContainer | null = null
  uid: string = generateUid()

  componentDidMount() {
    this.initialize()
  }

  _isNavigationEnabled = () => {
    const { navigation } = this.props
    return !(
      navigation === false ||
      (navigation &&
        typeof navigation !== 'boolean' &&
        navigation.enabled === false)
    )
  }

  _isPaginationEnabled = () => {
    const { pagination } = this.props

    return !(
      pagination === false ||
      (pagination &&
        typeof pagination !== 'boolean' &&
        pagination.enabled === false)
    )
  }

  _isAutoplayEnabled = () => {
    const { autoplay } = this.props
    return !(autoplay === false)
  }

  _getNavigationSettings = (): DsCarouselProps['navigation'] | undefined => {
    const { navigation } = this.props
    const isEnabled = this._isNavigationEnabled()
    const defaultSettings = {
      ...SWIPER_NAVIGATION_SETTINGS,
      nextEl: `${SWIPER_NAVIGATION_SETTINGS.nextEl}-${this.uid}`,
      prevEl: `${SWIPER_NAVIGATION_SETTINGS.prevEl}-${this.uid}`
    }

    if (typeof navigation !== 'boolean') {
      return isEnabled ? { ...defaultSettings, ...navigation } : undefined
    }

    return (isEnabled && { ...defaultSettings }) || undefined
  }

  _getPaginationSettings = (): DsCaroselPaginationSettings | undefined => {
    const { pagination } = this.props
    const isEnabled = this._isPaginationEnabled()

    const defaultSettings = {
      ...SWIPER_PAGINATION_SETTINGS,
      el: `${SWIPER_PAGINATION_SETTINGS.el}-${this.uid}`
    }

    if (typeof pagination !== 'boolean') {
      return isEnabled ? { ...defaultSettings, ...pagination } : undefined
    }

    return (isEnabled && { ...defaultSettings }) || undefined
  }

  _getAutoPlaySettings = (): DsCarouselProps['autoplay'] | undefined => {
    const { autoplay } = this.props
    const isEnabled = this._isAutoplayEnabled()

    if (typeof autoplay !== 'boolean') {
      return isEnabled
        ? { ...SWIPER_AUTOPLAY_SETTINGS, ...autoplay }
        : undefined
    }

    return (isEnabled && { ...SWIPER_AUTOPLAY_SETTINGS }) || undefined
  }

  _sanitizeModuleProps = (
    modules: SwiperProps['modules']
  ): SwiperProps['modules'] => {
    let sanitizedModule =
      modules?.filter(
        module => !['Pagination', 'Navigation'].includes(module.name)
      ) || []

    const isNavigationEnabled = this._isNavigationEnabled()
    if (isNavigationEnabled) {
      sanitizedModule = [...sanitizedModule, Navigation]
    }

    const isPaginationEnabled = this._isPaginationEnabled()
    if (isPaginationEnabled) {
      sanitizedModule = [...sanitizedModule, Pagination]
    }

    const isAutoplayEnabled = this._isAutoplayEnabled()
    if (isAutoplayEnabled) {
      sanitizedModule = [...sanitizedModule, Autoplay]
    }

    return sanitizedModule
  }

  initialize = () => {
    const {
      children,
      PaginationProps,
      NavigationProps,
      PaginationWrapperProps,
      SwiperConatinerStyles,
      SwiperConatinerWrapperProps,
      modules,
      ...swiperProps
    } = this.props

    const sanitizedModule = this._sanitizeModuleProps(modules)

    // swiper parameters
    const swiperParams: SwiperProps = {
      ...CAROUSEL_DEFAULT_SETTINGS,
      ...swiperProps,
      // Vertical mode not supported
      direction: 'horizontal',
      modules: sanitizedModule,
      navigation: this._getNavigationSettings() || false,
      pagination: this._getPaginationSettings() || false,
      autoplay: this._getAutoPlaySettings() || false
    }

    // swiperParams = this.handleNavigationModule(swiperParams)

    // now we need to assign all parameters to Swiper element
    Object.assign(this.SwiperContainer || {}, swiperParams)

    // and now initialize it
    this.SwiperContainer?.initialize()

    // set the default theme
    document.documentElement.style.setProperty(
      '--swiper-theme-color',
      'var(--ds-colour-actionSecondary)'
    )
  }

  setRef = (swiperRef: unknown) => {
    this.SwiperContainer = swiperRef as SwiperContainer
  }

  render() {
    const {
      PaginationWrapperProps,
      SwiperConatinerWrapperProps,
      SwiperConatinerStyles,
      children,
      NavigationProps,
      PaginationProps
    } = this.props

    const paginationSettings = this._getPaginationSettings()

    return (
      <DsBox
        {...PaginationWrapperProps}
        sx={{
          position: 'relative',
          pb: paginationSettings?.mode === 'external' ? '44px' : undefined,
          ...PaginationWrapperProps?.sx
        }}
      >
        <DsBox
          {...SwiperConatinerWrapperProps}
          sx={{
            position: 'relative',
            ...SwiperConatinerWrapperProps?.sx
          }}
        >
          <swiper-container
            ref={this.setRef}
            init={false}
            style={{
              ...SwiperConatinerStyles
            }}
          >
            {React.Children.map(children, (child, index) => {
              return (
                <swiper-slide key={`${name}-${index}`}>{child}</swiper-slide>
              )
            })}
          </swiper-container>
          <DsCarouselNavigation
            uid={this.uid}
            isEnabled={this._isNavigationEnabled()}
            NavigationProps={NavigationProps}
          />
        </DsBox>
        <DsCarouselPagination
          uid={this.uid}
          isEnabled={this._isPaginationEnabled()}
          isAutoplayEnabled={this._isAutoplayEnabled()}
          AutoplaySettings={this._getAutoPlaySettings()}
          PaginationSettings={paginationSettings}
          PaginationProps={PaginationProps}
        />
      </DsBox>
    )
  }
}
