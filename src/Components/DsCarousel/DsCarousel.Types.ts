import React from 'react'

import { SwiperProps } from 'swiper/swiper-react'
import { DsBoxProps } from '../DsBox'
import { DsIconButtonProps } from '../DsIconButton'
import { DsRemixIconProps } from '../DsRemixIcon'

export interface DsCarouselNavigationButtonProps extends DsIconButtonProps {
  IconProps?: Omit<DsRemixIconProps, 'ref'>
}

export interface DsCarouselNavigationProps {
  uid: string
  isEnabled: boolean
  NavigationProps?: {
    PrevButtonProps?: DsCarouselNavigationButtonProps
    NextButtonProps?: DsCarouselNavigationButtonProps
  }
}

export interface DsCarouselPaginationProps {
  uid: string
  isEnabled: boolean
  isAutoplayEnabled: boolean
  AutoplaySettings: DsCarouselProps['autoplay']
  PaginationSettings?: DsCarouselProps['pagination']
  PaginationProps?: DsBoxProps
}

type DsCarouselPaginationMode = 'internal' | 'external'

export type DsCaroselPaginationSettings = SwiperProps['pagination'] & {
  mode?: DsCarouselPaginationMode
}

export interface DsCarouselProps
  extends Omit<SwiperProps, 'direction' | 'pagination'>,
    Omit<DsCarouselNavigationProps, 'uid' | 'isEnabled'>,
    Omit<
      DsCarouselPaginationProps,
      'uid' | 'isEnabled' | 'isAutoplayEnabled' | 'AutoplaySettings'
    > {
  PaginationWrapperProps?: DsBoxProps
  SwiperConatinerWrapperProps?: DsBoxProps
  SwiperConatinerStyles?: React.CSSProperties
  // Vertical mode not supported
  direction?: 'horizontal'
  pagination?: DsCaroselPaginationSettings
}

export const CAROUSEL_DEFAULT_SETTINGS: DsCarouselProps = {
  edgeSwipeDetection: true,
  grabCursor: true,
  keyboard: true,
  virtual: true
}

export const DsCarouselDefaultProps: DsCarouselProps = CAROUSEL_DEFAULT_SETTINGS

export const SWIPER_NAVIGATION_SETTINGS = {
  enabled: true,
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  disabledClass: 'Mui-disabled',
  navigationDisabledClass: 'Mui-disabled'
}

export const SWIPER_PAGINATION_SETTINGS = {
  enabled: true,
  el: '.swiper-pagination',
  mode: 'internal' as DsCarouselPaginationMode
}

export const SWIPER_AUTOPLAY_SETTINGS = {
  delay: 3000,
  pauseOnMouseEnter: true
}
